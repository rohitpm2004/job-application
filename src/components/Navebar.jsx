
import React, { useState } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";


export default function Navebar() {
  const [dept, setDept] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (dept) {
      navigate(`/page3?dept=${dept}`);
    } else {
      navigate("/page3");
    }
  }

  return (
    <div className='container'>
      <div className='logo'>
        <img className='logoImg' src="src/assets/image.png" alt="logo" />
        <h1> JOIN BARABARI COLLECTIVE </h1>
        <Link to="/applications">
          <button className='Form-submit1'>View Application Details</button>
        </Link>
      </div>

      <div className='complete-out'>
        <div className='complete'>
          <select
            id="jobs1"
            name="jobs"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          >
            <option value="" disabled>
              Department
            </option>
            <option value="Engineering">Frontend Engineering</option>
            <option value="Design">Product designer </option>
            <option value="Product">Product </option>
          </select>

          <button className='button1' onClick={handleSearch}>
            Search
          </button>
        </div>

        <ul className="nav-links">
          <li className='li1'><Link className='li1' to="/">Home</Link></li>
        </ul>

        <button className='in'>SIGN IN</button>
        {/* <button className='up'>SIGN UP</button> */}
      </div>
    </div>
  );
}
