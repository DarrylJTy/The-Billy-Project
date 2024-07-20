import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import Layout from './Layout';
import firebaseapp from '../../../server/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ViewItems = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const [branch_id, setBranchId] = useState(null); 
    const [itemData, setItemData] = useState({
        item_name: '',
        description: '',
        quantity: '',
        price: '',
        item_image: '',
    });

    useEffect(() => {
        const fetchBranchId = async () => {
            try {
                const branchId = await TokenDecoder.getBranchId();
                setBranchId(branchId);
            } catch (error) {
                console.error('Error fetching admin branch ID:', error);
            }
        }
        fetchBranchId
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
            fetchItems(); 
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
        setIsUpdateMode(false);
        setSelectedItem(null); 
    };

    const handleUpdate = async (updatedItemData) => {
        try {
            // Update only the fields that have new values
            const updatedItem = {
                item_id: selectedItem.item_id, 
                item_name: updatedItemData.item_name || selectedItem.item_name,
                description: updatedItemData.description || selectedItem.description,
                quantity: updatedItemData.quantity || selectedItem.quantity,
                price: updatedItemData.price || selectedItem.price,
                item_image: updatedItemData.item_image || selectedItem.item_image,
                branch_id: updatedItemData.branch_id || selectedItem.branch_id
            };
    
            await ItemService.updateItem(updatedItem);
            console.log("Updated item_image:", updatedItem.item_image);
            alert('Item Updated');
            setSelectedItem(null);
            fetchItems(); 
            handleCloseModal(); 
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleEdit = (item) => {
        setIsUpdateMode(true); 
        setSelectedItem(item);
        setItemData({
            item_name: item.item_name,
            description: item.description,
            quantity: item.quantity,
            price: item.price,
            item_image: item.item_image, // Set image URL for edit
            branch_id: branch_id,
        });
        handleShowModal(); 
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {    
            const newItemData = {
                ...itemData,
            };
    
            if (isUpdateMode) {
                await handleUpdate(newItemData);
            } else {
                await ItemService.createItem(newItemData);
                console.log(newItemData);
                alert('Item Added');
                fetchItems(); 
                handleCloseModal(); 
            }
        } catch (error) {
            console.error('Error creating or updating item:', error);
        }
    };

    const handleImageChange = (e) => {
        setItemImage(e.target.files[0]); // Update the state with the selected file
    };

    return (
        <Layout>
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-left mb-4">Item List</h2>
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
                                    <th className="text-center">Actions</th>
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
                                                />
                                            ) : (
                                                <span>No image uploaded</span> // or leave it empty: <span>&nbsp;</span>
                                            )}
                                        </td>
                                        <td>{item.item_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>Php {item.price.toFixed(2)}</td>
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
                        <Button variant="success" onClick={handleShowModal} className="mt-2">
                            Create Item
                        </Button>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{isUpdateMode ? 'Update Item' : 'Add New Item'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="itemName">
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Control type="text" name="item_name" value={itemData.item_name} onChange={handleChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="description" value={itemData.description} onChange={handleChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="size">
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control type="text" name="size" value={itemData.test} onChange={handleChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="quantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" name="quantity" value={itemData.quantity} onChange={handleChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="price">
                                    <Form.Label>Price (Php)</Form.Label>
                                    <Form.Control type="number" step="0.01" name="price" value={itemData.price} onChange={handleChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="item_image">
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control 
                                        type="file" 
                                        name="item_image" 
                                        onChange={handleImageChange} 
                                        required={!isUpdateMode} 
                                        accept="image/*"
                                    />
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
