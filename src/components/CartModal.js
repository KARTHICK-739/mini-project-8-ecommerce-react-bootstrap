import React from "react";
import { Modal, Button, ListGroup, Badge } from "react-bootstrap";

function CartModal({ show, onHide, cartItems, removeFromCart }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>🛒 Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cartItems.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted fs-5">Your cart is empty!</p>
            <p>Add some products to get started 🛍️</p>
          </div>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center py-3"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <p className="mb-0 fw-bold">{item.name}</p>
                    <small className="text-muted">
                      ₹{item.price} × {item.quantity}
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <Badge bg="success">₹{item.price * item.quantity}</Badge>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>

      <Modal.Footer>
        <div className="d-flex justify-content-between align-items-center w-100">
          <h5 className="mb-0">
            Total: <span className="text-success fw-bold">₹{total}</span>
          </h5>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={onHide}>
              Continue Shopping
            </Button>
            <Button variant="success" disabled={cartItems.length === 0}>
              Checkout ✅
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;

