import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

/** Function to get and display either (1) info on all companies
 * or (2) details on a specific company.
 * Styled with ReactStrap.  */
const Companies = () => {
    // Check if there is a company handle paramater passed in
  const { handle } = useParams(); 

  // Create states to store the company datam and a loading status
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  // Using a useEffect here to pull the relevant data for Companies or specific Company
  useEffect(() => {
    const fetchCompanyData = async () => {
      setLoading(true);
      try {
        if (handle) {
          // Fetch specific company details
          const companyData = await JoblyApi.getCompany(handle);
          setCompany(companyData);
        } else {
          // Fetch all companies if no handle paramater passed in
          const companies = await JoblyApi.getAllCompanies();
          setCompany({ companies });
        }
      } catch (err) {
        console.error("Error getting company data:", err);
      } finally {
        setLoading(false);
      }
    };  // END fetchCompanyData

    // Initiate the function
    fetchCompanyData();
  }, [handle]); // Update whwnever the handle changes

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
        {/* Ternary Operator to check if displaying one company or all companies */}
      {handle && company ? (
        // Just one company
        <Card>
          <CardBody>
            <CardTitle tag="h3">{company.name}</CardTitle>
            <CardText>{company.description}</CardText>
            <CardText>Number of Employees: {company.numEmployees}</CardText>
            <CardText>
              <strong>Available Jobs:</strong>
            </CardText>
            <ListGroup>
                {/* Loop through any jobs the company has open */}
                {company.jobs.map((job) => (
                    <ListGroupItem key={job.id}>
                    <p>
                        <strong>{job.title}</strong>
                    </p>
                    <p>Salary: {job.salary ? `$${job.salary.toLocaleString()}` : "Not specified"}</p>
                    <p>Equity: {job.equity ? job.equity : "Not specified"}</p>
                    </ListGroupItem>
                ))}
                </ListGroup>

          </CardBody>
        </Card>
      ) : (
        // ALl companies
        company &&
        company.companies.map((comp) => (
          <Card key={comp.handle} className="my-3">
            <CardBody>
              <CardTitle tag="h5">{comp.name}</CardTitle>
              <CardText>{comp.description}</CardText>
              <CardText>Number of Employees: {comp.numEmployees}</CardText>
              <a href={`/companies/${comp.handle}`} className="btn btn-primary">
                View Details
              </a>
            </CardBody>
          </Card>
        ))
      )}
    </Container>
  );
};  // END Companies

export default Companies;
