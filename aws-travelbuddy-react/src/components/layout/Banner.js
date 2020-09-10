import React, {Fragment} from "react";
import bannerpic1 from "../img/bannerpic1.svg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const Banner = (props) => {
    const {imageurl, backgroundPos } = props;

  return (
   <div className="header"> 
   <Container fluid 
   style={{height:"45vh", backgroundImage:`${imageurl}`,backgroundPosition: `${backgroundPos}`, filter:"brightness(100%)"}}
   > 
    <Row style={{paddingTop:"6rem"}}>
    <Col xs={0} sm={0} md={1} lg={0} xl={2}></Col>
       <h1 style={{fontSize:"65px", fontFamily:"Roboto",fontWeight:"bold",color:"white", letterSpacing:"2px",filter:"brightness(2)"}}> TravelBuddy </h1> 
       </Row>

       <Row>
       <Col xs={0} sm={0} md={1} lg={0} xl={2}></Col>
       <h3 style={{fontSize:"33px", fontFamily:"Roboto",fontWeight:"bold",color:"white"}}> The internet's source for the <u style={{color:"#D7D7D7"}}> best flights.</u> </h3> 
       </Row>


  </Container>
   </div>
  );
};

export default Banner; 