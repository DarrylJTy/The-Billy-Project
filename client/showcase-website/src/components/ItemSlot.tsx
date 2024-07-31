import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/itemslot.css"

export default function ItemSlot({ item, onClick }) {
  const placeholderImg = "https://firebasestorage.googleapis.com/v0/b/the-billy-imgdb.appspot.com/o/placeholder.jpg?alt=media&token=b769ff1f-3e6a-45fe-b775-1aba87e3b428"
  return (
    <Card className="custom-card">
      <Card.Img 
        variant="top" 
        src={item.item_image || placeholderImg} // Replace with your placeholder image URL
        alt=""
      />
      <Card.Body>
        <Card.Title>{item.item_name}</Card.Title>
        <Button variant="outline-danger" onClick={onClick}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

