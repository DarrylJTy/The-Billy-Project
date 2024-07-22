import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import AdminService from '../services/AdminService';
import Layout from './Layout';
import { Eye, EyeSlash } from 'react-bootstrap-icons'; // Import the eye icons

function Admins() {
    const [admins, setAdmins] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [adminData, setAdminData] = useState({
        username: '',
        password: '',
        branch_id: '',
    });
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await AdminService.getAllAdmins();
            setAdmins(response.data);
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    };

    const handleShowModal = (admin) => {
        if (admin) {
            setIsUpdateMode(true);
            setSelectedAdmin(admin);
            setAdminData({
                username: admin.username,
                password: admin.password,
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
                password: updatedAdminData.password !== '' ? updatedAdminData.password : selectedAdmin.password,
                branch_id: updatedAdminData.branch_id !== '' ? updatedAdminData.branch_id : selectedAdmin.branch_id,
            };

            await AdminService.updateAdmin(updatedAdmin);
            alert('Admin Updated');
            fetchAdmins();
            handleCloseModal();
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {  
            const newAdminData = { ...adminData };
            if (isUpdateMode) {
                await handleUpdate(newAdminData);
            } else {
                await AdminService.createAdmin(newAdminData);
                alert('Admin Added');
                fetchAdmins(); 
                handleCloseModal(); 
            }
        } catch (error) {
            console.error('Error creating or updating admin:', error);
        }
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Layout>
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-left mb-4">Admin List</h2>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Branch ID</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((admin) => (
                                    <tr key={admin.admin_id}>
                                        <td>{admin.admin_id}</td>
                                        <td>{admin.username}</td>
                                        <td>{admin.branch_id}</td>
                                        <td className='d-flex align-items-center justify-content-center'>
                                            <Button variant="warning" onClick={() => handleShowModal(admin)} className="m-1">Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete(admin.admin_id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

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
                                            onChange={handleTextChange} 
                                            required={!isUpdateMode} 
                                            autoComplete="off"
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
