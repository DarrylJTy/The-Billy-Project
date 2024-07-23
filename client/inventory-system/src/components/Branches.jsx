import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap';
import BranchService from '../services/BranchService';
import Layout from './Layout'
import { imgDB } from '../services/firebase';
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";

function Branches() {
    const [branches, setBranches] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [branch_image, setBranchImage]  = useState(null)
    const [branchData, setBranchData] = useState({
        branch_name: '',
        branch_address: '',
        branch_contact: '',
        branch_image: '',
    })
;
    useEffect(() => {
        fetchBranches();
    }, []);

    const fetchBranches = async () => {
        try {
            const response = await BranchService.getAllBranches();
            setBranches(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleShowModal = (branch) => {
        if(branch) {
            setIsUpdateMode(true);
            setSelectedBranch(branch);
            setBranchData({
                branch_id: branch.branch_id,
                branch_name: branch.branch_name,
                branch_address: branch.branch_address,
                branch_contact: branch.branch_contact,
                branch_image: '',
            })
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
        setBranchImage(null); // Reset image
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
                
                console.log("imageURL:", imageURL);
            }

            const updatedBranch = {
                branch_name: updatedBranchData.branch_name !== '' ? updatedBranchData.branch_name : selectedBranch.branch_name,
                branch_address: updatedBranchData.branch_address !== '' ? updatedBranchData.branch_address : selectedBranch.branch_address,
                branch_contact: updatedBranchData.branch_contact !== '' ? updatedBranchData.branch_contact : selectedBranch.branch_contact,
                branch_image: imageURL !== '' ? imageURL : selectedBranch.branch_image,
                branch_id: selectedBranch.branch_id
            };

            console.log("selected Image:", selectedBranch.branch_image);
    
            await BranchService.updateBranch(updatedBranch);
            alert('Branch Updated');
            setSelectedBranch(null);
            fetchBranches(); 
            handleCloseModal(); 
        } catch (error) {
            console.error('Error updating branch:', error);
        }
    };

    const handleDelete = async (branch_id) => {
        try {
            await BranchService.deleteBranch(branch_id);
            console.log('Deleting branch with id:', branch_id);
            alert('Branch and releted items have been flag as deleted.')
            fetchBranches(); 
        } catch (error) {
            console.error('Error deleting branch:', error);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
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
            console.error('Error creating or updating branch:', error);
        }
    };
    
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setBranchData({ ...branchData, [name]: value });

    };

    const handleImageChange = (e) => {
        setBranchImage(e.target.files[0]); // Update the state with the selected file
    };

  return (
    <Layout>
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-left mb-4">Branch List</h2>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Address</th>
                                    <th>Contect Number</th>
                                    <th className="text-center">Actions</th>
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
                                        <td className='d-flex align-items-center justify-content-center'>
                                            <Button variant="warning" onClick={() => handleShowModal(branch)} className="m-1">Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete(branch.branch_id)}>Delete</Button>
                                        </td>
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
                            <Modal.Title>{isUpdateMode ? 'Update Branch' : 'Add New Branch'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="branchName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="branch_name" value={branchData.branch_name} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="branch_address" value={branchData.branch_address} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="contact">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control type="text" name="branch_contact" value={branchData.branch_contact} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="branch_image">
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control 
                                        type="file" 
                                        name="branch_image" 
                                        onChange={handleImageChange} 
                                        // required={!isUpdateMode} 
                                        accept="image/*"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-2">
                                    {isUpdateMode ? 'Update Branch' : 'Add Branch'}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
        </div>
    </Layout>
  )
}

export default Branches