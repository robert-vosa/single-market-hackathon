import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import VATService from "./services/VATService";

import "./App.css"


function App() {

  VATService.fetchVAT().then(res => console.log(res));


  return (
    <React.Fragment>
     <Header />
     <Main />
     <Footer />
    </React.Fragment>
  )
};

export default App;
