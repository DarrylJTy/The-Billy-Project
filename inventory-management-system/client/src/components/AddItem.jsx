import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import Layout from './Layout';

const ItemForm = ({ fetchItems }) => {
    const [itemData, setItemData] = useState({
        item_name: '',
        description: '',
        quantity: '',
        price: '',
        branch_id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ItemService.createItem(itemData);
            alert("Item Added");
            setItemData({ item_name: '', description: '', quantity: '', price: '', branch_id: ''}); // Clear form
            fetchItems(); // Refresh item list
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <Layout>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="text-center" style={{ maxWidth: '600px' }}>
                    <h2>Add New Item</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="itemName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" name="item_name" value={itemData.item_name} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" value={itemData.description} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" name="quantity" value={itemData.quantity} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price (Php)</Form.Label>
                            <Form.Control type="number" step="0.01" name="price" value={itemData.price} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="branch_id">
                            <Form.Label>Branch ID</Form.Label>
                            <Form.Control type="text" name="branch_id" value={itemData.branch_id} onChange={handleChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">Add Item</Button>
                    </Form>
                </div>
            </div>
        </Layout>
    );
};

export default ItemForm;
