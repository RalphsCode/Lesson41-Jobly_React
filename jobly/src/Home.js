import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
  const [navigateTo, setNavigateTo] = useState(null);

  const handleNavigation = (path) => {
    setNavigateTo(path);
  };

  if (navigateTo) {
    return <Navigate to={navigateTo} />;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="6">
          <Button
            color="primary"
            size="lg"
            block
            onClick={() => handleNavigation("/register")}
          >
            New User: Register
          </Button>
          <Button
            color="secondary"
            size="lg"
            block
            onClick={() => handleNavigation("/login")}
          >
            Existing User: Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
