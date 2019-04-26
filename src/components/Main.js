import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Info from './info';
import LandingPage from './landingpage';
import Comparing from './comparing';
import Calculator from './calculator';

const Routs = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/info" component={Info} />
        <Route path="/comparing" component={Comparing} />
        <Route path="/calculator" component={Calculator} />
    </Switch>
);

export default Routs;