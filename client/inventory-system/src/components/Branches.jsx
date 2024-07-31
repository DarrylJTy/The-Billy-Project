import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import BranchService from '../services/BranchService';
import Layout from './Layout';
import { imgDB } from '../services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Define regex for phone number and landline validation
const PHONE_NUMBER_REGEX = /^0\d{10}$/;
const LANDLINE_NUMBER_REGEX = /^\(?\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}$/;

function Branches() {
    const [branches, setBranches] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [branch_image, setBranchImage] = useState(null);
    const [branchData, setBranchData] = useState({
        branch_name: '',
        branch_address: '',
        branch_contact: '',
        branch_image: '',
    });

    // State for filters
    const [filters, setFilters] = useState({
        branch_name: '',
        isDeleted: false,
    });

    useEffect(() => {
        fetchBranches();
    }, [filters]);

    const fetchBranches = async () => {
        try {
            // Make sure the API endpoint and method accept these parameters
            const response = await BranchService.getAllBranches(filters);
            setBranches(response.data);
        } catch (error) {
            console.log('Error fetching branches');
        }
    };

    const handleShowModal = (branch) => {
        if (branch) {
            setIsUpdateMode(true);
            setSelectedBranch(branch);
            setBranchData({
                branch_id: branch.branch_id,
                branch_name: branch.branch_name,
                branch_address: branch.branch_address,
                branch_contact: branch.branch_contact,
                branch_image: '',
            });
        } else {
            setIsUpdateMode(false);
            setBranchData({
                branch_name: '',
                branch_address: '',
                branch_contact: '',
                branch_image: '',
            });
        }
        setShowModal(true);
        setBranchImage(null);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsUpdateMode(false);
        setSelectedBranch(null);
    };

    const handleUpdate = async (updatedBranchData) => {
        try {
            let imageURL = updatedBranchData.branch_image;

            if (branch_image) {
                const storageRef = ref(imgDB, "Branch-Images/" + branch_image.name);
                await uploadBytes(storageRef, branch_image);
                imageURL = await getDownloadURL(storageRef);
            }

            const updatedBranch = {
                branch_name: updatedBranchData.branch_name || selectedBranch.branch_name,
                branch_address: updatedBranchData.branch_address || selectedBranch.branch_address,
                branch_contact: updatedBranchData.branch_contact || selectedBranch.branch_contact,
                branch_image: imageURL || selectedBranch.branch_image,
                branch_id: selectedBranch.branch_id
            };
    
            await BranchService.updateBranch(updatedBranch);
            alert('Branch Updated');
            setSelectedBranch(null);
            fetchBranches();
            handleCloseModal();
        } catch (error) {
            console.log('Error updating branch');
        }
    };

    const handleDelete = async (branch_id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this branch? Deleting this branch will also flag items and admins under this branch as deleted."
        );

        if (confirmDelete) {
            try {
                await BranchService.deleteBranch(branch_id);
                alert('Branch and related items have been flagged as deleted.');
                fetchBranches();
            } catch (error) {
                console.log('Error deleting branch');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate phone number or landline number format
        if (!PHONE_NUMBER_REGEX.test(branchData.branch_contact) && !LANDLINE_NUMBER_REGEX.test(branchData.branch_contact)) {
            alert('Please enter a valid phone number or landline number in the format: 09173245675 or (02) 1234 5678');
            return;
        }

        try {
            let imageURL = branchData.branch_image;

            if (branch_image) {
                const storageRef = ref(imgDB, "Branch-Images/" + branch_image.name);
                await uploadBytes(storageRef, branch_image);
                imageURL = await getDownloadURL(storageRef);
            }
            const newBranchData = {
                ...branchData,
                branch_image: imageURL,
            };

            if (isUpdateMode) {
                await handleUpdate(newBranchData);
            } else {
                await BranchService.createBranch(newBranchData);
                alert('Branch Added');
                fetchBranches();
                handleCloseModal();
            }
        } catch (error) {
            console.log('Error creating or updating branch');
        }
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setBranchData({ ...branchData, [name]: value });
    };

    const handleImageChange = (e) => {
        setBranchImage(e.target.files[0]); // Update the state with the selected file
    };

    // Filter handlers
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: name === 'isDeleted' ? e.target.checked : value
        }));
    };

    return (
        <Layout>
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <Form.Group controlId="filters" className="bg-danger p-3 text-light rounded">
                        <Form.Label><h2>Branch List</h2></Form.Label>
                        <hr className="mt-0" />
                        <Row className="align-items-center">
                            <Col md={3}>
                                <Form.Label>Search Branch:</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoComplete='off'
                                    name="branch_name"
                                    value={filters.branch_name}
                                    onChange={handleFilterChange}
                                    placeholder="Search by branch name"
                                />
                            </Col>
                            <Col md={3}>
                                <Form.Label>Show Deleted:</Form.Label>
                                <Form.Check 
                                    type="checkbox" 
                                    name="isDeleted" 
                                    checked={filters.isDeleted} 
                                    onChange={handleFilterChange}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Address</th>
                                    <th>Contact Number</th>
                                    {!filters.isDeleted &&
                                        <th className="text-center">Actions</th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {branches.map((branch) => (
                                    <tr key={branch.branch_id}>
                                        <td>{branch.branch_id}</td>
                                        <td>{branch.branch_name}</td>
                                        <td>
                                            {branch.branch_image ? (
                                                <img 
                                                    src={branch.branch_image} 
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                                />
                                            ) : (
                                                <span>No image uploaded</span> // or leave it empty: <span>&nbsp;</span>
                                            )}
                                        </td>
                                        <td>{branch.branch_address}</td>
                                        <td>{branch.branch_contact}</td>
                                        {!filters.isDeleted &&
                                            <td className='d-flex align-items-center justify-content-center'>
                                                <Button variant="warning" onClick={() => handleShowModal(branch)} className="m-1">Update</Button>
                                                <Button variant="danger" onClick={() => handleDelete(branch.branch_id)}>Delete</Button>
                                            </td>
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="text-center">
                        <Button variant="success" onClick={() => handleShowModal(null)} className="mt-2">
                            Create Branch
                        </Button>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{isUpdateMode ? 'Update Branch' : 'Add Branch'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Branch Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="branch_name"
                                        value={branchData.branch_name}
                                        onChange={handleTextChange}
                                        autoComplete='off'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Branch Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="branch_address"
                                        value={branchData.branch_address}
                                        onChange={handleTextChange}
                                        autoComplete='off'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Branch Contact Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="branch_contact"
                                        value={branchData.branch_contact}
                                        onChange={handleTextChange}
                                        autoComplete='off'
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Branch Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-2">
                                    {isUpdateMode ? 'Update' : 'Add'}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </Layout>
    );
}

export default Branches;
