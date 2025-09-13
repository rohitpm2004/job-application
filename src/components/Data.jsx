import React from 'react'
import {Link} from "react-router-dom" 
export default function Data(props) {
  return (
    <div className='foot-container'>
       <h3>{props.role}</h3>
       <p>{props.location}</p>
       <h5>{props.required}</h5>
       <p>{props.about}</p>
       <nav className="navbar">
       <button className='li2'><Link className='li2' to="/page2">Apply/view</Link></button>
       </nav>
       <h3>{props.work}</h3>
    </div> 
  )
}
