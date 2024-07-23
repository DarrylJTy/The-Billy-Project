import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Layout from "../components/Layout";
import ItemSlot from "../components/ItemSlot";
import ItemDescriptionModal from "../components/itemdescriptionmodal";
import "../style/global.css";
import "../style/catalog.css";
import { Container, ToggleButton, ButtonGroup, Row, Col } from "react-bootstrap";
import ItemService from "../services/ItemService";

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tiles");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []); 

  const fetchItems = async () => {
    try {
      const response = await ItemService.getAllItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  const chunkedItems = [];
  for (let i = 0; i < items.length; i += 5) {
    chunkedItems.push(items.slice(i, i + 5));
  }

  return (
    <Layout>
      <Container fluid className="tiles-container">
        <Row>
          <Col sm={2} className="filter-container d-flex flex-column">
            <div className="d-flex flex-column filter-text-column">
              <h2>Categories</h2>
            </div>
            <div className="d-flex flex-column filter-checkbox-column">
              <ButtonGroup vertical toggle>
                <ToggleButton
                  type="radio"
                  id="option1"
                  value="Tiles"
                  className={`category-button ${
                    selectedCategory === "Tiles" ? "selected" : ""
                  }`}
                  checked={selectedCategory === "Tiles"}
                  onChange={() => setSelectedCategory("Tiles")}
                >
                  Tiles
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  id="option2"
                  value="Bathroom"
                  className={`category-button ${
                    selectedCategory === "Bathroom" ? "selected" : ""
                  }`}
                  checked={selectedCategory === "Bathroom"}
                  onChange={() => setSelectedCategory("Bathroom")}
                >
                  Bathroom
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  id="option3"
                  value="Doors"
                  className={`category-button ${
                    selectedCategory === "Doors" ? "selected" : ""
                  }`}
                  checked={selectedCategory === "Doors"}
                  onChange={() => setSelectedCategory("Doors")}
                >
                  Doors
                </ToggleButton>
              </ButtonGroup>
            </div>
          </Col>

          <Col sm={10} className="product-container">
            <div className="product-title">
              <h3>{selectedCategory}</h3>
            </div>
            <div className="product-grid">
              {chunkedItems.map((itemChunk, index) => (
                <Row key={index} className="mb-4">
                  {itemChunk.map((item) => (
                    <Col key={item.id} md={2} className="mb-2">
                      <ItemSlot
                        imageSrc={item.item_image}
                        name={item.item_name}
                        price={item.price}
                        onClick={() => handleShowModal(item)}
                      />
                    </Col>
                  ))}
                </Row>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      {selectedItem && (
        <ItemDescriptionModal
          show={showModal}
          handleClose={handleCloseModal}
          item={selectedItem}
        />
      )}
    </Layout>
  );
}
