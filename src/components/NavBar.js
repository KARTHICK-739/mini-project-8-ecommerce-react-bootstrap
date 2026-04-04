import React from "react";
import { Navbar, Container, Badge, Nav } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function NavBar({ cartCount, onCartClick }) {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand
          className="fw-bold fs-4"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          🛍️ ShopEasy
        </Navbar.Brand>

        <Nav className="d-flex align-items-center gap-3">
          <Nav.Link className="text-white" onClick={() => navigate("/")}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white" onClick={() => navigate("/signup")}>
            Sign Up
          </Nav.Link>
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
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
