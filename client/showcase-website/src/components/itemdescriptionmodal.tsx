import React from 'react';
import { Modal } from 'react-bootstrap';
import "../style/itemdescription.css";

const ItemDescriptionModal = ({ show, handleClose, item }) => {
  const placeholderImg = "https://firebasestorage.googleapis.com/v0/b/the-billy-imgdb.appspot.com/o/placeholder.jpg?alt=media&token=b769ff1f-3e6a-45fe-b775-1aba87e3b428";
  
  if (!item) return null; // Ensure item is available

  // Format sizes with price and stock information
const formatSizes = () => {
  if (!item.sizes || item.sizes.length === 0) return 'No size options available';
  return item.sizes.map(size => (
    <div key={size.size_id} className="size-detail">
      <p className="fs-6 mb-1">
        {size.size_id !== 0 && <><strong>Size:</strong> {size.size_dimension} </>}
        <strong>Price:</strong> ₱{size.price ? size.price.toFixed(2) : 'N/A'} <strong>Stock:</strong> {size.quantity > 0 ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  ));
};

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="bg-danger text-light">
        <Modal.Title>{item.item_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <img
            src={item.item_image || placeholderImg}
            alt={item.item_name}
            className="modal-image img-fluid"
          />
          <div className="modal-details ms-3">
            <p className="fs-6"><strong>Description:</strong> {item.description || 'No description available'}</p>
            <p className="fs-6"><strong>Size Details:</strong></p>
            {formatSizes()}
            <p className="fs-6 text-muted mt-3">*prices may change with or without prior announcement*</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ItemDescriptionModal;
