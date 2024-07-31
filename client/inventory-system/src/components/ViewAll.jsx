import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
import Layout from './Layout';
import '../css/ViewItemsCSS.css';

const ViewAll = () => {
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState({
        item_name: '',
        branch_id: '',
        category: '',
        size_id: '',
        isDeleted: false,
    });
    const [sizes, setSizes] = useState([]);
    const [branches, setBranches] = useState([]);
    const [toggleCreatedUpdateDetails, setToggleCreatedUpdateDetails] = useState(false); 
    const [withDeleted, setWithDeleted] = useState(false);

    useEffect(() => {
        fetchItems();
        fetchBranches();
        fetchSizes();
    }, [filters]);

    const fetchItems = async () => {
        try {
            const response = await ItemService.getAllItemsWithFilters(filters);
            // Ensure the response data is in the expected format
            const formattedItems = response.data.map(item => ({
                ...item,
                sizes: item.sizes.map(sizeDetail => ({
                    ...sizeDetail,
                    price: parseFloat(sizeDetail.price),
                }))
            }));
            setItems(formattedItems);
        } catch (error) {
            console.log("Error fetching items");
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const fetchBranches = async () => {
        try {
            const response = await BranchService.getAllBranches();
            setBranches(response.data);
        } catch (error) {
            console.log('Error fetching branches');
        }
    };

    const fetchSizes = async () => {
        try {
            const response = await ItemService.getSizes();
            setSizes(response.data);
        } catch (error) {
            console.log('Error fetching sizes');
        }
    };

    const handleToggleCreatedUpdateDetails = (e) => {
        setToggleCreatedUpdateDetails(e.target.checked);
    }

    const getBranchName = (branch_id) => {
        const branch = branches.find(b => b.branch_id === branch_id);
        return branch ? branch.branch_name : 'Unknown Branch';
    };

    return (
        <Layout>
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <Form.Group controlId="filters" className="bg-danger p-3 text-light rounded">
                        <Form.Label><h2>Item List</h2></Form.Label>
                        <hr className="mt-0" />
                        <Row className="align-items-center">
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
                            <Col md={2}>
                                <Form.Label>Search Item:</Form.Label>
                                <Form.Control
                                    type="text"
                                    autoComplete='off'
                                    name="item_name"
                                    value={filters.item_name}
                                    onChange={handleFilterChange}
                                    placeholder="Search by item name"
                                />
                            </Col>
                            <Col md={2}>
                                <Form.Label>Category:</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="category"
                                    onChange={handleFilterChange}
                                >
                                    <option value="">All Categories</option>
                                    <option value="tiles">Tiles</option>
                                    <option value="bathroom">Bathroom</option>
                                    <option value="doors">Doors</option>
                               </Form.Control>
                            </Col>
                            <Col md={1}>
                                <Form.Label>Size:</Form.Label>
                                <Form.Control as="select" name="size_id" onChange={handleFilterChange}>
                                    <option value="">All Sizes</option>
                                    {sizes.filter(size => size.size_id !== 0).map(size => (
                                        <option key={size.size_id} value={size.size_id.toString()}>
                                            {size.size_dimension}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col md={3}>
                                    <Form.Label>Display Item Modification History:</Form.Label>
                                    <Form.Check 
                                        type="checkbox" 
                                        name="createUpdate" 
                                        checked={toggleCreatedUpdateDetails}
                                        onChange={handleToggleCreatedUpdateDetails}
                                    />
                            </Col>
                            <Col md={2}>
                                <Form.Label>Show Deleted:</Form.Label>
                                <Form.Check 
                                    type="checkbox" 
                                    name="isDeleted" 
                                    checked={filters.isDeleted} 
                                    onChange={() => setFilters(prevFilters => ({
                                        ...prevFilters,
                                        isDeleted: !prevFilters.isDeleted
                                    }))}
                                />
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
                                    <th>Size - Quantity, Price</th>
                                    {toggleCreatedUpdateDetails &&
                                            <th>Created</th>
                                    }
                                    {toggleCreatedUpdateDetails &&
                                            <th>Updated</th>
                                    }
                                    <th>Branch</th>
                                    {withDeleted && <th>Deleted</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.item_id}>
                                        <td>{item.item_id}</td>
                                        <td>
                                            {item.item_image ? (
                                                <img 
                                                    src={item.item_image} 
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                                    alt={item.item_name}
                                                />
                                            ) : (
                                                <span>No image uploaded</span>
                                            )}
                                        </td>
                                        <td>{item.item_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            {item.sizes.map(size => (
                                                <div key={size.size_id}>
                                                    {size.size_id !== 0 ? (
                                                        `${size.size_dimension} - Qty: ${size.quantity}, Price: Php ${size.price.toFixed(2)}`
                                                    ) : (
                                                        `Qty: ${size.quantity}, Price: Php ${size.price.toFixed(2)}`
                                                    )}
                                                </div>
                                            ))}
                                        </td>
                                        {toggleCreatedUpdateDetails &&
                                            <td>{item.created_at}</td>
                                        }
                                        {toggleCreatedUpdateDetails &&
                                            <td>{item.updated_at}</td>
                                        }
                                        <td>{getBranchName(item.branch_id)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    {filters.isDeleted &&
                        <div className="text-muted mt-1 mb-2">If the deleted name consists a <strong>"B_ID"</strong> in the name, it means it was deleted from a branch deletion otherwise it was deleted normally. This is to ensure unique naming in the database.</div>
                    }
                </div>
            </div>
        </Layout>
    );
};

export default ViewAll;
