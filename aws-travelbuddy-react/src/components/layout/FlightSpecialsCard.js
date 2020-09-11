import React, {Fragment,useState} from "react"
import Card from 'react-bootstrap/Card'

const FlightSpecialsCard = (props) => {    
  const [hovered,setHovered] = useState(true)
  const mouseOver = () =>{ 
      setHovered(false)
  }
  const mouseOut = () =>{ 
      setHovered(true)
  }
  const {image} = props;

return (
    <Fragment>
              <Card
                border="light"
                className="flight-specials-card">


{hovered ? (

<div className="flight-specials-img" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{backgroundImage:"url("+`${image}`+")"}}> </div> 
) : (
    <div className="flight-specials-img-hovered" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{backgroundImage:'linear-gradient(rgba(27,55,82,0.9), rgba(27,55,82,0.9)),url('+`${image}`+')'}}>
    
<h1 className="flight-hovered-text-primary"> <center> Infinity Pool, Infinity Fun! </center></h1> 
<h1 className="flight-hovered-text-secondary"> Deluxe Room with Garden View <br/> Free Buffet Breakast <br/> Min. 3 Nights</h1> 
<h1 className="flight-hovered-text-tertiary"> <a style={{color:"#FF7B59"}}> <u> 2 </u> </a> deals to go!</h1> 


    </div> 
      
    )}

                <Card.Body style={{backgroundColor:"#1A3752"}}>
                  <Card.Title>
                    <h1 className="flight-box-primary-text">
                      {"\n"}
                      Singapore to <br/>New York, United States
                    </h1>{" "}
                    <h5 style={{float:'right'}}> <span class="badge badge-pill badge-success box-secondary-badge" style={{backgroundColor:'#017864'}}> 41 minutes to go! </span> <br/> <p className="flight-box-secondary-text" > from $201 </p> </h5>
                  </Card.Title>
                </Card.Body>
              </Card>
    
  </Fragment>
)
}

export default FlightSpecialsCard;