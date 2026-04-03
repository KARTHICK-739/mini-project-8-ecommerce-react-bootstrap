import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./Productcard";

function ProductGrid({ products, addToCart }) {
  return (
    <Container className="my-4">
      <h2 className="fw-bold mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductGrid;
