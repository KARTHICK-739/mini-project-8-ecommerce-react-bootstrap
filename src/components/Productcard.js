import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();

  return (
    <Card className="h-100 shadow-sm product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{product.name}</Card.Title>
        <Card.Text className="text-muted small mb-2">
          ⭐ {product.rating} ({product.numReviews} reviews)
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Badge bg="success" className="fs-6">
            ₹{product.price}
          </Badge>
          <div className="d-flex gap-2">
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Details
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => addToCart(product)}
            >
              Add 🛒
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
