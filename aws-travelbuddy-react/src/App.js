import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import SegmentBar from "./components/layout/SegmentBar";

import FlightPage from "./components/pages/FlightPage";
import HotelPage from "./components/pages/HotelPage";

const App = () => {
  return (
      <Fragment>
        <Router>
          <NavigationBar />
          <SegmentBar/> 
          <Switch>
             <Route exact path="/home" component={Home} />
            <Route exact path="/flight" component={FlightPage} />
            <Route exact path="/hotel" component={HotelPage} /> 
            <Route component={Home} />
        
          </Switch>

          <Footer />
        </Router>
      </Fragment>

  );
};

export default App;