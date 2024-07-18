import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
import Layout from './Layout';

const ViewAll = () => {
    const [items, setItems] = useState([]);
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // Only sorting state left

    useEffect(() => {
        fetchItems();
        fetchBranches();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await ItemService.getAllItems();
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const fetchBranches = async () => {
        try { 
            const response = await BranchService.getAllBranches();
            setBranches(response.data);
        } catch (error) {
            console.error('Error fetching branches: ', error);
        }
    };

    const getBranchName = (branch_id) => {
        const branch = branches.find(b => b.branch_id === branch_id);
        return branch ? branch.branch_name : 'Unknown Branch';
    };

    const handleBranchFilterChange = (event) => {
        setSelectedBranch(event.target.value);
    };


    const filteredItems = items.filter(item => {
        // Apply branch filter if selected
        if (selectedBranch && item.branch_id.toString() !== selectedBranch) {
            return false;
        }
        return true; // Show all if no filter selected
    });


    return (
        <Layout>
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-left mb-4">Item List</h2>
                    <Form.Group controlId="filters" className="mb-4">
                        <Row className="align-items-center">
                            <Col md={3}>
                                <Form.Label>Branch:</Form.Label>
                                <Form.Control as="select" defaultValue="" onChange={handleBranchFilterChange}>
                                    <option value="">All Branches</option>
                                    {branches.map(branch => (
                                        <option key={branch.branch_id} value={branch.branch_id.toString()}>{branch.branch_name}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>

                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Branch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map((item, index) => (
                                    <tr key={item.item_id}>
                                        <td>{item.item_id}</td>
                                        <td>{item.image}</td>
                                        <td>{item.item_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>Php {item.price.toFixed(2)}</td>
                                        <td>{getBranchName(item.branch_id)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ViewAll;