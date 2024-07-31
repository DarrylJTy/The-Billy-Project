import React, { useState, useEffect } from 'react';
import { Container, ToggleButton, ButtonGroup, Row, Col, Form } from 'react-bootstrap';
import Layout from "../components/Layout";
import ItemSlot from "../components/ItemSlot";
import ItemDescriptionModal from "../components/itemdescriptionmodal";
import "../style/global.css";
import "../style/catalog.css";
import ItemService from "../services/ItemService";

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filters, setFilters] = useState({
      item_name: '',
      category: 'Tiles',
      isDeleted: false,
  });

  useEffect(() => {
    fetchItems();
  }, [filters]);
  
  const fetchItems = async () => {
    try {
      const response = await ItemService.getAllItems(filters);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

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
                  name="category"
                  className={`category-button ${
                    filters.category === "Tiles" ? "selected" : ""
                  }`}
                  checked={filters.category === "Tiles"}
                  onChange={handleFilterChange}
                >
                  Tiles
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  id="option2"
                  value="Bathroom"
                  name="category"
                  className={`category-button ${
                    filters.category === "Bathroom" ? "selected" : ""
                  }`}
                  checked={filters.category === "Bathroom"}
                  onChange={handleFilterChange}
                >
                  Bathroom
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  id="option3"
                  value="Doors"
                  name="category"
                  className={`category-button ${
                    filters.category === "Doors" ? "selected" : ""
                  }`}
                  checked={filters.category === "Doors"}
                  onChange={handleFilterChange}
                >
                  Doors
                </ToggleButton>
              </ButtonGroup>
            </div>
          </Col>

          <Col sm={10} className="product-container">
            <div className="product-title">
              <h3>{filters.category}</h3>
            </div>

            <Row className="g-3">
              {items.map((item) => (
                <Col key={item.item_id} md={2} sm={4} xs={6} className="mb-2">
                  <ItemSlot
                    item={item}
                    onClick={() => handleShowModal(item)}
                  />
                </Col>
              ))}
            </Row>
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
