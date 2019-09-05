import React, { Component } from 'react';
import Counter from "./counter"
class Counters extends Component {
    state = { 
        counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},        
        {id: 3, value: 0},
        {id: 4, value: 0},

        ]
    };
handleIncrement = counter =>{
const counters = [...this.state.counters];
const index = counters.indexOf(counter)
counters[index] = {...counter}
counters[index].value++;
this.setState({counters});
};

handleReset = () =>{
 const counters = this.state.counters.map(c => {
    c.value = 0;
    return c;
})
this.setState({counters});
};

handleDelete = (e) =>{
const counters = this.state.counters.filter(c => c.id !== e);
this.setState({counters})
};
    render() { 
        
        return ( 
        <div>
            <button onClick={this.handleReset} className="reset">Reset</button>
            {this.state.counters.map(counter => 
            <Counter 
            key={counter.id} 
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            >
            </Counter>)}
        </div> 
        );
    }
}
 
export default Counters;