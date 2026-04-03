import React from "react";
import { Navbar, Container, Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";

function NavBar({ cartCount, onCartClick }) {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand className="fw-bold fs-4">🛍️ ShopEasy</Navbar.Brand>
        <div className="d-flex align-items-center gap-3">
          <span className="text-white">Home</span>
          <span className="text-white">Products</span>
          <div
            onClick={onCartClick}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <BsCart3 size={28} color="white" />
            {cartCount > 0 && (
              <Badge
                bg="danger"
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  fontSize: "10px",
                }}
              >
                {cartCount}
              </Badge>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
