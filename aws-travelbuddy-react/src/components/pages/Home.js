import React, { Fragment } from "react";
import Banner from "../layout/Banner"
import Infographic from "../layout/Infographic"
const Home = () => {
  return (
    <Fragment> 
    <div className="home">
    <Banner/>
    <Infographic/> 
    </div>

    </Fragment>
  );
};

export default Home;