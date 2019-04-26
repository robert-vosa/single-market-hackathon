import React from 'react';
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
                                <Link  to="/info">VAT Info</Link>
                            </li>
                            <li>
                                <Link  to="/comparing">Compare</Link>
                            </li>
                            <li>
                                <Link  to="/calculator">Calculator</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </footer>
    )
};

export default Footer;