import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Row, Col, Spinner } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import Layout from './Layout';
import ItemForm from './ItemForm';
import '../css/ViewItemsCSS.css';
import TokenService from '../services/TokenService';

const ViewItems = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [branch_id, setBranchId] = useState(null);
    const [filters, setFilters] = useState({
        item_name: '',
        branch_id: null,
        category: '',
        size_id: '',
        isDeleted: false,
    });
    const [sizes, setSizes] = useState([]);
    const [toggleCreatedUpdateDetails, setToggleCreatedUpdateDetails] = useState(false); 
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchBranchId = async () => {
            try {
                const branchID = await TokenService.getAdminBranchID();
                setBranchId(branchID);
                // Update filters with the fetched branch_id
                setFilters(prevFilters => ({
                    ...prevFilters,
                    branch_id: branchID
                }));
            } catch (error) {
                console.log('Error fetching branch ID');
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

        fetchBranchId(); // Fetch branch ID when the component mounts
        fetchSizes(); // Fetch sizes when the component mounts
    }, []);

    useEffect(() => {
        if (branch_id) {
            setLoading(true); // Set loading to true when fetching items
            fetchItems(); // Fetch items whenever filters change, including branch_id
        }
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
            console.error("Error fetching items");
        } finally {
            setLoading(false); // Set loading to false once items are fetched
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleToggleCreatedUpdateDetails = (e) => {
        setToggleCreatedUpdateDetails(e.target.checked);
    }

    const handleDelete = async (item_id, item_name) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this item?"
        )
        if (confirmDelete) {
            try {
                await ItemService.deleteItem(item_id, item_name);
                alert("Successfully Deleted Item.");
                fetchItems();
            } catch (error) {
                console.log('Error deleting item');
            }
        }
        
    };

    const handleShowModal = (item) => {
        if (item) {
            setIsUpdateMode(true);
            setSelectedItem(item);
        } else {
            setIsUpdateMode(false);
            setSelectedItem(null);
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsUpdateMode(false);
        setSelectedItem(null);
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
                            <Col md={2}>
                                <Form.Label>Size:</Form.Label>
                                <Form.Control as="select" name="size_id" onChange={handleFilterChange}>
                                    <option value="">All Sizes</option>
                                    {sizes.map(size => (
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
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <div className="table-container">
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
                                        {!filters.isDeleted &&
                                            <th className="text-center">Actions</th>
                                        }
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => {
                                        return (
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
                                                {!filters.isDeleted &&
                                                    <td className='d-flex align-items-center justify-content-center'>
                                                        <Button variant="warning" onClick={() => handleShowModal(item)} className="m-1">Update</Button>
                                                        <Button variant="danger" onClick={() => handleDelete(item.item_id, item.item_name)}>Delete</Button>
                                                    </td>
                                                }
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                </Table>
                        </div>
                    )}

                    <div className="text-center">
                        <Button variant="success" onClick={() => handleShowModal(null)} className="mt-2">
                            Create Item
                        </Button>
                    </div>

                    <ItemForm 
                        showModal={showModal} 
                        handleCloseModal={handleCloseModal} 
                        isUpdateMode={isUpdateMode} 
                        selectedItem={selectedItem} 
                        fetchItems={fetchItems}
                        sizes={sizes}
                        branch_id={branch_id}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default ViewItems;
