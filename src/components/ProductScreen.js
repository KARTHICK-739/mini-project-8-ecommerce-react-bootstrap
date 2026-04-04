import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import products from "../products";

function ProductScreen({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container className="mt-5 text-center">
        <h3>Product not found!</h3>
        <Button onClick={() => navigate("/")}>Go Back</Button>
      </Container>
    );
  }

  const renderStars = (rating) => {
    return "⭐".repeat(Math.round(rating));
  };

  return (
    <Container className="my-4">
      <Button
        variant="outline-secondary"
        className="mb-4"
        onClick={() => navigate("/")}
      >
        ← Go Back
      </Button>

      <Row>
        <Col md={6} className="mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fluid
            rounded
            className="w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Col>

        <Col md={3} className="mb-4">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4 className="fw-bold">{product.name}</h4>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>{renderStars(product.rating)}</span>
              <span className="text-muted ms-2">
                {product.rating} ({product.numReviews} reviews)
              </span>
            </ListGroup.Item>

            <ListGroup.Item>
              <p className="text-muted">{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col className="fw-bold text-success">₹{product.price}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Out of Stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    variant="primary"
                    className="w-100"
                    disabled={product.countInStock === 0}
                    onClick={() => {
                      addToCart(product);
                      navigate("/");
                    }}
                  >
                    Add to Cart 🛒
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
