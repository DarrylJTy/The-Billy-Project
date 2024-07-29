import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import ItemService from '../services/ItemService';
import BranchService from '../services/BranchService';
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
    const [branch_name, setBranchName] = useState(null);
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        const fetchBranchId = async () => {
            try {
                const branchID = await TokenService.getAdminBranchID();
                setBranchId(branchID);
            } catch (error) {
                console.error('Error fetching branch ID:', error);
            }
        };

        const fetchBranchName = async () => {
            try {
                if (branch_id) {
                    const branch = await BranchService.getSpecificBranchName(branch_id);
                    setBranchName(branch.data[0]?.branch_name || '');
                }
            } catch (error) {
                console.error('Error fetching branch name:', error);
            }
        };

        const fetchSizes = async () => {
            try {
                const response = await ItemService.getSizes();
                setSizes(response.data);
            } catch (error) {
                console.error('Error fetching sizes:', error);
            }
        };

        fetchBranchId();
        fetchBranchName();
        fetchSizes();
        fetchItems();
    }, [branch_id]);

    const fetchItems = async () => {
        try {
            if (branch_id) {
                const response = await ItemService.getFromBranch(branch_id);
                setItems(response.data);
            }
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleDelete = async (itemId) => {
        try {
            await ItemService.deleteItem(itemId);
            alert("Successfully Deleted Item.")
            fetchItems();
        } catch (error) {
            console.error('Error deleting item:', error);
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
                    <h2 className="text-left mb-4">Item List</h2>
                    <div className="table-container">
                        <Table striped bordered hover className="table-fixed">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Category</th>
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
                                                <span>No image uploaded</span>
                                            )}
                                        </td>
                                        <td>{item.item_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            {item.sizes ? item.sizes : 'N/A'}
                                        </td>
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

                    <ItemForm 
                        showModal={showModal} 
                        handleCloseModal={handleCloseModal} 
                        isUpdateMode={isUpdateMode} 
                        selectedItem={selectedItem} 
                        fetchItems={fetchItems}
                        sizes={sizes}
                        branch_id={branch_id} // Pass branch_id here
                    />
                </div>
            </div>
        </Layout>
    );
};

export default ViewItems;
