import React from 'react'
import Layout  from "../components/Layout"
import ItemSlot from "../components/ItemSlot"
import "../style/global.css"
import "../style/tiles.css"
import { Container, Form, Row, Col } from "react-bootstrap"

export default function tiles() {
  return (
    <Layout>
        <Container fluid className="tiles-container">
        <Row>
          <Col sm={2} className="filter-container d-flex flex-column align-items-center">
            <div className='d-flex flex-column filter-text-column'>
              <h2>Filter</h2>
            </div>
            <div className='d-flex flex-column filter-checkbox-column'>
              <Form.Check
                type="checkbox"
                label="30 x 30"
                className='checkbox-label'
              />
              <Form.Check
                type="checkbox"
                label="30 x 60"
                className='checkbox-label'
              />
              <Form.Check
                type="checkbox"
                label="40 x 40"
                className='checkbox-label'
              />
              <Form.Check
                type="checkbox"
                label="60 x 60"
                className='checkbox-label'
              />
            </div>
          </Col>

          <Col sm={10} className="product-container">
            <table className="product-table">
              <tbody>
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
