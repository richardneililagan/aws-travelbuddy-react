import React, {Fragment} from "react"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import bannerpalmtrees from "../img/bannerpalmtrees.jpg"

const CardTrial = () => {
return (
    <Fragment>
              <Card
                border="light"
                className="flight-specials-card">
          <img
          variant="top"
          className="flight-specials-img"
            src={bannerpalmtrees}/>
    
                <Card.Body style={{backgroundColor:"#1A3752"}}>
                  <Card.Title>
                    <h1 className="box-primary-text">
                      {"\n"}
                      Singapore to <br/>New York, United States
                    </h1>{" "}
                    <h5 style={{float:'right'}}> <span class="badge badge-pill badge-success box-secondary-badge" style={{backgroundColor:'#017864'}}> 41 minutes to go! </span> <br/> <p className="box-secondary-text" > from $201 </p> </h5>
                  </Card.Title>
                </Card.Body>
              </Card>
    
  </Fragment>
)
}

export default CardTrial;