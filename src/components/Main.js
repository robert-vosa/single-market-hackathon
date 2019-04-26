import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from './Page1';
import LandingPage from './landingpage';
import Page2 from './page2';
import Page3 from './page3';

const Routs = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
    </Switch>
);

export default Routs;