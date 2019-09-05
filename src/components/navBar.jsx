import React, { Component } from 'react';
class Nav extends Component {
    render() { 
        return ( 
            <nav className="App-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My App</a></li>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;