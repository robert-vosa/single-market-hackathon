import React from 'react';
import { Card, Button , CardDeck} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
    render () {
        return (
            <React.Fragment>
                <CardDeck>
                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="center">
                            <Link  to="/page1">Page1</Link>
                    </Card.Footer>
                </Card>
                <Card >
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="center">
                        <Link  to="/page2">Page2</Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="center">
                     <Link  to="/page3">Page3</Link>
                    </Card.Footer>
                </Card>
                </CardDeck>
            </React.Fragment>
        );
    }
};
export default Cards;
