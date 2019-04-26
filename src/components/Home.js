import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Home extends React.Component {

    render() {
      return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
      );
    }
  }
  
  export default Home;