import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from '../container/login';
import SignUp from '../container/signup';
import WelcomeContainer from '../container/welcome_container'
// import Cookies from 'js-cookie';    
export default class Routes extends Component {
    render() {
        
    return (
        <div>
            <Router>
                <Switch>
                    {/* Looking for userToken */}
                    {/* If userToken is available in local storage than render the required component */}
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={WelcomeContainer}></Route>
                </Switch>
            </Router>
        </div>
    )
}
}
