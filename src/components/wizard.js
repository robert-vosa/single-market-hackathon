import React, { Component } from 'react';
import { Breadcrumb, Form, Row, Col, Button, ButtonGroup, ToggleButton, FormLabel, FormCheck, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Wizard extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleAddMessage = this.handleAddMessage.bind(this);
    
        this.state = {
            message: "",
            chat: [ { message: "Unleash the wisdom of the VAT Wizard", source: "cpu" } ]
        };
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    handleAddMessage(event) {
        this.state.chat.push({ message: this.state.message, source: "user" });
        this.setState({ message: "" });
        this.setState({chat: this.state.chat});
        setTimeout(() => {
            this.state.chat.push({ message: "OK. Try the ", source: "cpu" , link: "/calculator/true", linkName: "Calculator"  });
            this.setState({chat: this.state.chat});
        }, 1000);
    }


    render() {
        var idx = 0;
        return (
            <React.Fragment>
                <Breadcrumb label>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Wizard</Breadcrumb.Item>
                 </Breadcrumb>
                 <div className="container">
                    <Row>
                        {this.state.chat.map(c => {
                            idx++;
                            return (<Col key={idx} className="col-12 mb-4"><div className={c.source == 'cpu' ? 'chat-left' : 'chat-right'}>
                            {c.message} {c.link == null ? '': <Link to={c.link}>{c.linkName}</Link>}
                            </div></Col>);
                        })}
                    </Row>
                    <Row className="mt-4">
                        <Col className="col-8">
                            <Form.Control placeholder="Talk to the wizard..." value={this.state.message} onChange={this.handleMessageChange}></Form.Control>
                        </Col>
                        <Col className="col-4">
                            <Button onClick={this.handleAddMessage}>Reply</Button>
                        </Col>
                    </Row>
                 </div>
                
            </React.Fragment>
        );
    }
}
export default Wizard; 