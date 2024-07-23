import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
import Layout from './Layout';
import { imgDB } from '../services/firebase';
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import TokenDecoder from '../services/TokenDecoder';

const ViewItems = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);
    const [branch_id, setBranchId] = useState([]); 
    const [branch_name, setBranchName] = useState(null);
    const [item_image, setItemImage] = useState(null);
    const [itemData, setItemData] = useState({
        item_name: '',
        description: '',
        size: '',
        quantity: '',
        price: '',
        branch_id: '',
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
        const fetchBranchName = async () => {
            try {
                const branch_name = await BranchService.getSpecificBranchName(branch_id);
                setBranchName(branch_name);
            } catch (error) {
                console.error('Error fetching admin branch Name:', error);
            }
        }
        fetchBranchId;
        fetchBranchName;
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const branch_id = await TokenDecoder.getBranchId();
            const response = await ItemService.getFromBranch(branch_id);
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

    const handleShowModal = (item) => {
        if(item) {
            setIsUpdateMode(true);
            setSelectedItem(item);
            setItemData({
                item_name: item.item_name,
                description: item.description,
                size: item.size,
                quantity: item.quantity,
                price: item.price,
                item_image: '',
            })
        } else {
            setIsUpdateMode(false);
            setItemData({
                item_name: '',
                description: '',
                size: '',
                quantity: '',
                price: '',
                item_image: '',
            });
        }
        
        setShowModal(true);
        setItemImage(null); // Reset image
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsUpdateMode(false);
        setSelectedItem(null); 
    };

    const getImagePath = async () => {
        const branch_id = await TokenDecoder.getBranchId();
        const branch = await BranchService.getSpecificBranchName(branch_id);

        const branch_name = branch.data[0].branch_name;

        console.log(branch)

        const imagePath = `${branch_id}-${branch_name}`;

        return imagePath;
    }

    const handleUpdate = async (updatedItemData) => {
        try {
            let updatedImageURL = updatedItemData.item_image;

            const imagePath = await getImagePath();

            if (item_image) {
                const storageRef = ref(imgDB, `${imagePath}/` + item_image.name);
                await uploadBytes(storageRef, item_image);
                updatedImageURL = await getDownloadURL(storageRef);
                // console.log("updatedImageURL:", updatedImageURL);
            }

            const updatedItem = {
                item_id: selectedItem.item_id, 
                item_name: updatedItemData.item_name !== '' ? updatedItemData.item_name : selectedItem.item_name,
                description: updatedItemData.description !== '' ? updatedItemData.description : selectedItem.description,
                size: updatedItemData.size !== '' ? updatedItemData.size : selectedItem.size,
                quantity: updatedItemData.quantity !== '' ? updatedItemData.quantity : selectedItem.quantity,
                price: updatedItemData.price !== '' ? updatedItemData.price : selectedItem.price,
                item_image: updatedItemData.item_image !== '' ? updatedItemData.item_image : selectedItem.item_image,
                branch_id: await TokenDecoder.getBranchId(),
            };
    
            await ItemService.updateItem(updatedItem);
            alert('Item Updated');
            setSelectedItem(null);
            fetchItems(); 
            handleCloseModal(); 
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {  
            let imageURL = itemData.item_image;

            const imagePath = await getImagePath();

            if (item_image) {
                const storageRef = ref(imgDB, `${imagePath}/` + item_image.name);
                console.log(branch_name);
                await uploadBytes(storageRef, item_image);
                imageURL = await getDownloadURL(storageRef);
                // console.log("ImageURL:", imageURL);
            }
            const newItemData = {
                ...itemData,
                branch_id: await TokenDecoder.getBranchId(), // Ensure branch_id is included
                item_image: imageURL,
            };
    
            if (isUpdateMode) {
                await handleUpdate(newItemData);
            } else {
                await ItemService.createItem(newItemData);
                alert('Item Added');
                fetchItems(); 
                handleCloseModal(); 
            }
        } catch (error) {
            console.error('Error creating or updating item:', error);
        }
    };
    
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });

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
                                    <th>Size</th>
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
                                        <td>{item.size}</td>
                                        <td>{item.quantity}</td>
                                        <td>Php {item.price.toFixed(2)}</td>
                                        <td className='d-flex align-items-center justify-content-center'>
                                            <Button variant="warning" onClick={() => handleShowModal(item)} className="m-1">Update</Button>
                                            <Button variant="danger" onClick={() => handleDelete(item.item_id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="text-center">
                        <Button variant="success" onClick={() => handleShowModal(null)} className="mt-2">
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
                                    <Form.Control type="text" name="item_name" value={itemData.item_name} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="description" value={itemData.description} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="size">
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control type="text" name="size" value={itemData.size} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="quantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" name="quantity" value={itemData.quantity} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
                                </Form.Group>
                                <Form.Group controlId="price">
                                    <Form.Label>Price (Php)</Form.Label>
                                    <Form.Control type="number" step="0.01" name="price" value={itemData.price} onChange={handleTextChange} required={!isUpdateMode} autoComplete="off"/>
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
                </div>
            </div>
        </Layout>
    );
};

export default ViewItems;
