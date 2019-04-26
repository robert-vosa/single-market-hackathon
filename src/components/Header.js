import React from 'react';
import { Navbar, Nav,  NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        </header>
    )
};

export default Header;