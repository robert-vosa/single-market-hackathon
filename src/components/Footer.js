import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div className="row">
                    <div className="col-4">

                        <h6>Something</h6>
                        <ul className="list-unstyled">
                            <li>
                                <Link  to="#">Feedback</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h6>Navigation</h6>
                        <ul className="list-unstyled">
                            <li>
                                <Link  to="/page1">VAT Info</Link>
                            </li>
                            <li>
                                <Link  to="/page2">Compare</Link>
                            </li>
                            <li>
                                <Link  to="/page3">Calculator</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </footer>
    )
};

export default Footer;