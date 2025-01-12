import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
  const username = localStorage.getItem("username");
  const [navigateTo, setNavigateTo] = useState(null);

  // Function to handle the navigation if user clicks on button
  const handleNavigation = (path) => {
    setNavigateTo(path);
  };
  // If a button was clicked, follow that path
  if (navigateTo) {
    return <Navigate to={navigateTo} />;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="6">
        {username ? 
        <h2>Welcome {username}.</h2> :
        <>
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
          </>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
