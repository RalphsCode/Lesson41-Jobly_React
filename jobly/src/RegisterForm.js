import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Using ReactStrap for styling
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JoblyApi from "./api";

const RegisterForm = ({userToLocalStorage}) => {
    const navigate = useNavigate();
    // Create a useState to hold the user input
    // Prefilled to make testing easier
  const [formData, setFormData] = useState({
    username: "testy",
    password: "tester",
    firstName: "Test",
    lastName: "User",
    email: "test@none.com",
  });

  // Function to update the state when the user types something
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // Function to handle the form data once submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Register formData:", formData);
    try {
        // Send the form data to the backend via API
        const result = await JoblyApi.registerUser(formData);
        // returns an object containing the token
        userToLocalStorage({"username":formData.username, "token":result.token});
        // Send user to home page
        navigate("/"); 
      } catch (err) {
        console.log('Registration failed. Please try again. Error:', err);
      }
  };    // END handleSubmit()

  // Return the form with ReactStrap formatting
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary" block>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};  // END RegisterForm()

export default RegisterForm;
