import React from 'react';
import { Card, Button , CardDeck} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="cardsHolder">
                    <CardDeck>
                    <Card className="cardHolder">
                        <Card.Body>
                        <Card.Title>VAT Info</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="center">
                                <Link  to="/info">Info Tool</Link>
                        </Card.Footer>
                    </Card>
                    <Card className="cardHolder">
                        <Card.Body>
                        <Card.Title>VAT Comparing</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="center">
                            <Link  to="/comparing">Comparing Tool</Link>
                        </Card.Footer>
                    </Card>
                    <Card className="cardHolder">
                        <Card.Body>
                        <Card.Title>VAT Calculator</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer .
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="center">
                        <Link  to="/calculator">Calculator Tool</Link>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </div>
                <hr/>
                <div className="chatHolder">
                <Card style={{ width: '18rem' }} className="text-center">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
};
export default Cards;
