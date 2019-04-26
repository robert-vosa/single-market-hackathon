import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import InfoHome from './infoHome';

class Info extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb label>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Info</Breadcrumb.Item>
                 </Breadcrumb>
                 <InfoHome />
            </React.Fragment>
        );
    }
}
export default Info; 