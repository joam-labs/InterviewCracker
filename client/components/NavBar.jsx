import React from "react";
import {Link} from 'react-router-dom';


const NavBar = () => {

  return (
    <ul id= "navBar">
      <li className="nav-item">
        <Link to = "/personalPage" className = 'links'>Personal Page</Link>
      </li>
      <li className="nav-item">
        <Link to = "/feed">Home Page</Link>
      </li>
      <li className="nav-item">
        <Link to = "/">Sign Out</Link>
      </li>
    </ul>

  )  

  

}


export default NavBar;