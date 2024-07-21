import React from 'react'
import Layout  from "../components/Layout"
import "../style/global.css"
import "../style/itemdescription.css"
import { Container, Form } from 'react-bootstrap'
import { Link } from 'gatsby'

export default function itemdescription() {
  return (
    <Layout>
      <Container fluid className='item-description-container'>
        <div className="catalog-button">
          <Link to="/catalog" className="btn btn-outline-dark">
            Return to Catalog
          </Link>
        </div>
        <div className='d-flex flex-row description-block'>
          <div className='col-sm ml-auto image-item'>
            <img src="../images.png" className='product-image'/>
          </div>
          <div className="col-sm product-details">
              <h2>Item Name</h2>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar sem tellus, eu pretium lacus iaculis vitae. Pellentesque blandit eu ante ac commodo. Cras congue egestas turpis, nec pellentesque mi commodo eu. Pellentesque tortor enim, venenatis ac ante eget, tempor mattis ante. Pellentesque fringilla venenatis vulputate. </p>
              <p><strong>stock:</strong> yes</p>
              <div className="size-selector">
                <p><strong>Size:</strong></p>
                <Form.Control as="select" size="sm" className="size-dropdown">
                  <option value="30x30">30x30</option>
                  <option value="40x40">40x40</option>
                  <option value="50x50">50x50</option>
                </Form.Control>
              </div>
              <p><strong>price:</strong> ₱41.99</p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
