import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jobs } from "./Page3Arr";
import "./Page3.css";

export default function Page3Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const department = queryParams.get("dept");

  // Filter jobs
  const filteredJobs = department
    ? jobs.filter(job => job.department === department)
    : jobs;

  return (
    <div className="page3-container">
      <h2 className="page3-title">
        Job Openings {department ? `in ${department}` : ""}
      </h2>

      {filteredJobs.length > 0 ? (
        <ul className="job-list">
          {filteredJobs.map(job => (
            <li key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p className="job-info"><strong>Department:</strong> {job.department}</p>
              <p className="job-info"><strong>Location:</strong> {job.location}</p>
              <p className="job-info"><strong>Level:</strong> {job.level}</p>
              <div className="job-tags">
                {job.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <p className="job-info"><strong>Summary:</strong> {job.summary}</p>
              <p className="job-info"><strong>Posted At:</strong> {job.postedAt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found in this department.</p>
      )}

      {department && (
        <button className="reset-btn" onClick={() => navigate("/page3")}>
          Show All Jobs
        </button>
      )}
    </div>
  );
}
