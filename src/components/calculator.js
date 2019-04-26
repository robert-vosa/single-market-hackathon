import React, { Component, Control, FormGroup } from 'react';
import { Breadcrumb, Form, Row, Col, Button, ButtonGroup, ToggleButton, FormLabel, FormCheck, ToggleButtonGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import VATService from "../services/VATService";

class Calculator extends Component {

    goodsAndServices = [];

    constructor(props, context) {
        super(props, context);
    
        this.handleTransactionChange = this.handleTransactionChange.bind(this);
        this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(this);
        this.handlePayerChange = this.handlePayerChange.bind(this);
        this.handleReceiverChange = this.handleReceiverChange.bind(this);
        this.handlePayerVATApplicable = this.handlePayerVATApplicable.bind(this);
        this.handleReceiverVATApplicable = this.handleReceiverVATApplicable.bind(this);
        this.handleClickCalculate = this.handleClickCalculate.bind(this);
        this.handleSumChange = this.handleSumChange.bind(this);

        this.state = {
          transaction: null,
          transactionType: null,
          payer: [],
          receiver: [],
          payerVATApplicable: false,
          receiverVATApplicable: false,
          sum: 0,
          totalAmount: 0,
          totalAmountExVAT: 0,
          vatAmount: 0,
          vatPercentage: 0,
          options: [ { "name": "Estonia", "value": "EE"}, { "name": "Belgium", "value": "BE"} ],
          standardVATs: [],
          goodsServicesList: []
        };

        VATService.fetchVAT().then(res => {
            this.state.standardVATs = res.data;
        });

        VATService.fetchGoodsAndServices().then(res => {
            this.goodsAndServices = res.data;
            this.state.goodsServicesList = this.goodsAndServices.map(g => g.name);
        });
      }

    handleTransactionChange(transaction, event) {
        this.setState({ transaction });
    }

    handleTransactionTypeChange(transactionType, event) {
        this.setState({ transactionType });
    }

    handlePayerChange(payer, event) {
        this.setState({ payer });
    }

    handleReceiverChange(receiver, event) {
        this.setState({ receiver });
    }

    handlePayerVATApplicable(payerVatApplicable, event) {
        this.setState({ payerVatApplicable });
    }

    handleReceiverVATApplicable(receiverVATApplicable, event) {
        this.setState({ receiverVATApplicable });
    }
    
    handleSumChange(sum, event) {
        this.setState({ sum });
    }

    handleClickCalculate(event){
        if(this.state.payer.length == 0 || this.state.receiver.length == 0) return;
        
        var payerCountry = this.state.payer[0].value;
        var receiverCountry = this.state.receiver[0].value;
        var payerVAT = this.state.standardVATs.find(x => x.code == payerCountry).vat;

        this.setState({ vatPercentage: payerVAT });
        this.setState({ totalAmount: 50 })
    }

    render() {
        return (
            <React.Fragment>
            <Breadcrumb label>
                 <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                 <Breadcrumb.Item active>Calculator</Breadcrumb.Item>
             </Breadcrumb>
            
            <div className="container">
                <Row>
                    <div className="col-8 calculator" >
                    <Form>
                        <Form.Row className="mb-4">
                        <h5>Transaction</h5>
                            <ToggleButtonGroup toggle className="col-12" name="transaction" onChange={this.handleTransactionChange} value={this.state.transaction}>
                                <ToggleButton type="radio" value={0}>Buy</ToggleButton>
                                <ToggleButton type="radio" value={1}>Sell</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Row>
                        <Form.Row className="mb-4">
                        <h5>Thing</h5>
                        <ToggleButtonGroup toggle className="col-12" name="transactionType" onChange={this.handleTransactionTypeChange} value={this.state.transactionType}>
                                <ToggleButton type="radio" value={0}>Goods</ToggleButton>
                                <ToggleButton type="radio" value={1}>Services</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Row>
                        <Form.Row className="mb-4">
                            <Form.Control placeholder="No product (standard VAT)"></Form.Control>
                        </Form.Row>
                        <Form.Row>
                            <FormLabel>Sum of transaction</FormLabel>
                            <Form.Control placeholder="Sum" onChange={this.handleSumChange}></Form.Control>
                        </Form.Row>
                        <Row className="mb-4">
                            <Form.Row className="col-6">
                                <FormLabel>Payer</FormLabel>
                                    <Typeahead
                                        className="form-control"
                                        id="payer-autocomplete"
                                        labelKey="name"
                                        placeholder="Choose a country..."
                                        onChange={this.handlePayerChange}
                                        options={this.state.options}
                                    />
                            </Form.Row>
                            <Form.Row className="col-6">
                                <FormLabel>Receiver</FormLabel>
                                <Typeahead
                                        className="form-control"
                                        id="receiver-autocomplete"
                                        labelKey="name"
                                        placeholder="Choose a country..."
                                        onChange={this.handleReceiverChange}
                                        options={this.state.options}
                                    />
                            </Form.Row>
                        </Row>
                        <Row className="mb-4">
                           
                            <Form.Row className="col-6">
                                <FormCheck>
                                    <FormCheck.Input onChange={this.handlePayerVATApplicable} type="checkbox" />
                                    <FormCheck.Label>VAT Applicable</FormCheck.Label>
                                </FormCheck>
                            </Form.Row>
                            <Form.Row className="col-6">
                                <FormCheck>
                                    <FormCheck.Input onChange={this.handleReceiverVATApplicable} type="checkbox" />
                                    <FormCheck.Label>VAT Applicable</FormCheck.Label>
                                </FormCheck>
                            </Form.Row>
                        </Row>
                        <Form.Row className="mb-4">
                            <Button variant="primary" onClick={this.handleClickCalculate}>Calculate</Button>
                        </Form.Row>
                    </Form>
                    </div>
                    <div className="col-4 bg-gray border-gray">
                        <Row>
                            <Col className="col-12 mt-4 mb-2">
                                <h6>Total amount (including VAT)</h6>
                            </Col>
                            <Col className="col-12 mb-4">
                                <h4>{this.state.totalAmount}</h4>
                            </Col>
                            <Col className="col-12 mb-2">
                                <h6>Total amount (ex. VAT)</h6>
                            </Col>
                            <Col className="col-12 mb-4">
                                <h4>{this.state.totalAmountExVAT}</h4>
                            </Col>
                            <Row>
                                <Col className="col-6">
                                    <Col className="col-12">
                                        <h6>VAT amount</h6>
                                    </Col>
                                    <Col className="col-12">
                                        <h4>{this.state.vatAmount}</h4>
                                    </Col>
                                </Col>
                                <Col className="col-6">
                                    <Col className="col-12">
                                        <h6>TAX %</h6>
                                    </Col>
                                    <Col className="col-12">
                                        <h4>{this.state.vatPercentage}</h4>
                                    </Col>
                                </Col>
                            </Row>
                           
                        </Row>
                    </div>
                </Row>
            </div>
            </React.Fragment>
        );
    }
}
export default Calculator; 