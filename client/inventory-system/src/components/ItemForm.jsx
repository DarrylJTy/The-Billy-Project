import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imgDB } from '../services/firebase';

const ItemForm = ({ showModal, handleCloseModal, isUpdateMode, selectedItem, fetchItems, branch_id }) => {
    const [sizes, setSizes] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [itemImage, setItemImage] = useState(null);
    const [itemData, setItemData] = useState({
        item_name: '',
        description: '',
        category: '',
        item_image: '',
    });
    const [sizeDetails, setSizeDetails] = useState({});

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
                item_image: selectedItem.item_image,
            });

            // Initialize sizeDetails and selectedSizes based on selectedItem.sizes
            const sizeDetails = {};
            const selectedSizes = selectedItem.sizes.map(size => {
                sizeDetails[size.size_id] = {
                    quantity: size.quantity,
                    price: size.price
                };
                return size.size_id; 
            });

            // Ensure size_id 0 is included if the category is not "tiles"
            if (selectedItem.category.toLowerCase() !== 'tiles') {
                sizeDetails[0] = sizeDetails[0] || { quantity: 0, price: 0.00 };
            }
            setSelectedSizes(selectedSizes);
            setSizeDetails(sizeDetails);
        } else {
            setItemData({
                item_name: '',
                description: '',
                category: '',
                item_image: '',
            });
            setSelectedSizes([]);
        }
    }, [selectedItem, isUpdateMode]);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });

        if (name === 'category' && value !== 'tiles') {
            setSelectedSizes([0]); // Always include size_id 0 for non-tile categories
            setSizeDetails({
                0: sizeDetails[0] || { quantity: 0, price: 0.00 }
            });
        } else if (name === 'category' && value === 'tiles') {
            setSelectedSizes([]);
            setSizeDetails({});
        }
    };

    const handleCheckboxChange = (size_id) => {
        setSelectedSizes(prev => {
            const newSelectedSizes = size_id === '0'
                ? (prev.includes(size_id) ? [] : [size_id])
                : (prev.includes(size_id) ? prev.filter(size => size !== size_id) : [...prev, size_id]);
            
            return newSelectedSizes;
        });
    };


    const handleSizeDetailChange = (size_id, e) => {
        const { name, value } = e.target;

        if (size_id === 0) {
            setSelectedSizes([0])
        }

        // Convert value to a number
        const numericValue = parseFloat(value);

        // Define minimum values
        const minValues = {
            quantity: 0,
            price: 0.00
        };

        // Apply minimum value restrictions
        const validatedValue = numericValue < minValues[name] ? minValues[name] : numericValue;

        setSizeDetails(prev => ({
            ...prev,
            [size_id]: {
                ...prev[size_id],
                [name]: validatedValue
            }
        }));
    };

    const handleImageChange = (e) => {
        setItemImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageURL = itemData.item_image;
            const branch = await BranchService.getSpecificBranchName(branch_id);
            const branch_name = branch.data[0].branch_name;
            const imagePath = `${branch_id}-${branch_name}/`;

            if (itemImage) {
                const storageRef = ref(imgDB, `${imagePath}${isUpdateMode ? selectedItem.item_name : itemData.item_name}`);
                await uploadBytes(storageRef, itemImage);
                imageURL = await getDownloadURL(storageRef);
            }

            if (selectedSizes && itemData.category !== 'tiles') {
                setSelectedSizes([0]);
                setSizeDetails({
                    0: sizeDetails[0] || { quantity: 0, price: 0.00 }
                });
                console.log("THIS RAN:", selectedSizes)
                console.log(sizeDetails)
            }

            const sizesArray = Object.keys(sizeDetails)
                .filter(size => selectedSizes.includes(Number(size))) // SelectedSizes checker to remove unselected sizes
                .map(size => ({
                    size_id: Number(size), 
                    quantity: sizeDetails[size].quantity,
                    price: sizeDetails[size].price
                }));

            const updatedItem = {
                ...itemData,
                item_image: imageURL,
                sizes: sizesArray, // Send sizes as an array of objects
                branch_id // Include branch_id here
            };

            if (isUpdateMode) {
                await ItemService.updateItem({ ...updatedItem, item_id: selectedItem.item_id });
            } else {
                console.log(updatedItem)
                await ItemService.createItem(updatedItem);
            }

            alert("Item has been " + (isUpdateMode ? "Updated." : "Created."));
            setItemData({
                item_name: '',
                description: '',
                category: '',
                item_image: '',
            });
            setSelectedSizes([]);
            setSizeDetails({});
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
                        {itemData.category.toLowerCase() === 'tiles' ? (
                            <>
                                <Form.Label>Sizes</Form.Label>
                                <div>
                                    {sizes.length > 0 ? (
                                        sizes.filter(size => size.size_id !== 0).map(size => (
                                            <div key={size.size_id} className="mb-2">
                                                <Form.Check
                                                    type="checkbox"
                                                    label={size.size_dimension}
                                                    value={size.size_id}
                                                    checked={selectedSizes.includes(size.size_id)}
                                                    onChange={() => handleCheckboxChange(size.size_id)}
                                                />
                                                {selectedSizes.includes(size.size_id) && (
                                                    <div className="d-flex mt-2">
                                                        <Form.Control
                                                            type="number"
                                                            placeholder="Quantity"
                                                            name="quantity"
                                                            min="0"
                                                            value={sizeDetails[size.size_id]?.quantity || ''}
                                                            onChange={(e) => handleSizeDetailChange(size.size_id, e)}
                                                        />
                                                        <Form.Control
                                                            type="number"
                                                            step="0.01"
                                                            placeholder="Price"
                                                            name="price"
                                                            min="0"
                                                            value={sizeDetails[size.size_id]?.price || ''}
                                                            onChange={(e) => handleSizeDetailChange(size.size_id, e)}
                                                            className="ml-2"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <div>No sizes available</div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Form.Text className="text-muted">No sizes required for this category.</Form.Text>
                                <div className="d-flex mt-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        name="quantity"
                                        min="0"
                                        value={sizeDetails[0]?.quantity || 0}
                                        onChange={(e) => handleSizeDetailChange(0, e)}
                                        required={!isUpdateMode}
                                    />
                                    <Form.Control
                                        type="number"
                                        step="0.01"
                                        placeholder="Price"
                                        name="price"
                                        min="0.00"
                                        value={sizeDetails[0]?.price || 0.00}
                                        onChange={(e) => handleSizeDetailChange(0, e)}
                                        className="ml-2"
                                        required={!isUpdateMode}
                                    />
                                </div>
                            </>
                        )}
                    </Form.Group>
                    <Form.Group controlId="itemImage">
                        <Form.Label>Item Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Form.Group>
                    <Button className="mt-2" variant="primary" type="submit">
                        {isUpdateMode ? 'Update' : 'Add'} Item
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ItemForm;
