import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import SegmentBar from "./components/layout/SegmentBar";

const App = () => {
  return (
      <Fragment>
        <Router>
          <NavigationBar />
          <SegmentBar/> 
          <Switch>
            {/* <Route exact path="/website" component={Home} />
            <Route exact path="/projects" component={ProjectPage} />
            <Route exact path="/contact" component={Contact} /> */}
            <Route component={Home} />
          </Switch>

          <Footer />
        </Router>
      </Fragment>

  );
};

export default App;