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
                                <button type="submit" ><img src="/png/Austria.png" alt="Austria"/>Austria</button>
                            </div>
                            <div className={this.state.isChoosed2 ? "ischoosed" : ""} 
                                onClick={()=>this.setState({isChoosed2: !this.state.isChoosed2})}>
                                <button type="submit"><img src="/png/Croatia.png" alt="Croatia"/>Croatia</button>
                            </div>
                            <div className={this.state.isChoosed3 ? "ischoosed" : ""} 
                                onClick={()=>this.setState({isChoosed3: !this.state.isChoosed3})}>
                               <button type="submit"><img src="/png/Cyprus.png" alt="Cyprus"/>Cyprus</button>
                            </div> 
                            <button type="submit"><img src="/png/Czech Republic.png" alt="Czechia"/>Czechia</button>
                            <button type="submit"><img src="/png/Denmark.png" alt="Denmark"/>Denmark</button>
                            <button type="submit"><img src="/png/Estonia.png" alt="Estonia"/>Estonia</button>
                            <button type="submit"><img src="/png/Finland.png" alt="Finland"/>Finland</button>
                            <button type="submit"><img src="/png/France.png" alt="France"/>France</button>
                        </div>
                        <div className="search_by_flag_col2">
                        <button type="submit"><img src="/png/Germany.png" alt="Germany"/>Germany</button>
                            <button type="submit"><img src="/png/Greece.png" alt="Greece"/>Greece</button>
                            <button type="submit"><img src="/png/Hungary.png" alt="Hungary"/>Hungary</button>
                            <button type="submit"><img src="/png/Ireland.png" alt="Ireland"/>Ireland</button>
                            <button type="submit"><img src="/png/Italy.png" alt="Italy"/>Italy</button>
                            <button type="submit"><img src="/png/Latvia.png" alt="Latvia"/>Latvia</button>
                            <button type="submit"><img src="/png/Lithuania.png" alt="Lithuania"/>Lithuania</button>
                            <button type="submit"><img src="/png/Luxembourg.png" alt="Luxembourg"/>Luxembourg</button>
                            <button type="submit"><img src="/png/Malta.png" alt="Malta"/>Malta</button>
                            <button type="submit"><img src="/png/Nederland.png" alt="Netherlands"/>Netherlands</button>
                        </div>
                        <div className="search_by_flag_col3">
                            <button type="submit"><img src="/png/Poland.png" alt="Poland"/>Poland</button>
                            <button type="submit"><img src="/png/Portugal.png" alt="Portugal"/>Portugal</button>
                            <button type="submit"><img src="/png/Romania.png" alt="Romania"/>Romania</button>
                            <button type="submit"><img src="/png/Slovakia.png" alt="Slovakia"/>Slovakia</button>
                            <button type="submit"><img src="/png/Slovenia.png" alt="Slovenia"/>Slovenia</button>
                            <button type="submit"><img src="/png/Spain.png" alt="Spain"/>Spain</button>
                            <button type="submit"><img src="/png/Sweden.png" alt="Sweden"/>Sweden</button>
                            <button type="submit"><img src="/png/United Kingdom.png" alt="	United Kingdom"/>United Kingdom</button>
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