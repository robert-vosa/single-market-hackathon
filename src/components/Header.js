import React from 'react';
import { Navbar, Nav,  NavDropdown, Form, FormControl, Button, Breadcrumb} from 'react-bootstrap';


const Header = () => {
    return (
        <header className="headerHolder" >
            <div className="header">
                <div className="logo">VAT Wizard</div>
                <Form className="seacrchBox" inline className="justify-content-end">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </div>
        </header>
    )
};

export default Header;