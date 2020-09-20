import React, { Fragment, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Card from "react-bootstrap/Card";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import Button from "react-bootstrap/Button"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import {FaPlaneDeparture,FaPlaneArrival} from "react-icons/fa"
import Accordion from 'react-bootstrap/Accordion'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import {TiPlane} from "react-icons/ti"
import {AiTwotoneCiCircle} from "react-icons/ai"
import {ImCross} from "react-icons/im"
import {FaMapPin} from "react-icons/fa"
import {RiBuilding2Fill, RiBuildingFill}  from "react-icons/ri"
import { TiTick } from "react-icons/ti"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 1,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const ListingDialog = (props) => {

  const [AccordionState, setAccordionState] = useState(true)
  const ListingType = props.ListingType;


  return (
    <Fragment>
      <Dialog
        fullWidth={Boolean(true)}
        maxWidth="sm"
        onClose={props.close}
        open={props.state}
        id="dialog-box-div">
          <Card style={{ margin:"-20px", overflow:"hidden"}}>
            <Card.Img
              variant="top"
              src={props.image}
              style={{ width: "100%", height: "30vh" }}
            />

            <div class="cross-container"> 
            <ImCross onClick={()=>{props.close()}} style={{height:"18px",width:"18px", zIndex:"2"}} /> 
            </div>


            <Card.Body>
            <b style={{float:"left", opacity:"0.7"}}> 
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <b style={{fontSize:"11px", marginLeft:'2px'}} > 1281 reviews </b> 
            </b>

              <p style={{ fontSize: "12px", textAlign: "right" }}>
                <AccessAlarmsIcon
                  fontSize="small"
                  style={{
                    fontSize: "15px",
                    marginBottom: "2px",
                    marginRight: "3px",
                  }}
                />
               Deal Last Updated: {"  "}{" "}
                {props.date ? (
                  props.date
                ) : (
                  <p style={{ display: "inline" }}> 13 June 2020 </p>
                )}


              </p>{" "}
  
              <Accordion defaultActiveKey="0">
                    <Card style={{overflowX:"hidden"}}>
                        <Card.Header style={{margin:"-17px -20px -17px -20px"}} onClick={()=>{(setAccordionState(!AccordionState))}} >
                        <Accordion.Toggle as={Card.Header} eventKey="1" style={{color:"black", fontFamily:"Roboto", fontSize:"18px", backgroundColor:"#F7F7F7", border:"none"}}> 
                    <Row> 
                      <Col xs={11} xl={11}> 

               { (ListingType === "flight") ? 
               (
                <b style={{float:"left", marginBottom:"12px", opacity:"0.65", lineHeight:"30px"}}> 
                <FaPlaneDeparture style={{marginRight:"10px"}}/> Singapore <br/> 
               <FaPlaneArrival style={{marginRight:"10px"}}/> New York, United States</b> 
               )
               : (
                <b style={{float:"left", marginBottom:"12px", opacity:"0.65", lineHeight:"30px"}}> 
                <RiBuilding2Fill style={{marginRight:"10px"}}/> Finns Beach Resort <br/> 
               <FaMapPin style={{marginRight:"10px"}}/> <b style={{fontSize:"13px"}}> Jalan Pantai Berawa No: 5, Tibubeneng, North Kuta, Indonesia </b> </b> 

               ) }
                </Col> 
                    <Col xs={1} xl={1} style={{float:"right"}}>

                      { AccordionState ? 
                      
                      (<IoIosArrowDown style={{height:"30px", width:"30px", opacity:"0.6", marginTop:"10px"}}/>) : 
                      (
                        <IoIosArrowUp style={{height:"30px", width:"30px", opacity:"0.6", marginTop:"10px"}}/>
                      ) 
                      }
                      

                      </Col>
                    </Row> 
                        </Accordion.Toggle>
                        </Card.Header>
                        


                        { (ListingType === "flight") ? (

                      <Accordion.Collapse eventKey="1">
                      <Card.Body className="lead" style={{marginTop:"20px", marginBottom:"50px"}}> 
                        <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}>  <TiPlane style={{height:"24px", width:'24px', marginBottom:"3px"}}/> Singapore Airlines QR702 </p>
                        <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}> Flight Details</p>
                      <div className="vLine"> 
                      </div>
                        <ul style={{lineHeight:"50px", fontSize:"15px", marginLeft:'9px'}}>
                          <Row style={{marginLeft:"-25px"}}> 
                            <Col xs={1} xl={1}><AiTwotoneCiCircle style={{color:"#575757"}}/></Col>
                            <Col xs={11} xl={11}> <li> 17:35 JFK New York John F. Kenndy </li> </Col>
                          
                          </Row> 
                          <Row style={{marginLeft:"-25px"}}> 
                            <Col xs={1} xl={1}><AiTwotoneCiCircle style={{color:"#575757"}}/></Col>
                            <Col xs={11} xl={11}> <li> 17:35 JFK New York John F. Kenndy </li> </Col>
                          
                          </Row> 
                      <Row style={{marginLeft:"-25px"}}> 
                            <Col xs={1} xl={1}><AiTwotoneCiCircle style={{color:"#575757"}}/></Col>
                            <Col xs={11} xl={11}> <li> 17:35 JFK New York John F. Kenndy </li> </Col>
                          
                          </Row> 
                        </ul>

                      <p style={{fontSize:"12px", float:"left", marginTop:"30px", fontWeight:"400"}}>  <b> Arrives: </b> Tue, 3 Nov 2020 | <b>Journey Duration:</b> 23h 15 </p>
                        </Card.Body>
                      </Accordion.Collapse>

                        ) : (
                          <Accordion.Collapse eventKey="1">
                          <Card.Body className="lead" style={{marginTop:"20px", marginBottom:"50px"}}> 
                            <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}>  <RiBuildingFill style={{height:"24px", width:'24px', marginBottom:"3px", marginRight:"4px"}}/> Deluxe Room with Garden View </p>
                            <p style={{fontSize:"14px",fontWeight:"bold", opacity:"0.8"}}> Property Highlights</p>

                          {/* <div className="vLine"> 
                          </div> */}
                            <ul style={{lineHeight:"50px", fontSize:"15px", marginLeft:'9px'}}>
                              <Row style={{marginLeft:"-25px"}}> 
                                <Col xs={1} xl={1}><TiTick style={{color:"#575757"}}/></Col>
                                <Col xs={11} xl={11}> <li> Spa and Wellness Centre </li> </Col>
                              
                              </Row> 
                              <Row style={{marginLeft:"-25px"}}> 
                                <Col xs={1} xl={1}><TiTick style={{color:"#575757"}}/></Col>
                                <Col xs={11} xl={11}> <li> Free Buffet Breakfast </li> </Col>
                              
                              </Row> 
                       <Row style={{marginLeft:"-25px"}}> 
                                <Col xs={1} xl={1}><TiTick style={{color:"#575757"}}/></Col>
                                <Col xs={11} xl={11}> <li> Min. 3 Nights </li> </Col>
                              
                              </Row> 
                            </ul>
                   
                        <p style={{fontSize:"12px", float:"left", marginTop:"30px", fontWeight:"400"}}>  <b> Check in: </b> From 14:00 hrs | <b>Check Out:</b> By 12:00 hrs </p>
                            </Card.Body>
                          </Accordion.Collapse> 

                        )} 




                    </Card>
                    </Accordion>

              {(ListingType==="flight") ? (
              
              <Card.Text
                className="lead"
                style={{ fontSize: "15px", letterSpacing: "0.04em", backgroundColor:"red" }}
              >
                <div style={{marginRight:"3px", marginBottom:"5px", float:"right", fontWeight:"bold", fontSize:"30px", textAlign:"center", width:"120px"}}>
              $2120
                </div>
              </Card.Text>
              ) : (
                <Card.Text
                className="lead"
                style={{ fontSize: "15px", letterSpacing: "0.04em", backgroundColor:"red" }}
              >
                <div style={{marginRight:"3px", marginBottom:"5px", float:"right", fontWeight:"bold", fontSize:"18px", textAlign:"center", width:"120px"}}>
              $2120 
              <a style={{fontSize:"10px", letterSpacing:"0.02em"}}> Per night</a> 
                </div>
              </Card.Text>


              )}



              <Container> 

                { (ListingType ==="flight") ? (

<Row style={{float:"right"}}>
<Button variant="outlined" size="sm" style={{height:"35px",float:'right', width:'120px',backgroundColor:'#01A799'}}> <p style={{fontSize:"15px", fontWeight:"bolder", fontColor:"#767676", color:"white"}}> <center> Add to Cart </center>  </p></Button>        
</Row> 
                ) : (

                  <Row style={{float:"right"}}>
                  <Button variant="outlined" size="sm" style={{height:"35px",float:'right', width:'120px',backgroundColor:'#01A799'}}> <p style={{fontSize:"15px", fontWeight:"bolder", fontColor:"#767676", color:"white"}}> <center> Check Dates </center>  </p></Button>        
                  </Row> 
                ) }
              

              </Container>

            </Card.Body>
          </Card>
        {/* </DialogContent> */}
      </Dialog>
    </Fragment>
  );
};
