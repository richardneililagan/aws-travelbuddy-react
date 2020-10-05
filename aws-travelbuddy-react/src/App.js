import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import SegmentBar from "./components/layout/SegmentBar";
import FlightPage from "./components/pages/FlightPage";
import HotelPage from "./components/pages/HotelPage";

// AWS Amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
Amplify.configure(awsconfig);

const App = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);


  return authState === AuthState.SignedIn && user ? (
    <div className="App">
        {/* <div>Hello, {user.username}</div> */}
        <Fragment>
        <Router>
          <NavigationBar username={user.username} />
          <SegmentBar/> 
          <Switch>
             <Route exact path="/home" component={Home} />
            <Route exact path="/flight" component={FlightPage} />
            <Route exact path="/hotel" component={HotelPage} /> 
            <Route component={Home} />
        
          </Switch>

          <Footer />
        </Router>
        <AmplifyAuthenticator/> 
      </Fragment>
    </div>
  ) : (
    <AmplifyAuthenticator className="amplify-authenticator" />
);
}
export default App;