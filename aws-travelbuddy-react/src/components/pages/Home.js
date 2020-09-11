import React, { Fragment } from "react";
import Banner from "../layout/Banner"
import Infographic from "../layout/Infographic"
import FlightSpecials from "../layout/FlightSpecials"
import HotelSpecials from "../layout/HotelSpecials"
import bannerpalmtrees from "../img/bannerpalmtrees.jpg"
const Home = () => {
  return (
    <Fragment> 
    <div className="home">

    {/* <Banner imageurl={"url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80)"} backgroundPos ={"right center"}/> */}
    <Banner imageurl={"url(https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)"} backgroundPos ={"50% 35%"}/>

    <FlightSpecials/>
    <HotelSpecials/> 

    <Infographic/> 
    </div>

    </Fragment>
  );
};

export default Home;