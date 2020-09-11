import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import QRCode from "qrcode.react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CustomChatBot from "../chatbot/CustomChatBot";

// const downloadQR = () => {
//     const canvas = document.getElementById("123456");
//     const pngUrl = canvas
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     let downloadLink = document.createElement("a");
//     downloadLink.href = pngUrl;
//     downloadLink.download = "123456.png";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">

            <Row> 
            <Col xs={10} xl={11} ><h4>TravelBuddy</h4><h6 style={{"opacity":"0.7"}}>Travel for Everybody</h6> </Col>
                
            <Col xs={2} xl={1}> 
            {/* <QRCode
            id="123456"
            value="123456"
            size={60}
            level={"H"}
            includeMargin={true}
            bgColor="#1A3752"
            fgColor="White"
            style={{marginTop:'-2px'}}
            />  */}
       
            </Col>
            </Row> 




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
                    Work with us
                  </a>
                </li>
                <li>
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat/new/bto-sbf">
                    Advertise with us
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.google.com/search?q=bto+sales+launch&rlz=1C5CHFA_enSG888SG888&oq=bto+sales+launch&aqs=chrome..69i57j0l7.4459j0j4&sourceid=chrome&ie=UTF-8">
                    Market with us
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/about-us/news-and-publications/press-releases">
                    Travel Insight
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://esales.hdb.gov.sg/bp25/launch/open/OPEN_page_7142/home.html">
                    Travel APIs
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
                    About us
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/financing-a-flat-purchase">
                    Why TravelBuddy? 
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/servicing-your-hdb-loan">
                    Media
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/selling-a-flat">
                    Sustainability
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.hdb.gov.sg/cs/infoweb/residential/renting-a-flat">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
            <QRCode
            id="123456"
            value="123456"
            size={175}
            level={"H"}
            includeMargin={true}
            bgColor="#1A3752"
            fgColor="White"
            style={{float:"right",marginRight:"4px", marginTop:"5px"}}
            /> 
              <ul className="list-unstyled"></ul>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-10"></div>
            <div class="col-6 col-md-2" >
              <a href="https://www.linkedin.com/company/singaporehdb/" >
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
              <div class="col-6 col-md-3" > <p style={{opacity:"0.6"}}> Subscribe to our Newsletter Service </p> </div>
            </div>
          </div>
        </div>
      </div>
      <CustomChatBot/>
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