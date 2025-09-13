import React from 'react'
import "./Details.css"   // ✅ Import CSS

export default function Details() {
  let saved = localStorage.getItem("applications");
  let applications = saved ? JSON.parse(saved) : [];

  return (
    <div className="details-container">
      <h1>Application Details</h1>

      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <table className="details-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Category</th>
              <th>Portfolio</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>{app.category}</td>
                <td>{app.portfolio}</td>
                <td>{app.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Guidance Section */}
      <div className="guidance-box">
        <h2>📌 Hiring Process</h2>
        <ol>
          <li>Submit your complete application with correct details.</li>
          <li>Our HR team will review your profile and portfolio.</li>
          <li>If shortlisted, you will be contacted for an interview.</li>
          <li>Technical and HR rounds will be conducted.</li>
          <li>Selected candidates will receive an official offer letter.</li>
        </ol>

        <h2>⚠️ Precautions & Guidelines</h2>
        <ul>
          <li>Ensure your email and phone number are valid for communication.</li>
          <li>Do not share sensitive personal information beyond what is required.</li>
          <li>Prepare your portfolio or GitHub links before applying.</li>
          <li>Beware of fake calls or emails; official communication will come only from our domain.</li>
          <li>Keep checking your email inbox (and spam folder) for updates.</li>
        </ul>
      </div>
    </div>
  )
}
