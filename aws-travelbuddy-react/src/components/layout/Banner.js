import React, {Fragment} from "react";
import bannerpic1 from "../img/bannerpic1.svg"
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Styles = styled.div`
  .main-special {
    position: relative;
    height: 36vh;
    width: 100%;
    background: #567786;
    cursor: pointer;
    overflow: hidden;
    // padding-top: 2%;
    // padding-bottom: 2%;
  }
  .header {
  }
  .textContainer {
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .text {
    font-family: "Open Sans";
  }
`;

const Banner = () => {

  return (
      <Fragment>

    <Styles> 
   <div className="header"> 
   <Container fluid 
   style={{height:"45vh", backgroundImage:"url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80)",backgroundPosition:"right center"}}
   > 
 



    <Row style={{paddingTop:"5rem"}}>
    <Col xs={0} sm={0} md={1} lg={0} xl={2}></Col>
       <h1> TravelBuddy </h1> 

       </Row>

       <Row>
       <Col xs={0} sm={0} md={1} lg={0} xl={2}></Col>
       <h3> The internet's source for the <u> best flights.</u> </h3> 
       </Row>


  </Container>
   </div>
   </Styles> 

   </Fragment>
  );
};

export default Banner; 