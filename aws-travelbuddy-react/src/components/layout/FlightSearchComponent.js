import React, {Fragment} from 'react';
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"

import FlightSpecialsCard from "./FlightSpecialsCard"
import testimonialData from "../data/testimonial.json"

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";


const FlightSearchComponent = () => { 

  const useStyles = makeStyles((theme) => ({
    formControl: {
      left:"-2%",
      margin: theme.spacing(1),
      minWidth: "97%"
    },
    selectEmpty: {
      marginTop: theme.spacing(100),
    },
  }));

  const classes = useStyles();


return(

<Fragment> 
<Container fluid style={{paddingTop:"50px",width: "70%", padding:'2%'}}> 
<h3 className='landing-secondary-text'>Plan your Travel with Value</h3>
<h1 className="landing-main-text">ALL FLIGHTS</h1> 

<Row noGutters style={{marginTop:"30px"}}> 
<Col xl={5}> 

<FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                From
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // onChange={handleChange}
                label="Categories"
              >
                <MenuItem value="1">Singapore</MenuItem>
                <MenuItem value="2">Malaysia</MenuItem>
                <MenuItem value="3">Indonesia</MenuItem>
              </Select>
</FormControl>

</Col>
<Col xl={5}> 

<FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                To
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // onChange={handleChange}
                label="Categories"
              >
                <MenuItem value="1">Everywhere</MenuItem>
                <MenuItem value="2">United States</MenuItem>
                <MenuItem value="3">China</MenuItem>
              </Select>
</FormControl>

</Col>
<Col xl={2}> 
<Button variant="outline-secondary" className="search-button"><center> <h4 style={{marginTop:"6px", fontSize:'18px', color:'black'}}> Search </h4></center> </Button>{' '}
</Col> 
</Row> 


<Row style={{marginBottom:"-40px",marginTop:"20px"}}>
<Col xl={4}> </Col>
<Col xl={5}> </Col>
<Col xl={3}> 
<Form.Group>
<Form.Label htmlFor="disabledTextInput" style={{float:"right"}}> Sort By</Form.Label>
  <Form.Control as="select" size="lg">
    <option>Lowest Price</option>
    <option>Highest Price</option>
    <option>Location</option>
  </Form.Control>
</Form.Group>
 </Col>
</Row>

</Container> 

<Container fluid
        style={{
          display: "grid",
          gridTemplateColumns:"1fr 1fr",
          gridGap: "2%",
          padding: "3%",
          overflowY: "hidden",
          justifyContent: "center",
          width: "70%",
          // marginBottom:"150px",
          // marginTop:"-80px",
          height:"100%",
          paddingBottom:"10%"
        }}
>
          {testimonialData.features.map((testimonial) => (
          <FlightSpecialsCard
           image={testimonial.image}/>
        ))}

</Container>
    </Fragment>
)

}

export default FlightSearchComponent; 