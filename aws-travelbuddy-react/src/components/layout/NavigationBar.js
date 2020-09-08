import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// import LinkedInIcon from "@material-ui/icons/LinkedIn";

const NavigationBar = () => {
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    TravelBuddy
  </a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{"width":"400px"}}  />


    <form className="form-inline my-2 my-lg-0">
      

    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">English(UK)<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Loyalty <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Manage <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Login <span class="sr-only">(current)</span></a>
      </li>
    </ul>


      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Join Now</button>
    
    </form>
  </div>
</nav>

    );
  };
  
  export default NavigationBar;