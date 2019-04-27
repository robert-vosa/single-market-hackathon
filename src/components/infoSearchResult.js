import React, { Component } from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class InfoSearchResult extends Component {
    render() {
        return (
            <React.Fragment className="info-result-page">
                <Breadcrumb label>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Info</Breadcrumb.Item>
                 </Breadcrumb>
                <div className="info-result-container">
                    <div className="header-container">
                         <h1>Vat information: Germany</h1>
                        
                    </div>
                    <div className="wizard-container juurde">

                    <div className="alignLeft">
                         <Link to="/info" ><Button className="back-to-search" variant="outline-primary">Back to search</Button></Link>
                    </div>
                    <img src="/png/infoPage.png" class="responsive" alt="EU countries map" />
                    <div className="align-end">
                        <Link to="/info" ><Button className="back-to-search" variant="outline-primary">More info</Button></Link>
                    </div>
                    </div>
                    
                 </div>
            </React.Fragment>
        );
    }
}
export default InfoSearchResult; 