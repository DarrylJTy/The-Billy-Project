import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imgDB } from '../services/firebase';
import TokenDecoder from '../services/TokenDecoder';

const ItemForm = ({ showModal, handleCloseModal, isUpdateMode, selectedItem, fetchItems, branch_id }) => {
    const [sizes, setSizes] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [itemImage, setItemImage] = useState(null);
    const [itemData, setItemData] = useState({
        item_name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
        item_image: '',
    });

    useEffect(() => {
        const fetchSizes = async () => {
            try {
                const response = await ItemService.getSizes();
                setSizes(response.data);
            } catch (error) {
                console.error('Error fetching sizes:', error);
            }
        };

        fetchSizes();
    }, []);

    useEffect(() => {
        if (isUpdateMode && selectedItem) {
            setItemData({
                item_name: selectedItem.item_name,
                description: selectedItem.description,
                category: selectedItem.category,
                quantity: selectedItem.quantity,
                price: selectedItem.price,
                item_image: selectedItem.item_image,
            });
            setSelectedSizes(selectedItem.sizes ? selectedItem.sizes.split(',') : []);
        } else {
            setItemData({
                item_name: '',
                description: '',
                category: '',
                quantity: '',
                price: '',
                item_image: '',
            });
            setSelectedSizes([]);
        }
    }, [selectedItem, isUpdateMode]);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleCheckboxChange = (size_dimension) => {
        setSelectedSizes(prev => {
            if (prev.includes(size_dimension)) {
                return prev.filter(size => size !== size_dimension);
            } else {
                return [...prev, size_dimension];
            }
        });
    };

    const handleImageChange = (e) => {
        setItemImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageURL = itemData.item_image;
            const branch = await BranchService.getSpecificBranchName(branch_id)
            const branch_name = branch.data[0].branch_name
            const imagePath = `${branch_id}-${branch_name}/`

            if (itemImage) {
                const storageRef = ref(imgDB, `${imagePath}` + `${isUpdateMode ? selectedItem.item_name : itemData.item_name}`);
                await uploadBytes(storageRef, itemImage);
                imageURL = await getDownloadURL(storageRef);
            }

            const updatedItem = {
                ...itemData,
                item_image: imageURL,
                sizes: selectedSizes.join(','), // Convert sizes array to comma-separated string
                branch_id, // Include branch_id here
            };

            if (isUpdateMode) {
                await ItemService.updateItem({ ...updatedItem, item_id: selectedItem.item_id });
            } else {
                await ItemService.createItem(updatedItem);
            }

            alert("Item has been " + (isUpdateMode ? "Updated." : "Created."));
            setItemData({
                item_name: '',
                description: '',
                category: '',
                quantity: '',
                price: '',
                item_image: '',
            });
            setSelectedSizes([])
            fetchItems();
            handleCloseModal();
        } catch (error) {
            console.error('Error creating or updating item:', error);
        }
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isUpdateMode ? 'Update Item' : 'Add New Item'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="itemName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="item_name"
                            value={itemData.item_name}
                            onChange={handleTextChange}
                            required
                            autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={itemData.description}
                            onChange={handleTextChange}
                            required
                            autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={itemData.category}
                            onChange={handleTextChange}
                            required    
                            autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="sizes">
                        <Form.Label>Sizes</Form.Label>
                        <div>
                            {sizes.length > 0 ? (
                                sizes.map(size => (
                                    <Form.Check
                                        key={size.size_id}
                                        type="checkbox"
                                        label={size.size_dimension}
                                        value={size.size_dimension}
                                        checked={selectedSizes.includes(size.size_dimension)}
                                        onChange={() => handleCheckboxChange(size.size_dimension)}
                                    />
                                ))
                            ) : (
                                <div>No sizes available</div>
                            )}
                        </div>
                    </Form.Group>
                    <Form.Group controlId="quantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantity"
                            value={itemData.quantity}
                            onChange={handleTextChange}
                            required
                            autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price (Php)</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            name="price"
                            value={itemData.price}
                            onChange={handleTextChange}
                            required
                            autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="item_image">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                            type="file"
                            name="item_image"
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2">
                        {isUpdateMode ? 'Update Item' : 'Add Item'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ItemForm;
