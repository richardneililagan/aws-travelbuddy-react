import React, {useState, Fragment} from "react"
import Card from 'react-bootstrap/Card'
import {ListingDialog} from "./ListingDialog"
import Button from "react-bootstrap/Button"

const HotelSpecialsCard = (props) => {    
    const [hovered,setHovered] = useState(true)
    const [open, setOpen] = useState(false);

    const mouseOver = () =>{ 
        setHovered(false)
    }
    const mouseOut = () =>{ 
        setHovered(true)
    }
    const {image} = props;

    const handleOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false)
    }


return (
    <Fragment> 
        <ListingDialog
        title={"test"}
        link={"link"}
        image={image}
        desc={"description"}
        short_desc={"short_desc"}
        state={open}
        close={handleClose}
        ListingType={"hotel"}
        />
        

        <Card
          border="light"
          className="hotel-specials-card">

{hovered ? (

<Fragment> 

{props.special ? (
  <div className="special-tag"> 
  <p>   
    <b className="special-tag-primary-text"> 31  </b> 
    <p className="special-tag-secondary-text">  MINUTES  <br/> TO GO</p> 
  </p> 
</div>
) : (
  <></>
)}

<div className="hotel-specials-img" onMouseEnter={mouseOver} onMouseLeave={mouseOut} style={{backgroundImage:"url("+`${image}`+")"}}> </div> 
</Fragment> 
) : (
    <div className="hotel-specials-img-hovered" onMouseEnter={mouseOver} onMouseLeave={mouseOut} style={{backgroundImage:'linear-gradient(rgba(27,55,82,0.9), rgba(27,55,82,0.9)),url('+`${image}`+')'}}>
    
<h1 className="hovered-text-primary"> <center> Infinity Pool, Infinity Fun! </center></h1> 
<h1 className="hovered-text-secondary"> Deluxe Room with Garden View <br/> Free Buffet Breakast <br/> Min. 3 Nights</h1> 
<h1 className="hovered-text-tertiary"> 

<a style={{color:"#FF7B59"}}> <Button variant="outline-light" onClick={handleOpen} style={{width:"130px"}}>Find out More!</Button> </a>


</h1> 


    </div> 
      
    )}
          <Card.Body style={{backgroundColor:"#1A3752"}}>
            <Card.Title>
              <h1 className="hotel-box-primary-text" onClick={ handleOpen}>
                {"\n"}
                Finns Beach Resort <br/> Singapore
              </h1>{" "}
              <h5 style={{float:'right'}}> <span class="badge badge-pill badge-success box-secondary-badge" style={{backgroundColor:'#017864'}}> 41 minutes to go! </span> <br/> <p className="hotel-box-secondary-text" style={{float:"right"}}>  $201 / night</p> </h5>
            </Card.Title>
          </Card.Body>
        </Card>
</Fragment>
)
}

export default HotelSpecialsCard;
