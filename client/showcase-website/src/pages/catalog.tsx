import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout  from "../components/Layout"
import ItemSlot from "../components/ItemSlot"
import "../style/global.css"
import "../style/catalog.css"
import { Container, ToggleButton, ButtonGroup, Row, Col } from "react-bootstrap"

export default function catalog() {
  const [selectedCategory, setSelectedCategory] = useState('Tiles');

  return (
    <Layout>
        <Container fluid className="tiles-container">
        <Row>
          <Col sm={2} className="filter-container d-flex flex-column">
            <div className='d-flex flex-column filter-text-column'>
              <h2>Categories</h2>
            </div>
            <div className='d-flex flex-column filter-checkbox-column'>
              <ButtonGroup vertical toggle>
                <ToggleButton
                  type="radio"
                  id="option1"
                  value="Tiles"
                  className={`category-button ${selectedCategory === 'Tiles' ? 'selected' : ''}`}
                  onChange={() => setSelectedCategory('Tiles')}
                >
                  Tiles
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  id="option2"
                  value="Bathroom"
                  className={`category-button ${selectedCategory === 'Bathroom' ? 'selected' : ''}`}
                  onChange={() => setSelectedCategory('Bathroom')}
                >
                  Bathroom
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  id="option3"
                  value="Doors"
                  className={`category-button ${selectedCategory === 'Doors' ? 'selected' : ''}`}
                  onChange={() => setSelectedCategory('Doors')}
                >
                  Doors
                </ToggleButton>
              </ButtonGroup>
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
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'> 
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'> 
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'> 
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                  <td>
                    <Link to="/itemdescription" className='item-link'>
                      <ItemSlot imageSrc="../images.png" name="Item 3" price={29.99} />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        </Container>
    </Layout>
  )
}
