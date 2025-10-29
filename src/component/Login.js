import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Navbar, Nav } from "react-bootstrap";
import loginBg from "../images/login-bg.jpg";
import "../App.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  const getNavLinkStyle = (linkName) => ({
    color: hoveredLink === linkName ? "#f8038aff" : "black",
    fontWeight: hoveredLink === linkName ? "bold" : "500",
    transition: "all 0.3s ease",
    textShadow: hoveredLink === linkName ? "1px 1px 3px rgba(0,0,0,0.3)" : "none",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/home");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <>
      {/* ✅ Navbar (Header) Section */}
      <Navbar
        style={{
          backgroundColor: "white",
          minHeight: "90px",
        }}
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="fw-bold"
            style={{
              fontSize: "1.8rem",
              color: "#2b2b2b",
            }}
          >
            🌍 Destination Discoveries
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
                href="/"
                style={{
                  ...getNavLinkStyle("home"),
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
                onMouseEnter={() => setHoveredLink("home")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="/contact"
                style={{
                  ...getNavLinkStyle("contact"),
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
                onMouseEnter={() => setHoveredLink("contact")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Contact
              </Nav.Link>

              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
                className="ms-3"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Login Form Section */}
      <div
        className="login-background d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Container className="d-flex justify-content-center align-items-center">
          <Card className="p-4 shadow" style={{ width: "22rem", background: "white" }}>
            <h3 className="text-center mb-4 text-primary">
              Destination Discoveries Login
            </h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default LoginPage;
