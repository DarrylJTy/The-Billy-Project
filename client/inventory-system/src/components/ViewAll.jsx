import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
import Layout from './Layout';
import '../css/ViewItemsCSS.css';

const ViewAll = () => {
    const [items, setItems] = useState([]);
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [withDeleted, setWithDeleted] = useState(false);

    useEffect(() => {
        fetchItems();
        fetchBranches();
    }, [withDeleted]);

    const fetchItems = async () => {
        try {
            const response = withDeleted
                ? await ItemService.getAllWithDeleted()
                : await ItemService.getAllItems();
            
            // Sort items: non-deleted items first, then deleted items
            const sortedItems = response.data.sort((a, b) => {
                if (a.isDeleted === b.isDeleted) return 0;
                return a.isDeleted ? 1 : -1;
            });

            setItems(sortedItems);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const fetchBranches = async () => {
        try {
            const response = await BranchService.getAllBranchWithDeleted();
            setBranches(response.data);
        } catch (error) {
            console.error('Error fetching branches:', error);
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
        if (selectedBranch && item.branch_id.toString() !== selectedBranch) {
            return false;
        }
        return true;
    });

    const toggleWithDeleteItems = () => {
        setWithDeleted(prevState => !prevState);
    };

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
                                        <option key={branch.branch_id} value={branch.branch_id.toString()}>
                                            {branch.branch_name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col md={3}>
                                <Form.Label>&nbsp;</Form.Label> {/* This label is for spacing */}
                                <div
                                    onClick={toggleWithDeleteItems}
                                    className="form-control"
                                    style={{ cursor: 'pointer', textAlign: 'center' }}
                                >
                                    {withDeleted ? 'Hide Deleted Items' : 'Show Deleted Items'}
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>

                    <div style={{ maxHeight: '500px', overflowY: 'auto' }} className="table-container">
                        <Table striped bordered hover className="table-fixed">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Sizes</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Branch</th>
                                    {withDeleted && <th>Deleted</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map((item, index) => (
                                    <tr key={item.item_id}>
                                        <td>{item.item_id}</td>
                                        <td>
                                            {item.item_image ? (
                                                <img 
                                                    src={item.item_image} 
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                                />
                                            ) : (
                                                <span>No image uploaded</span>
                                            )}
                                        </td>
                                        <td>{item.item_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.category}</td>
                                        <td>{item.sizes ? item.sizes : 'N/A'}</td>
                                        <td>{item.quantity}</td>
                                        <td>Php {item.price.toFixed(2)}</td>
                                        <td>{getBranchName(item.branch_id)}</td>
                                        {withDeleted && (
                                            <td>
                                                <Form.Check 
                                                    type="checkbox" 
                                                    checked={item.isDeleted} 
                                                    readOnly 
                                                />
                                            </td>
                                        )}
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
