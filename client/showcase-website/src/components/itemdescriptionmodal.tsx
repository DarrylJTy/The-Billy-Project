import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../style/itemdescription.css";

const itemdescriptionmodal = ({ show, handleClose, item }) => {
  if (!item) return null; // Ensure item is available

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>{item.item_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <img
            src={item.item_image || "placeholder-image-url"} // Replace with your placeholder image URL
            alt={item.item_name}
            className="modal-image"
          />
          <div className="modal-details">
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Stock:</strong> {item.quantity > 0 ? 'In Stock' : 'Out of Stock'}</p>
            {/* <p><strong>Size Options:</strong></p>
            <ul>
              {item.size_options.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul> */}
            <p><strong>Price:</strong> ₱{item.price.toFixed(2)}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default itemdescriptionmodal;
