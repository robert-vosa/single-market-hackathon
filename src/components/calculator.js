import React, { Component, Control, FormGroup } from 'react';
import { Breadcrumb, Form, Row, Col, Button, ButtonGroup, ToggleButton, FormLabel, FormCheck, ToggleButtonGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import VATService from "../services/VATService";

class Calculator extends Component {

    goodsAndServices = [];

    constructor(props, context) {
        super(props, context);

    
        this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(this);
        this.handlePayerChange = this.handlePayerChange.bind(this);
        this.handleReceiverChange = this.handleReceiverChange.bind(this);
        this.handlePayerVATApplicable = this.handlePayerVATApplicable.bind(this);
        this.handleReceiverVATApplicable = this.handleReceiverVATApplicable.bind(this);
        this.handleClickCalculate = this.handleClickCalculate.bind(this);
        this.handleSumChange = this.handleSumChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);


        if(props.match.params.prefill == "true"){
            this.state = {
                transactionType: 0,
                payer: [{name: "Germany", value: "DE"}],
                receiver: [{name: "Germany", value: "DE"}],
                payerVATApplicable: true,
                receiverVATApplicable: true,
                sum: 100000,
                totalAmount: 0,
                totalAmountExVAT: 0,
                vatAmount: 0,
                vatPercentage: 0,
                countries: [],
                standardVATs: [],
                goodsServicesList: [],
                product: []
              };



        }else{
            this.state = {
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
                countries: [],
                standardVATs: [],
                goodsServicesList: [],
                product: []
              };
        }

        VATService.fetchVAT().then(res => {
            this.state.standardVATs = res.data;
            var countries = res.data.map(c => { return { name: c.country, value: c.code } })
            this.setState({countries: countries});

        });

        VATService.fetchGoodsAndServices().then(res => {
            this.goodsAndServices = res.data;
            var list = this.goodsAndServices.map(g => { return {  "name": g.Name, "value": g }});
            this.setState({ goodsServicesList: list });
        });
        
      }


    handleProductChange(product, event) {
        this.setState({ product });
    }

    handleTransactionTypeChange(transactionType, event) {
        this.setState({ transactionType });
        if(transactionType == 0){
            var list = this.goodsAndServices.filter(g => g.GS == "Goods").map(g => { return {  "name": g.Name, "value": g }});
            this.setState({ goodsServicesList: list })
        }else{
            var list = this.goodsAndServices.filter(g => g.GS == "Services").map(g => { return {  "name": g.Name, "value": g }});
            this.setState({ goodsServicesList: list })
        }
    }

    handlePayerChange(payer, event) {
        this.setState({ payer });
    }

    handleReceiverChange(receiver, event) {
        this.setState({ receiver });
    }

    handlePayerVATApplicable() {
        this.setState({ payerVATApplicable: !this.state.payerVATApplicable });
    }

    handleReceiverVATApplicable() {
        this.setState({ receiverVATApplicable: !this.state.receiverVATApplicable });
    }
    
    handleSumChange(event) {
        this.setState({ sum: event.target.value });
    }

    handleClickCalculate(event){
        if(this.state.payer.length == 0 || this.state.receiver.length == 0) return;
        
        var payerCountry = this.state.payer[0].value;
        var receiverCountry = this.state.receiver[0].value;

        var effectiveVAT = 0;
        var toDeclare = 0;
        var deductableAmount = 0;

        if(!this.state.receiverVATApplicable){
            //Kui müüja ei ole kohuslane on alati exempt
            effectiveVAT = -1;
        } else{

            if(payerCountry == receiverCountry){
                effectiveVAT = this.findVAT(receiverCountry);
            }else{
                if(!this.state.payerVATApplicable){
                    effectiveVAT = this.findVAT(receiverCountry);
                }else{
                    if(this.state.transactionType == 1){
                        effectiveVAT = this.findVAT(receiverCountry);
                    }else{

                        effectiveVAT = this.findVAT(receiverCountry);
                        if(effectiveVAT != -1) 
                            effectiveVAT = 0; 
                    }
                }
            }
        }

        


        var calcVat = effectiveVAT;

        if(effectiveVAT < 0){
            calcVat = 0;
        }


        if(!this.state.payerVATApplicable){
            toDeclare = -1;
            deductableAmount = -1;
        }else{

            if(payerCountry == receiverCountry){
                if(this.state.payerVATApplicable){
                    deductableAmount = this.state.sum * (calcVat / 100);
                    toDeclare = -1;
                }else{
                    toDeclare = -1;
                    deductableAmount = -1;
                }
            }else{

                if(this.state.transactionType == 0){
                    if(this.state.receiverVATApplicable){
                        var vat = this.findVAT(payerCountry);
                        toDeclare = this.state.sum * (vat / 100);
                        deductableAmount = this.state.sum * (vat / 100);
                    }
                }
    
                if(this.state.transactionType == 1){
                    if(this.state.receiverVATApplicable){
                        var vat = this.findVAT(payerCountry);
                        deductableAmount = this.state.sum * (vat / 100);
                        toDeclare = -1;
                    }
                }
            }
        }




        var totalAmount = this.state.sum * (1 + calcVat / 100);
        var vatAmount = this.state.sum * (calcVat / 100);
        
        this.setState({ vatPercentage: effectiveVAT < 0 ? '-' : effectiveVAT });
        this.setState({ totalAmount: totalAmount.toFixed(2) });
        this.setState({ vatAmount: vatAmount.toFixed(2) });
        this.setState({ totalAmountExVAT: (+this.state.sum).toFixed(2) });
        this.setState({ toDeclare: toDeclare < 0 ? '-' : toDeclare.toFixed(2) });
        this.setState({ deductableAmount: deductableAmount < 0 ? '-' : deductableAmount.toFixed(2) });
    }

    findVAT(code){
        if(this.state.product.length > 0){

            for(var k in this.state.product[0].value){
                if(k == code){
                    var productTax = this.state.product[0].value[k];

                    if(!isNaN(productTax))
                        return productTax;
                    else
                        return -1;
                }
            }

        }else{
            return this.state.standardVATs.find(x => x.code == code).vat;
        }
    }

    render() {
        return (
            <React.Fragment>
            <Breadcrumb  label>
                 <Breadcrumb.Item className="breadCrumbs" href="/">Home</Breadcrumb.Item>
                 <Breadcrumb.Item active>Calculator</Breadcrumb.Item>
             </Breadcrumb>
             <div className="header-container">
                <h1>VAT Calculator</h1>
            </div>
            
            <div className="container juurde">
                <Row>
                    <div className="col-8 calculator" >
                    <Form>
                    <h5>Countries</h5>

                    <Row className="mb-4">
                            <Form.Row className="col-6">
                                <FormLabel>Buyer</FormLabel>
                                    <Typeahead
                                        className="form-control"
                                        id="payer-autocomplete"
                                        labelKey="name"
                                        ref="buyer"
                                        placeholder="Choose a country..."
                                        onChange={this.handlePayerChange}
                                        defaultInputValue={this.state.payer.length > 0 ? this.state.payer[0].name : ''}
                                        options={this.state.countries}
                                    />
                            </Form.Row>
                            <Form.Row className="col-6">
                                <FormLabel>Seller</FormLabel>
                                <Typeahead
                                        className="form-control"
                                        id="receiver-autocomplete"
                                        labelKey="name"
                                        placeholder="Choose a country..."
                                        onChange={this.handleReceiverChange}
                                        defaultInputValue={this.state.receiver.length > 0 ? this.state.receiver[0].name : ''}
                                        options={this.state.countries}
                                    />
                            </Form.Row>
                        </Row>
                        <Row className="mb-4">
                           
                            <Form.Row className="col-6">
                                <FormCheck>
                                    <FormCheck.Input defaultChecked={this.state.payerVATApplicable}  type="checkbox" />
                                    <FormCheck.Label>VAT Applicable</FormCheck.Label>
                                </FormCheck>
                            </Form.Row>
                            <Form.Row className="col-6">
                                <FormCheck>
                                    <FormCheck.Input defaultChecked={this.state.receiverVATApplicable} onChange={this.handleReceiverVATApplicable} type="checkbox" />
                                    <FormCheck.Label>VAT Applicable</FormCheck.Label>
                                </FormCheck>
                            </Form.Row>
                        </Row>

                        <Form.Row className="mb-4">
                        <h5>Thing</h5>
                        <ToggleButtonGroup toggle className="col-12 radioButtons" name="transactionType" onChange={this.handleTransactionTypeChange} value={this.state.transactionType}>
                                <ToggleButton  className="radioButton calculator-radio-button" size="lg" type="radio" value={0}>Goods</ToggleButton>
                                <ToggleButton  className="radioButton calculator-radio-button" size="lg" type="radio" value={1}>Services</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Row>
                        <Form.Row className="mb-4">

                            <Typeahead
                                className="form-control"
                                id="product-autocomplete"
                                labelKey="name"
                                placeholder="No product (standard VAT)"
                                onChange={this.handleProductChange}
                                options={this.state.goodsServicesList}
                            />

                        </Form.Row>
                        <Form.Row className="mb-4">
                            <FormLabel>Sum of transaction</FormLabel>
                            <Form.Control placeholder="Enter the the value of the transaction" value={this.state.sum} onChange={this.handleSumChange}></Form.Control>
                        </Form.Row>
                        
                        <Form.Row className="mb-4">
                            <Button variant="primary" size="lg" onClick={this.handleClickCalculate}>Calculate</Button>
                        </Form.Row>
                    </Form>
                    </div>
                    <div className="col-4 bg-gray border-gray">
                        <Row>
                        <Col className="col-12 mt-4">
                                <h5>Seller information</h5>
                            </Col>
                            <Col className="col-12  mb-2">
                                <h6>Total amount (including VAT)</h6>
                            </Col>
                            <Col className="col-12 mb-4">
                                <h4>{this.state.totalAmount} €</h4>
                            </Col>
                            <Col className="col-12 mb-2">
                                <h6>Total amount (ex. VAT)</h6>
                            </Col>
                            <Col className="col-12 mb-4">
                                <h4>{this.state.totalAmountExVAT} €</h4>
                            </Col>
                            <Col className="p-0 col-12">
                                <Row>
                                    <Col className="col-6">
                                        <Col className="col-12">
                                            <h6>VAT amount</h6>
                                        </Col>
                                        <Col className="col-12">
                                            <h4>{this.state.vatAmount} €</h4>
                                        </Col>
                                    </Col>
                                    <Col className="col-6">
                                        <Col className="col-12">
                                            <h6>TAX %</h6>
                                        </Col>
                                        <Col className="col-12">
                                            <h4>{this.state.vatPercentage} %</h4>
                                        </Col>
                                    </Col>
                                </Row>
                            </Col >
                            <Col className="p-0 col-12">
                                <hr />
                            </Col>
                            <Col className="col-12">
                                <h5>Additional info for buyer</h5>
                            </Col>
                            <Col className="col-12 mb-2">
                                <h6>Payable amount</h6>
                            </Col>
                            <Col className="col-12 mb-4">
                                <h4>{this.state.totalAmount} €</h4>
                            </Col>
                            <Col className="col-12 mb-2">
                                <h6>Additional VAT to declare</h6>
                            </Col>
                            <Col className="col-12 mb-4">
                                <h4>{this.state.toDeclare} €</h4>
                            </Col>
                            <Col className="col-12 mb-2">
                                <h6>Deductable amount</h6>
                            </Col>
                            <Col className="col-12 mb-4">
                                <h4>{this.state.deductableAmount} €</h4>
                            </Col>
                            
                           
                        </Row>
                    </div>
                </Row>
            </div>
            </React.Fragment>
        );
    }
}
export default Calculator; 