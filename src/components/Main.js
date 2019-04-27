import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Info from './info';
import LandingPage from './landingpage';
import Comparing from './comparing';
import Calculator from './calculator';
import Wizard from './wizard';

const Routs = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/info" component={Info} />
        <Route path="/comparing" component={Comparing} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/wizard" component={Wizard} />
    </Switch>
);

export default Routs;