import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Comparing extends Component {
    render() {
        return (
            <React.Fragment>
            <Breadcrumb label>
                 <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                 <Breadcrumb.Item active>Comparing</Breadcrumb.Item>
             </Breadcrumb>
            </React.Fragment>
        );
    }
}
export default Comparing; 