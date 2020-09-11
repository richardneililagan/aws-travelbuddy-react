import React, {useState} from "react"
import Card from 'react-bootstrap/Card'

const HotelSpecialsCard = (props) => {    
    const [hovered,setHovered] = useState(true)
    const mouseOver = () =>{ 
        setHovered(false)
    }
    const mouseOut = () =>{ 
        setHovered(true)
    }
    const {image} = props;

return (
    <div> 
        <Card
          border="light"
          className="hotel-specials-card">


{hovered ? (

<div className="hotel-specials-img" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{backgroundImage:"url("+`${image}`+")"}}> </div> 
) : (
    <div className="hotel-specials-img-hovered" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{backgroundImage:'linear-gradient(rgba(27,55,82,0.9), rgba(27,55,82,0.9)),url('+`${image}`+')'}}>
    
<h1 className="hovered-text-primary"> <center> Infinity Pool, Infinity Fun! </center></h1> 
<h1 className="hovered-text-secondary"> Deluxe Room with Garden View <br/> Free Buffet Breakast <br/> Min. 3 Nights</h1> 
<h1 className="hovered-text-tertiary"> <a style={{color:"#FF7B59"}}> 2 </a> deals to go!</h1> 


    </div> 
      
    )}
          <Card.Body style={{backgroundColor:"#1A3752"}}>
            <Card.Title>
              <h1 className="hotel-box-primary-text">
                {"\n"}
                Finns Beach Resort <br/> Singapore
              </h1>{" "}
              <h5 style={{float:'right'}}> <span class="badge badge-pill badge-success box-secondary-badge" style={{backgroundColor:'#017864'}}> 41 minutes to go! </span> <br/> <p className="hotel-box-secondary-text" style={{float:"right"}}>  $201 / night</p> </h5>
            </Card.Title>
          </Card.Body>
        </Card>
</div>
)
}

export default HotelSpecialsCard;

    {/* <img
    variant="top"
    className={mainClassName}
    onMouseOver={mouseOver}
    onMouseOut ={mouseOut}
      src={bannerpalmtrees}/> */}