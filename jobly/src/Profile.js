import React, { useState, useEffect } from "react";
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

/** Function to display a form with the logged in user's details.
 * THe user can change some of their details as needed, and 
 * update their profile.
 * Due to time constraints, submitting this form does NOT update
 * the user profile. That is a future enhancement.
 */
const Profile = () => {
    const navigate = useNavigate();
  const username = localStorage.username;
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null);

  // Pulls user data when mounts
  useEffect(() => {
    if (username && localStorage.token) {
      const fetchUserProfile = async () => {
        try {
          const result = await JoblyApi.getUser(username);
        // prefill the form with the users details
          setFormData({
            firstName: result.user.firstName || "",
            lastName: result.user.lastName || "",
            email: result.user.email || "",
          });
        } catch (err) {
          console.error("Error fetching user profile:", err);
        } finally {
          setLoading(false);
        }
      };
      // Call the function
      fetchUserProfile();
    }
  }, [username]);

  // Ensure user is logged in 
  if (!username || !localStorage.token) {
    return <h2>You need to be logged in to access this page.</h2>;
  }

  if (loading || !formData) {
    return <p>Loading your profile...</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };    // END handleChange()

  // Submitting the form logs a message and sends user to home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updating user profile is a future enhancement, and is not functional at this time.");
    // Send user to home page
    navigate("/");  
  };    // END handleSubmit()

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="8">
          <h2 className="text-center">Your Profile</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary" type="submit" block>
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};  // END Profile()

export default Profile;
