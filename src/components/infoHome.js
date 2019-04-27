import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InfoHome extends Component {
    render() {
        return (
            <React.Fragment className="info-home-page">
                <div className="info-home-page-heading-containers">
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
                            <button type="submit"><img src="/png/Austria.png" alt="Austria"/>Austria</button>
                            <button type="submit"><img src="/png/Belgium.png" alt="Belgium"/>Belgium</button>
                            <button type="submit"><img src="/png/Bulgaria.png" alt="Bulgaria"/>Bulgaria</button>
                            <button type="submit"><img src="/png/Croatia.png" alt="Croatia"/>Croatia</button>
                            <button type="submit"><img src="/png/Cyprus.png" alt="Cyprus"/>Cyprus</button>
                            <button type="submit"><img src="/png/Czech Republic.png" alt="Czechia"/>Czechia</button>
                            <button type="submit"><img src="/png/Denmark.png" alt="Denmark"/>Denmark</button>
                            <button type="submit"><img src="/png/Estonia.png" alt="Estonia"/>Estonia</button>
                            <button type="submit"><img src="/png/Finland.png" alt="Finland"/>Finland</button>
                            <button type="submit"><img src="/png/France.png" alt="France"/>France</button>
                        </div>
                        <div className="search_by_flag_col2">
                        <Link to="/inforesult"><button type="submit"><img src="/png/Germany.png" alt="Germany"/>Germany</button></Link>
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
                 </div>
            </React.Fragment>
        );
    }
}
export default InfoHome; 