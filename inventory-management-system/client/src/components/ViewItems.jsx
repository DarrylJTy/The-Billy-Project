import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import Layout from './Layout';

const ViewItems = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false); // Track if modal is in update mode
    const [selectedItem, setSelectedItem] = useState(null); // Track selected item for update
    const [itemData, setItemData] = useState({
        item_name: '',
        description: '',
        quantity: '',
        price: '',
        branch_id: ''
    });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await ItemService.getAllItems();
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleDelete = async (itemId) => {
        try {
            await ItemService.deleteItem(itemId);
            console.log('Deleting item with id:', itemId);
            fetchItems(); // Refresh item list
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleShowModal = () => {
        setShowModal(true);
        setItemData({
            item_name: '',
            description: '',
            quantity: '',
            price: '',
            branch_id: ''
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsUpdateMode(false); // Ensure update mode is reset when modal is closed
        setSelectedItem(null); // Clear selected item
    };

    const handleUpdate = async () => {
        try {
            // Prepare updated item data from itemData
            const updatedItem = {
                item_id: selectedItem.item_id, // Assuming item_id is needed for update
                item_name: itemData.item_name !== '' ? itemData.item_name : selectedItem.item_name,
                description: itemData.description !== '' ? itemData.description : selectedItem.description,
                quantity: itemData.quantity !== '' ? itemData.quantity : selectedItem.quantity,
                price: itemData.price !== '' ? itemData.price : selectedItem.price,
                branch_id: itemData.branch_id !== '' ? itemData.branch_id : selectedItem.branch_id
            };
            await ItemService.updateItem(updatedItem);
            console.log(updatedItem);
            alert('Item Updated');
            setSelectedItem(null);
            console.log(selectedItem);
            fetchItems(); // Refresh item list
            handleCloseModal(); // Close modal after submission
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleEdit = (item) => {
        setIsUpdateMode(true); // Set modal to update mode
        setSelectedItem(item);
        // Populate itemData with current item details
        setItemData({
            item_name: item.item_name,
            description: item.description,
            quantity: item.quantity,
            price: item.price,
            branch_id: item.branch_id
        });
        handleShowModal(); // Show the modal for editing
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isUpdateMode) {
            handleUpdate();
        } else {
            try {
                await ItemService.createItem(itemData);
                alert('Item Added');
                fetchItems(); // Refresh item list
                handleCloseModal(); // Close modal after submission
            } catch (error) {
                console.error('Error creating item:', error);
            }
        }
    };

    return (
        <Layout>
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-center mb-4">Item List</h2>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={item.item_id}>
                                        <td>{item.item_id}</td>
                                        <td>{item.item_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>Php {item.price.toFixed(2)}</td>
                                        <td className='d-flex align-items-center justify-content-center'>
                                            <Button variant="warning" onClick={() => handleEdit(item) } className="m-1">Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete(item.item_id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    {/* Button to trigger Add Item modal */}
                    <div className="text-center">
                        <Button variant="success" onClick={handleShowModal} className="mt-2">
                            Create Item
                        </Button>
                    </div>

                    {/* Modal for adding new item or updating item */}
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{isUpdateMode ? 'Update Item' : 'Add New Item'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="itemName">
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Control type="text" name="item_name" value={itemData.item_name} onChange={handleChange} required={!isUpdateMode} />
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="description" value={itemData.description} onChange={handleChange} required={!isUpdateMode} />
                                </Form.Group>
                                <Form.Group controlId="quantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" name="quantity" value={itemData.quantity} onChange={handleChange} required={!isUpdateMode} />
                                </Form.Group>
                                <Form.Group controlId="price">
                                    <Form.Label>Price (Php)</Form.Label>
                                    <Form.Control type="number" step="0.01" name="price" value={itemData.price} onChange={handleChange} required={!isUpdateMode} />
                                </Form.Group>
                                <Form.Group controlId="branch_id">
                                    <Form.Label>Branch ID</Form.Label>
                                    <Form.Control type="text" name="branch_id" value={itemData.branch_id} onChange={handleChange} required={!isUpdateMode} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-2">
                                    {isUpdateMode ? 'Update Item' : 'Add Item'}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </Layout>
    );
};

export default ViewItems;
