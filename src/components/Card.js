import React from 'react';
import { Card, Button , CardDeck} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="cardsHolder">
                <h2><span>Select Your Tool</span></h2>
                    <CardDeck>
                    <Card className="cardHolder">
                        <Card.Body>
                        <Card.Title><i className="fas fa-info cardIcon" aria-hidden="true"></i>VAT Info</Card.Title>
                        <Card.Text>
                             Here you can find all the relevant VAT information of a member state.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="center">
                            <Button className="pr-button" variant="secondary">
                                <Link  style={{ textDecoration: 'none', color: "white" }} to="/info">Info Tool</Link>
                            </Button>      
                        </Card.Footer>
                    </Card>
                    <Card className="center">
                        <Card.Body>
                        <Card.Title><i className="far fa-clone cardIcon" aria-hidden="true"></i>VAT Comparing</Card.Title>
                        <Card.Text>
                            This tool enables you to calculate the specific cost for your transaction based on the product or service.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="center">
                            <Button variant="secondary">
                                <Link  style={{ textDecoration: 'none', color: "white"  }} to="/comparing">Comparing Tool</Link>
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="cardHolder">
                        <Card.Body>
                        <Card.Title><i className="fas fa-calculator cardIcon" aria-hidden="true"></i>VAT Calculator</Card.Title>
                        <Card.Text>
                            Not sure which member state has the most diverse VAT rules? Select this tool to compare different countries side-by-side and find out the most suitable.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="center">
                         <Button variant="secondary">
                             <Link  style={{ textDecoration: 'none', color: "white"  }} to="/calculator">Calculator Tool</Link>
                         </Button>  
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </div>
                <h2><span>OR</span></h2>
                <h4><span>Use the VAT Wizard</span></h4>
                <div className="chatHolder">
                <Card style={{ width: '18rem' }} className="text-center">
                    <Card.Body>
                        <Card.Title className="title"><i className="far fa-comments cardIcon" aria-hidden="true"></i>VAT Wizard</Card.Title>
                        <Card.Text>
                        Can't find the right information what you are looking for? Let the VAT Wizard find the correct tool and information for you.
                        </Card.Text>
                        <Card.Footer className="center">
                        <Link  to="/wizard">Wizard tool</Link>
                        </Card.Footer>
                    </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
};
export default Cards;
