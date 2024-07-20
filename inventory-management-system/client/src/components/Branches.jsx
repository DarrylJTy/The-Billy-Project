import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap';
import BranchService from '../services/BranchService';
import Layout from './Layout'

function Branches() {
    const [branches, setBranches] = useState([])

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

  return (
    <Layout>
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-left mb-4">Branch List</h2>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
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
                                        {/* <td> possibly add branch images
                                            {item.item_image ? (
                                                <img 
                                                    src={item.item_image} 
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                                />
                                            ) : (
                                                <span>No image uploaded</span> // or leave it empty: <span>&nbsp;</span>
                                            )}
                                        </td> */}
                                        <td>{branch.branch_address}</td>
                                        <td>{branch.branch_contact}</td>
                                        <td className='d-flex align-items-center justify-content-center'>
                                            <Button variant="warning" onClick={() => handleEdit(item)} className="m-1">Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete(item.item_id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="text-center">
                        <Button variant="success" className="mt-2">
                            Create Branch
                        </Button>
                    </div>
                </div>
        </div>
    </Layout>
  )
}

export default Branches