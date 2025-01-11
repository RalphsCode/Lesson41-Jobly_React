import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JoblyApi from "./api";

const LoginForm = ({userToLocalStorage}) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // Function to handle the form data once submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login formData:", formData);
    try {
        // Send the form data to the backend via API, token should be returned
        const result = await JoblyApi.loginUser(formData);
        console.log('User logged in (token):', result.token);
        userToLocalStorage({"username":formData.username, "token":result.token});
        console.log("Username in local storage:", localStorage.getItem("token") );
        
      } catch (err) {
        console.log('Login failed. Please try again. Error:', err);
      }
  };    // END handleSubmit()

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-4">
                Login
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
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
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <Button color="primary" block type="submit">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
