import React, { Component } from 'react';
import { Breadcrumb, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ComparingResult extends Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb label>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Comparing</Breadcrumb.Item>
                 </Breadcrumb>
                 <div className="container">
                    <div className="header-container">
                        <h1>VAT Comparing result</h1>
                    </div>
                    <div className="result-container">
                        <div>
                        <Link to="/comparing" ><Button className="back-to-search" variant="outline-primary">Back to comparing</Button></Link>
                        </div>
                        <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Austria</th>
                                <th>Croatia</th>
                                <th>Cyprus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Standard VAT rate</td>
                                <td>20%</td>
                                <td>25%</td>
                                <td>19%</td>
                                </tr>
                                <tr>
                                <td>Reduced rates</td>
                                <td>13% - 10%</td>
                                <td>13% - 5%</td>
                                <td>9% - 5%</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                        <div className="map-container">
                            <img src="/png/eu_map2.png" alt="eu map"  />
                        </div>
                    </div>
                 </div>
            </React.Fragment>
        );
    }
}
export default ComparingResult; 