import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
// import footer from "../Images/BTOlogowhite.png";

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
            <h4>
              {/* <img src={footer} alt="BTO Logo" width="40" height="35" />{" "} */}
              TravelBuddy
            </h4>
            <h6 style={{"opacity":"0.7"}}>Travel for Everybody</h6>
            <hr />
     
          <div className="row">
            {/* Column 1 */}

            <div className="col-md-3 col-sm-6">
              <h4 className="footer-headers">Explore</h4>
              <ul className="list-unstyled">
                {/* <li><a href="/"></a></li> */}
                <li>
                  {" "}
                  <a href="/">Vision, Mission, and Values</a>
                </li>
                <li>
                  {" "}
                  <a href="/">Our Role</a>
                </li>
                <li>
                  {" "}
                  <a href="/">Our Logo</a>
                </li>
                <li>
                  {" "}
                  <a href="/">Research and Innovation</a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4 className="footer-headers">Partner</h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat/new/bto-sbf">
                    HDB BTO Official Website
                  </a>
                </li>
                <li>
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat/new/bto-sbf">
                    BTO/SBF/Opening
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.google.com/search?q=bto+sales+launch&rlz=1C5CHFA_enSG888SG888&oq=bto+sales+launch&aqs=chrome..69i57j0l7.4459j0j4&sourceid=chrome&ie=UTF-8">
                    BTO Sales Launch
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/about-us/news-and-publications/press-releases">
                    HDB Press Releases
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://esales.hdb.gov.sg/bp25/launch/open/OPEN_page_7142/home.html">
                    Apply For BTO
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4 className="footer-headers">Company</h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat">
                    Buying a Flat
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/financing-a-flat-purchase">
                    Financing a Flat Purchase
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/servicing-your-hdb-loan">
                    Servicing your HDB Housing Loan
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/selling-a-flat">
                    Selling a Flat
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/renting-a-flat">
                    Renting a Flat
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              {/* <h4>Lorem Ipsum</h4> */}
              <ul className="list-unstyled"></ul>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-10"></div>
            <div class="col-6 col-md-2">
              <a href="https://www.linkedin.com/company/singaporehdb/">
                {" "}
                <LinkedInIcon a href="/" />
              </a>
              <a href="https://www.facebook.com/SingaporeHDB">
                {" "}
                <FacebookIcon a href="/" />
              </a>
              <a href="https://twitter.com/singapore_hdb">
                {" "}
                <TwitterIcon a href="/" />
              </a>
              <a href="https://www.hdb.gov.sg/cs/infoweb/contact-us">
                {" "}
                <EmailIcon a href="/" />
              </a>
              <a href="https://t.me/SingaporeHDB">
                {" "}
                <TelegramIcon a href="/" />
              </a>
            </div>
          </div>

          {/* Footer Bottom  */}
          <div className="footer-bottom">
            <hr />
            <div class="row">
              <div class="col-12 col-md-9">
                &copy; {new Date().getFullYear()} TravelBuddy App - All rights
                reserved
              </div>
              <div class="col-6 col-md-3">Subscribe to our Newsletter Service</div>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer; 

const FooterContainer = styled.footer`

.container{
    font-family: Roboto, "Helvetica Neue Light", Helvetica, sans-serif;
    display: flex;
    flex-direction:column;
    position: relative;
    bottom: 0%;
}
.footer-middle{
    padding-top:2rem;
    flex:1
}
.footer-bottom{
    padding-top:2rem;
    position: relative;
    bottom: 0;
    width: 100%;
    padding-bottom:2rem;
}
ul li a {
    color:var(--mainwhite);
}
ul lia a:hover{
    color:var(--mainlightGrey);
}
a { color: inherit; } 

.footer-headers{
    font-weight:bold;
    color: var(--orange-color);
}
`;