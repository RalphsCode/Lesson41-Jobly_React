import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from "reactstrap";

/** Function to get and display Job Openings
 * Styled with ReactStrap.  */
const Jobs = () => {
  // Create states to store the jobs data and a loading status
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // Track "applied" jobs by their IDs
  const [appliedJobs, setAppliedJobs] = useState({}); 

    // Using a useEffect to ensure the jobs are only loaded when the Component renders
  useEffect(() => {
    const fetchJobData = async () => {
      setLoading(true);
      try {
        // Get the jobs from via the API helper
        const jobOpenings = await JoblyApi.getAllJobs();
        // Store the jobs directly as an array
        setJobs(jobOpenings); 
      } catch (err) {
        console.error("Error getting jobs data:", err);
      } finally {
        setLoading(false);
      }
    }; // END fetchJobData()

    fetchJobData();
  }, []);

  if (loading) return <p>Loading...</p>;

    /** Fake handle applying to a job 
     * Changes the button text, background color, 
     * and removes the link.
     * Saved in State so does NOT survive a re-render.
     * */ 
    const handleApply = (jobId) => {
        setAppliedJobs((prevAppliedJobs) => ({
          ...prevAppliedJobs,
          [jobId]: true, // Mark the job as applied
        }));
      };    // END handleApply()

  return (
        <div className="job-list">
          <Row className="gy-4">
            {/* Loop over the jobs */}
            {jobs.map((job) => (
              <Col md="6" lg="4" key={job.id}>
                <Card className="shadow-sm">
                  <CardBody>
                    <CardTitle tag="h5" className="text-primary">
                      {job.title}
                    </CardTitle>
                    <CardText className="text-muted mb-2">
                      <strong>Company:</strong> {job.companyName}
                    </CardText>
                    <CardText className="mb-2">
                    <strong>Salary:</strong>{" "}
                     {job.salary ? `$${job.salary.    toLocaleString()}` : "Not disclosed"}
                     </CardText>
                    <CardText className="mb-2">
                      <strong>Equity:</strong> {job.equity ? job.equity : "Not offered"}
                    </CardText>
                    {/* Fake apply now button functionality*/}
                    <Button
                    color={appliedJobs[job.id] ? "secondary" : "success"}
                    block
                    onClick={() => handleApply(job.id)}
                    // Disable button after applying
                    disabled={appliedJobs[job.id]} 
                    >
                    {appliedJobs[job.id] ? "Applied" : "Apply Now"}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
};  // END Jobs

export default Jobs;
