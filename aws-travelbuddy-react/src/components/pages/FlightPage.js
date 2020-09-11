import React, { Fragment } from "react";
import Banner from "../layout/Banner"
import Infographic from "../layout/Infographic"
import FlightSpecials from "../layout/FlightSpecials"
import HotelSpecials from "../layout/HotelSpecials"
import bannerpalmtrees from "../img/bannerpalmtrees.jpg"

const FlightPage = () => {
  return (
    <Fragment> 
    <div className="home">

    <Banner imageurl={"url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80)"} backgroundPos ={"right center"}/>

    {/* <FlightSpecials/> */}
    <HotelSpecials/> 

    <Infographic/> 
    </div>

    </Fragment>
  );
};

export default FlightPage;