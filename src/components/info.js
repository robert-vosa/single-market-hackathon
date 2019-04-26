import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class Info extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb label>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Info</Breadcrumb.Item>
                 </Breadcrumb>
            </React.Fragment>
        );
    }
}
export default Info; 