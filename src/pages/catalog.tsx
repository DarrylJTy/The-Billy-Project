import React from 'react'
import { Link } from 'gatsby'
import Layout  from "../components/Layout"
import ItemSlot from "../components/ItemSlot"
import "../style/global.css"
import "../style/catalog.css"
import { Container, Form, Row, Col } from "react-bootstrap"

export default function catalog() {
  return (
    <Layout>
        <Container fluid className="tiles-container">
        <Row>
          <Col sm={2} className="filter-container d-flex flex-column">
            <div className='d-flex flex-column filter-text-column'>
              <h2>Categories</h2>
            </div>
            <div className='d-flex flex-column filter-checkbox-column'>
                
            </div>
          </Col>

          <Col sm={10} className="product-container">
            <div className="product-title">
              <h3>Tiles</h3>
            </div>
            <table className="product-table">  
              <tbody>
                <tr>
                  <td>
                    <Link to="/itemdescription">
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                </tr>
                <tr>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                </tr>
                <tr>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                  <td><ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} /></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        </Container>
    </Layout>
  )
}
