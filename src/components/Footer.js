import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">🛍️ ShopEasy</h5>
            <p className="text-muted small">
              Your one stop shop for all your needs. Quality products at
              affordable prices.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-muted text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/signup" className="text-muted text-decoration-none">
                  Sign Up
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <ul className="list-unstyled text-muted small">
              <li>📧 support@shopeasy.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Chennai, Tamil Nadu</li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center text-muted small">
            <p className="mb-0">© 2026 ShopEasy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
