import React, { Component } from 'react';
import Counters from './components/counters';
import Nav from "./components/navBar";
import './App.css'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <Nav/>
            <main className="container">
            <Counters/>                                
            </main>
            </React.Fragment>
         );
    }
}
 
export default App;