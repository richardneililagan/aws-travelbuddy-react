import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
import Button from 'react-bootstrap/Button'

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
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li className="nav-links-homepage">
          <Link to="/website" activeClassName="currentlyOn">
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

      <li className="nav-links-homepage">
        <LanguageIcon fontSize="small" style={{marginBottom:'1px', opacity:'0.8'}} /> {'  '}

          <Link to="/">
            English (UK)
          </Link>{" "}
        </li>
      <li>
          <Link to="/website">
            Loyalty
          </Link>{" "}
        </li>
        <li >
          <Link to="/projects">Manage</Link>
        </li>
        <li>
          <a
            href="https://www.keepandshare.com/doc7/62364/resume-of-glendon-1-pdf-38k?da=y"
            target="_blank"
          >
            Login
          </a>
        </li>
        <li >
        <Button variant="light" size="sm" style={{height:'26px',marginTop:'-3px', width:'80px'}}> <p style={{fontFamily:'Roboto','fontSize':"15px", fontColor:"#767676",marginTop:'-3px', color:"#767676"}}> <center> Join Free </center>  </p></Button>         </li>
      </ul>


      </Fragment>
    </nav>
  )
}
  export default NavigationBar;