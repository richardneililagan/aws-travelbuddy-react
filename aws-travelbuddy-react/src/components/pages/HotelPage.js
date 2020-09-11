import React, { Fragment } from "react";
import Banner from "../layout/Banner"
import Infographic from "../layout/Infographic"
import FlightSpecials from "../layout/FlightSpecials"
import HotelSpecials from "../layout/HotelSpecials"
import bannerpalmtrees from "../img/bannerpalmtrees.jpg"

const HotelPage = () => {
  return (
    <Fragment> 
    <div className="home">

    <Banner imageurl={"url(https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80)"} backgroundPos ={"right center"}/>

    {/* <FlightSpecials/> */}
    <HotelSpecials/> 

    <Infographic/> 
    </div>

    </Fragment>
  );
};

export default HotelPage;