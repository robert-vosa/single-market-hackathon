import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button } from 'react-bootstrap';

class ComparingMain extends Component {

state= {
    isChoosed: false
}

    handleToggle(e){
        e.preventDefault();
        this.setState({
            isChoosed1: !this.state.isChoosed1,
            isChoosed2: !this.state.isChoosed2,
            isChoosed3: !this.state.isChoosed3
            })
    }

    render() {
        console.log(this.state.isChoosed);
        return (
            <React.Fragment className="comparing-home-page">
                <div className="header-container">
                    <h1>Select countries to compare</h1>
                </div>
                <div className="flags-container">
                    <div className="search_by_flag-container">
                        <div className="search_by_flag_col1">
                            <div className={this.state.isChoosed1 ? "ischoosed" : ""} 
                                onClick={()=>this.setState({isChoosed1: !this.state.isChoosed1})}>
                                <button type="submit" ><img src="/png/Austria.png" alt=""/>Austria</button>
                            </div>
                            <div className={this.state.isChoosed2 ? "ischoosed" : ""} 
                                onClick={()=>this.setState({isChoosed2: !this.state.isChoosed2})}>
                                <button type="submit"><img src="/png/Croatia.png" alt=""/>Croatia</button>
                            </div>
                            <div className={this.state.isChoosed3 ? "ischoosed" : ""} 
                                onClick={()=>this.setState({isChoosed3: !this.state.isChoosed3})}>
                               <button type="submit"><img src="/png/Cyprus.png" alt=""/>Cyprus</button>
                            </div> 
                            <button type="submit"><img src="/png/Czech Republic.png" alt=""/>Czechia</button>
                            <button type="submit"><img src="/png/Denmark.png" alt=""/>Denmark</button>
                            <button type="submit"><img src="/png/Estonia.png" alt=""/>Estonia</button>
                            <button type="submit"><img src="/png/Finland.png" alt=""/>Finland</button>
                            <button type="submit"><img src="/png/France.png" alt=""/>France</button>
                        </div>
                        <div className="search_by_flag_col2">
                        <button type="submit"><img src="/png/Germany.png" alt=""/>Germany</button>
                            <button type="submit"><img src="/png/Greece.png" alt=""/>Greece</button>
                            <button type="submit"><img src="/png/Hungary.png" alt=""/>Hungary</button>
                            <button type="submit"><img src="/png/Ireland.png" alt=""/>Ireland</button>
                            <button type="submit"><img src="/png/Italy.png" alt=""/>Italy</button>
                            <button type="submit"><img src="/png/Latvia.png" alt=""/>Latvia</button>
                            <button type="submit"><img src="/png/Lithuania.png" alt=""/>Lithuania</button>
                            <button type="submit"><img src="/png/Luxembourg.png" alt=""/>Luxembourg</button>
                            <button type="submit"><img src="/png/Malta.png" alt=""/>Malta</button>
                            <button type="submit"><img src="/png/Nederland.png" alt=""/>Netherlands</button>
                        </div>
                        <div className="search_by_flag_col3">
                            <button type="submit"><img src="/png/Poland.png" alt=""/>Poland</button>
                            <button type="submit"><img src="/png/Portugal.png" alt=""/>Portugal</button>
                            <button type="submit"><img src="/png/Romania.png" alt=""/>Romania</button>
                            <button type="submit"><img src="/png/Slovakia.png" alt=""/>Slovakia</button>
                            <button type="submit"><img src="/png/Slovenia.png" alt=""/>Slovenia</button>
                            <button type="submit"><img src="/png/Spain.png" alt=""/>Spain</button>
                            <button type="submit"><img src="/png/Sweden.png" alt=""/>Sweden</button>
                            <button type="submit"><img src="/png/United Kingdom.png" alt=""/>United Kingdom</button>
                        </div>
                    </div>
                    <div className="align-end">
                     <Link to="/comparingResult" ><Button className="back-to-search" variant="outline-primary">Compare VAT</Button></Link>
                    </div>
                    
                 </div>
            </React.Fragment>
        );
    }
}
export default ComparingMain; 