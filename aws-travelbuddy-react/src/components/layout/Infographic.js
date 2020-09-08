import React, {Fragment} from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import infopic1 from "../img/infopic1.jpg"
import infopic2 from "../img/infopic2.jpg"
import infopic3 from "../img/infopic3.jpg"

const Infographic = () => {
  return (
<Fragment> 
<Container fluid style={{backgroundColor:'white', paddingTop:"50px",paddingBottom:"50px"}}> 

<Row>
    <Col xs={0} sm={0} md={2} lg={0} xl={3}>

        
    </Col>
    <h1> TravelBuddy </h1> 

       </Row>

       <Row>
       <Col xs={0} sm={0} md={2} lg={0} xl={3}></Col>
       <h3> The only buddy you need to bring along on your life's adventures</h3> 
       </Row>

<Row className="justify-content-md-center" style={{justifyContent:"center",paddingTop:'5rem'}}>
    <Col> </Col>
    <Col> 
    <Row className="d-flex justify-content-center center-block d-block m-auto"> <img src={infopic1} alt="Logo" className="infopic1" /></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto"><h2 style={{paddingTop:'1em'}}>Fly Safe</h2></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto" style={{padding:"1em"}}> <p> <center>  Through collaborations with airlines around the world, TravelBuddy offers you the best price across millions of flights to create your perfect trip.</center> </p></Row>

    </Col>

    <Col> 
    <Row className="d-flex justify-content-center center-block d-block m-auto"> <img src={infopic2} alt="Logo" className="infopic1" /></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto"><h2 style={{paddingTop:'1em'}}>Recuperate Well</h2></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto" style={{padding:"1em"}}> <p> <center>  From the infinity pool at Marina Bay Sands, to sipping a margarita at the beachside at Finns Beach Resort, TravelBuddy helps you recuperate for your next adventure.</center> </p></Row>

    </Col>

    <Col> 
    <Row className="d-flex justify-content-center center-block d-block m-auto"> <img src={infopic3} alt="Logo" className="infopic1" /></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto"><h2 style={{paddingTop:'1em'}}>Bundled Deals</h2></Row>
    <Row className="d-flex justify-content-center center-block d-block m-auto" style={{padding:"1em"}}> <p> <center>The more you travel, the more you save. TravelBuddyensures that you stretch every dollar to fulfil your vacation dreams. </center> </p></Row>


    </Col>
    <Col> </Col>


  </Row>

</Container> 
</Fragment> 
  );
};

export default Infographic; 
