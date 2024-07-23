import React from 'react'
import PropTypes from 'prop-types';
import "../style/global.css"

export default function ItemSlot({ imageSrc, name, price }) {
  return (
    <div className='item-slot'>
        <div className="item-image-container">
            <img src={imageSrc} alt={name} className="item-image" />
        </div>
        <div className="item-details">
            <h3 className="item-name">{name}</h3>
            <p className="item-price">₱{price.toFixed(2)}</p>
        </div>
    </div>
  )
}

ItemSlot.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };