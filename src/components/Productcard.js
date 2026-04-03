import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

function Productcard({ product, addToCart }) {
  return (
    <Card className="h-100 shadow-sm product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{product.name}</Card.Title>
        <Card.Text className="text-muted small mb-2">
          Premium quality product
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Badge bg="success" className="fs-6">
            ₹{product.price}
          </Badge>
          <Button
            variant="primary"
            size="sm"
            onClick={() => addToCart(product)}
          >
            Add to Cart 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Productcard;
