import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InfoHome extends Component {
    render() {
        return (
            <React.Fragment className="info-home-page">
                <div className="header-container">
                    <h1>Search or select a country</h1>
                </div>
                <div className="infoHome-container">
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="search_by_flag-container">
                        <div className="search_by_flag_col1">
                            <button type="submit"><img src="/png/Austria.png" alt=""/>Austria</button>
                            <button type="submit"><img src="/png/Belgium.png" alt=""/>Belgium</button>
                            <button type="submit"><img src="/png/Bulgaria.png" alt=""/>Bulgaria</button>
                            <button type="submit"><img src="/png/Croatia.png" alt=""/>Croatia</button>
                            <button type="submit"><img src="/png/Cyprus.png" alt=""/>Cyprus</button>
                            <button type="submit"><img src="/png/Czech Republic.png" alt=""/>Czechia</button>
                            <button type="submit"><img src="/png/Denmark.png" alt=""/>Denmark</button>
                            <button type="submit"><img src="/png/Estonia.png" alt=""/>Estonia</button>
                            <button type="submit"><img src="/png/Finland.png" alt=""/>Finland</button>
                            <button type="submit"><img src="/png/France.png" alt=""/>France</button>
                        </div>
                        <div className="search_by_flag_col2">
                        <Link to="/inforesult" style={{color: "black"}}><button type=""><img src="/png/Germany.png" alt="Germany"/>Germany</button></Link>
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
                 </div>
            </React.Fragment>
        );
    }
}
export default InfoHome; 