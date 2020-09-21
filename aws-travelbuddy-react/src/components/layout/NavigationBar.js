import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import {SiFloatplane} from "react-icons/si"


const onClick = () => {

  const nav = document.querySelector(".navbar-logo");
  const navLinks = document.querySelectorAll(".navbar-logo li");
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
    const lang = document.querySelector(".nav-links-lang");
    const loyalty = document.querySelector(".nav-links-loyalty");
    const manage = document.querySelector(".nav-links-manage");
    const login = document.querySelector(".nav-links-login");
    const join = document.querySelector(".nav-links-join");

    lang.addEventListener("click", () => {
      onClick();
    });

    loyalty.addEventListener("click", () => {
      onClick();
    });

    manage.addEventListener("click", () => {
      onClick();
    });

    login.addEventListener("click", () => {
      onClick();
    });

    join.addEventListener("click", () => {
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
      <li className="nav-links-lang">
        <LanguageIcon fontSize="small" style={{marginBottom:'2px', opacity:'0.8', marginRight:"1px"}} /> {'  '}
          <Link to="/home">
            English (UK)
          </Link>{" "}
        </li>
      <li className="nav-links-loyalty" >
          <Link to="/home">
            Loyalty
          </Link>{" "}
        </li>
        <li className="nav-links-manage" >
          <Link to="/home">Manage</Link>
        </li>
        {/* <Divider orientation="vertical" className="navbar-divider" flexItem style={{height:"24px"}} />  */}
        <li className="nav-links-login" >
        <Link to="/home">Login</Link>
        </li>
        <li className="nav-links-join" >
        <Button variant="light" size="sm" className="join-button"> <p className="join-button-text"> <center> Join Free </center> </p></Button>         </li>
      </ul>


      </Fragment>
    </nav>
  )
}
  export default NavigationBar;