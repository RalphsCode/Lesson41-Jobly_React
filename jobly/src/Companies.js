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

const Companies = () => {
  const { handle } = useParams(); // Get the handle from the route
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      setLoading(true);
      try {
        if (handle) {
          // Fetch specific company details
          const companyData = await JoblyApi.getCompany(handle);
          setCompany(companyData);
        } else {
          // Fetch all companies if no handle is provided
          const companies = await JoblyApi.getAllCompanies();
          setCompany({ companies });
        }
      } catch (err) {
        console.error("Error fetching company data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanyData();
  }, [handle]);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      {handle && company ? (
        <Card>
          <CardBody>
            <CardTitle tag="h3">{company.name}</CardTitle>
            <CardText>{company.description}</CardText>
            <CardText>Number of Employees: {company.numEmployees}</CardText>
            <CardText>
              <strong>Available Jobs:</strong>
            </CardText>
            <ListGroup>
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
};

export default Companies;
