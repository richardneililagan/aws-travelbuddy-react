import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import {SiFloatplane} from "react-icons/si"


const onClick = () => {


  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
        0.2}s`;
    }
  });

  // Burg Animation
  const burger = document.querySelector(".burger");
  burger.classList.toggle("toggle");

  if (nav.classList.value.includes("nav-active")) {
    const home = document.querySelector(".nav-links-homepage");
    const projects = document.querySelector(".nav-links-projects");
    const resume = document.querySelector(".nav-links-resume");
    const contact = document.querySelector(".nav-links-contact");

    home.addEventListener("click", () => {
      onClick();
    });

    projects.addEventListener("click", () => {
      onClick();
    });

    resume.addEventListener("click", () => {
      onClick();
    });

    contact.addEventListener("click", () => {
      onClick();
    });
  }
};


const NavigationBar = () => {
  const [click, setClick] = useState(false);

  const handleClick=()=> setClick(!click);


  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li className="nav-links-homepage">
          <Link to="/home" activeClassName="currentlyOn" style={{letterSpacing:"2px",fontSize:"20px", fontWeight:"bolder", textShadow:"0px 0px, 0px 0px, 10.5x 0px"}}>
            <SiFloatplane className="nav-icon" style={{marginRight:"5px", marginBottom:"4px"}} /> 
            {/* <img src={TB_logo} style={{height:"27px", width:"27px", marginTop:"-5px",marginRight:"6px",opacity:"0.9"}} />  */}
            TravelBuddy 
          </Link>{" "}
        </li>

      </ul>

      <div className="burger" onClick={onClick}>
        <div className="line1"> </div>
        <div className="line2"> </div>
        <div className="line3"> </div>
      </div>

      <Fragment>

      <ul className="navbar-logo">
      {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}> */}

      <li className="nav-links-homepage" onClick={handleClick}>
      {/* {click? <FaTimes/> : <FaBars/>} */}

        <LanguageIcon fontSize="small" style={{marginBottom:'2px', opacity:'0.8', marginRight:"1px"}} /> {'  '}
          <Link to="/home">
            English (UK)
          </Link>{" "}
        </li>
      <li>
          <Link to="/home">
            Loyalty
          </Link>{" "}
        </li>
        <li >
          <Link to="/home">Manage</Link>
        </li>
        <li> 
        <Divider orientation="vertical" flexItem style={{height:"24px"}} />

          </li>
        <li>
        <Link to="/home">Login</Link>
        </li>
        <li >
        <Button variant="light" size="sm" style={{height:'30px',marginTop:'-3px', width:'100px'}}> <p style={{fontFamily:'Roboto','fontSize':"15px", fontColor:"#767676",marginTop:'-1px', color:"#767676"}}> <center> Join Free </center>  </p></Button>         </li>
      </ul>


      </Fragment>
    </nav>
  )
}
  export default NavigationBar;