import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
import Button from 'react-bootstrap/Button'
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import ApartmentIcon from '@material-ui/icons/Apartment';
// import HotelIcon from '@material-ui/icons/Hotel';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const SegmentBar = () => {

return (

    <nav className="navbar">
      <ul className="segment-links">
      <li className="segment-links-specials">
          <Link to="/website" activeClassName="currentlyOn">
          <LoyaltyIcon fontSize="small" style={{marginBottom:"3px", opacity:'0.85'}}/> {' '}
            Specials  |
          </Link>{" "}
        </li>
        <li className="segment-links-Flights">
          <Link to="/website" activeClassName="currentlyOn">
          {/* <LanguageIcon fontSize="small" style={{marginBottom:'1px', opacity:'0.8'}} /> */}
              <LocalAirportIcon fontSize="small" style={{marginBottom:"2px", opacity:'0.85'}}/> {' '}
            Flights 
          </Link>{" "}
        </li>
        <li className="segment-links-Hotels">
          <Link to="/website" activeClassName="currentlyOn">
          <ApartmentIcon fontSize="small" style={{marginBottom:"4px", opacity:'0.85'}}/> {' '}

            Hotels 
          </Link>{" "}
        </li>

      </ul>


    </nav>
)

}

export default SegmentBar; 

