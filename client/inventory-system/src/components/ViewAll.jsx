import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
import Layout from './Layout';
import '../css/ViewItemsCSS.css';

const ViewAll = () => {
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({
        branch_id: '',
        category: '',
        size_id: '',
        isDeleted: false,
    })
    const [sizes, setSizes] = useState([]);
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [withDeleted, setWithDeleted] = useState(false);

    useEffect(() => {
        fetchItems();
        fetchBranches();
        fetchSizes();
    }, [filters]);

    const fetchItems = async () => {
        try {
            const response = await ItemService.getAllItemsWithFilters(filters);
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error)
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(
            prevFilters => ({
                ...prevFilters,
                [name]: value
            }));
    };

    const fetchBranches = async () => {
        try {
            const response = await BranchService.getAllBranches();
            setBranches(response.data);
        } catch (error) {
            console.error('Error fetching branches:', error);
        }
    };

    const fetchSizes = async() => {
        try {
            const response = await ItemService.getSizes();
            setSizes(response.data)
        } catch (error) {
            console.error('Error fetching sizes:', error);
        }
    }

    const getBranchName = (branch_id) => {
        const branch = branches.find(b => b.branch_id === branch_id);
        return branch ? branch.branch_name : 'Unknown Branch';
    };


    const filteredItems = items.filter(item => {
        if (selectedBranch && item.branch_id.toString() !== selectedBranch) {
            return false;
        }
        return true;
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
                                <Form.Control as="select" name="branch_id" onChange={handleFilterChange}>
                                    <option value="">All Branches</option>
                                    {branches.map(branch => (
                                        <option key={branch.branch_id} value={branch.branch_id.toString()}>
                                            {branch.branch_name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Form.Label>Category:</Form.Label>
                                <Form.Control type="text" autoComplete='off' name="category" defaultValue="" value={filters.category} onChange={handleFilterChange} />
                            </Col>
                            <Col md={1}>
                                <Form.Label>Size:</Form.Label>
                                <Form.Control as="select" name="size_id" defaultValue="" onChange={handleFilterChange}>
                                    <option value="">All Sizes</option>
                                    {sizes.map(size => (
                                        <option key={size.size_id} value={size.size_id.toString()}>
                                            {size.size_dimension}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Form.Label>Show Deleted:</Form.Label>
                                <Form.Check type="checkbox" name="isDeleted" checked={filters.isDeleted} onChange={() => setFilters(prevFilters => ({
                                    ...prevFilters,
                                    isDeleted: !prevFilters.isDeleted
                                }))}/>
                            </Col>
                        </Row>
                    </Form.Group>

                    <div style={{ maxHeight: '31.25rem', overflowY: 'auto' }} className="table-container">
                        <Table striped bordered hover className="table-fixed">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Sizes</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Branch</th>
                                    {withDeleted && <th>Deleted</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
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
