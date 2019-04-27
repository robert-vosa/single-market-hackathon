import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import ComparingMain from './comparingMain';

class Comparing extends Component {
    render() {
        return (
            <React.Fragment>
            <Breadcrumb label>
                 <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                 <Breadcrumb.Item active>Comparing</Breadcrumb.Item>
             </Breadcrumb>
             <ComparingMain/>
            </React.Fragment>
        );
    }
}
export default Comparing; 

