import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/itemslot.css"

export default function ItemSlot({ imageSrc, name, price, onClick }) {
  return (
    <Card className="custom-card">
      <Card.Img 
        variant="top" 
        src={imageSrc || "placeholder-image-url"} // Replace with your placeholder image URL
        alt={name} 
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>₱{price.toFixed(2)}</Card.Text>
        <Button variant="outline-danger" onClick={onClick}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

ItemSlot.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired, // Add prop type for onClick
};
