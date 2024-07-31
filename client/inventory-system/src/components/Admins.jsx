import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import AdminService from '../services/AdminService';
import Layout from './Layout';
import { Eye, EyeSlash } from 'react-bootstrap-icons'; 
import BranchService from '../services/BranchService';

function Admins() {
    const [admins, setAdmins] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [branches, setBranches] = useState([]);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [adminData, setAdminData] = useState({
        username: '',
        password: '',
        branch_id: '',
    });
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [filters, setFilters] = useState({
        username: '',
        branch_id: '',
        isDeleted: false,
    })

    useEffect(() => {
        fetchAdmins();
        fetchBranches();
    }, [filters]);

    const fetchAdmins = async () => {
        try {
            const response = await AdminService.getAllAdmins(filters);
            setAdmins(response.data);
        } catch (error) {
            console.log('Error fetching admins');
        }
    };

    const fetchBranches = async () => {
        try {
            const response = await BranchService.getAllBranches();
            setBranches(response.data);
        } catch (error) {
            console.log('Error fetching branches');
        }
    }

    const handleShowModal = (admin) => {
        if (admin) {
            setIsUpdateMode(true);
            setSelectedAdmin(admin);
            setAdminData({
                username: admin.username,
                branch_id: admin.branch_id,
            });
        } else {
            setIsUpdateMode(false);
            setAdminData({
                username: '',
                password: '',
                branch_id: '',
            });
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setAdminData({
            username: '',
            password: '',
            branch_id: '',
        });
    };

    const handleUpdate = async (updatedAdminData) => {
        try {
            const updatedAdmin = {
                admin_id: selectedAdmin.admin_id,
                username: updatedAdminData.username !== '' ? updatedAdminData.username : selectedAdmin.username,
                ...(updatedAdminData.password !== '' && { password: updatedAdminData.password }),
                branch_id: updatedAdminData.branch_id !== '' ? updatedAdminData.branch_id : selectedAdmin.branch_id,
            };

            const response = await AdminService.updateAdmin(updatedAdmin);

            alert('Admin Updated');
            fetchAdmins();
        } catch (error) {
            if (error.response.status === 404) {
                    alert("Branch ID was not found.")
            } 
            if (error.response.status === 409) {
                alert("Username already exists.")
            }
            console.log('Error updating admin');
        }
        handleCloseModal();
    };

    const handleDelete = async (admin_id, username) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this admin account?"
        );

        if (confirmDelete) {
            try {
                await AdminService.deleteAdmin(admin_id, username);
                alert('Admin has been deleted.');
                fetchAdmins();
            } catch (error) {
                alert('Error deleting admin');
            }
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAdminData = { ...adminData };
        if (isUpdateMode) {
            await handleUpdate(newAdminData);
        } else {
            try {
                await AdminService.createAdmin(newAdminData);
                alert('Admin Added');
                fetchAdmins(); 
            } catch (error) {
                alert('Username already exists.')
            }
        }
        handleCloseModal();
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                        <Form.Label><h2>Admin List</h2></Form.Label>
                        <hr className="mt-0" />
                        <Row className="align-items-center">
                            <Col md={2}>
                                <Form.Label>Search Username:</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoComplete='off'
                                    name="username"
                                    value={filters.username}
                                    onChange={handleFilterChange}
                                    placeholder="Search by username"
                                />
                            </Col>
                            <Col md={2}>
                                <Form.Label>Filter by Branch:</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="branch_id"
                                    onChange={handleFilterChange}
                                >
                                    <option value="">All Branches</option>
                                    {branches.filter(branch => filters.isDeleted || !branch.isDeleted).map(branch => (
                                        <option key={branch.branch_id} value={branch.branch_id}>
                                            {branch.branch_name}
                                        </option>
                                    ))}
                                </Form.Control>
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
                                    <th>Username</th>
                                    <th>Role</th>
                                    <th>Branch ID</th>
                                    {!filters.isDeleted &&
                                        <th className="text-center">Actions</th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((admin) => (
                                    <tr key={admin.admin_id}>
                                        <td>{admin.admin_id}</td>
                                        <td>{admin.username}</td>
                                        <td>{admin.role}</td>
                                        <td>{admin.branch_id}</td>
                                        {!filters.isDeleted &&
                                            <td className='d-flex align-items-center justify-content-center'>
                                                    <Button variant="warning" onClick={() => handleShowModal(admin)} className="m-1">Update</Button>
                                                {admin.role !== "admin" && (
                                                    <Button variant="danger" onClick={() => handleDelete(admin.admin_id, admin.username)}>
                                                        Delete
                                                    </Button>
                                                )}
                                            </td>
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    {filters.isDeleted &&
                        <div className="text-muted mt-1 mb-2">If the deleted name consists a <strong>"B_ID"</strong> in the name, it means it was deleted from a branch deletion otherwise it was deleted normally. This is to ensure unique naming in the database.</div>
                    }
                    <div className="text-center">
                        <Button variant="success" onClick={() => handleShowModal(null)} className="mt-2">
                            Create Admin
                        </Button>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{isUpdateMode ? 'Update Admin' : 'Add New Admin'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="username" 
                                        value={adminData.username} 
                                        onChange={handleTextChange} 
                                        required={!isUpdateMode} 
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <div className="input-group">
                                        <Form.Control 
                                            type={showPassword ? 'text' : 'password'} 
                                            name="password"
                                            defaultValue=""
                                            onChange={handleTextChange} 
                                            required={!isUpdateMode} 
                                            autoComplete="off"
                                            placeholder='Enter New Password'
                                        />
                                        <Button 
                                            variant="outline-secondary" 
                                            onClick={togglePasswordVisibility} 
                                            className="input-group-text"
                                        >
                                            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                                        </Button>
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="branch_id">
                                    <Form.Label>Branch ID</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="branch_id" 
                                        value={adminData.branch_id} 
                                        onChange={handleTextChange} 
                                        required={!isUpdateMode} 
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-2">
                                    {isUpdateMode ? 'Update Admin' : 'Add Admin'}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </Layout>
    );
}

export default Admins;
