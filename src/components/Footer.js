import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
            <div className="footer">
                <div><button className="feedbackButton"><i className="far fa-envelope" aria-hidden="true" />Send feedback about this application</button>    </div>
                <div><Link  className="footerLink" to="/info">VAT Info</Link></div>
                <div><Link className="footerLink" to="/comparing">VAT Comparing</Link></div>
                <div><Link className="footerLink" to="/calculator">VAT Calculator</Link></div>
            </div>          
    )
};

export default Footer;