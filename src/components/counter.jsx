import React, {Component} from 'react';
class Counter extends Component {
    render() {
        return ( 
         <div>
        <span className="num">{this.props.counter.value}</span>
         <button className="btns" onClick={() => this.props.onIncrement(this.props.counter)} type="submit">increment</button>
         <button onClick={() =>this.props.onDelete(this.props.counter.id)} type="reset" className="btn">Delete</button>
          </div>
         );
    }
}
 
export default Counter;



  
// export default MyForm;
// class App extends React.Component {  
//     constructor(props) {  
//         super(props);  
//         this.state = {  
//             companyName: ''  
//         };  
//     }  
//     changeText(event) {  
//         this.setState({  
//             companyName: event.target.value  
//         });  
//     }  
//     render() {  
//         return (  
//             <div>  
//                 <h2>Simple Event Example</h2>  
//                 <label htmlFor="name">Enter company name: </label>  
//                 <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
//                 <h4>You entered: { this.state.companyName }</h4>  
//             </div>  
//         );  
//     }  
// }  
// export default App;  
// class App extends React.Component {  
//     constructor() {  
//          super();        
//          this.state = { displayBio: false };  
//          console.log('Component this', this);  
//          this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
//          }  
//          toggleDisplayBio(){  
//              this.setState({displayBio: !this.state.displayBio});  
//              }  
//          render() {  
//              return (  
//                  <div>  
//                      <h1>Welcome to JavaTpoint!!</h1>  
//                      {  
//                          this.state.displayBio ? (   
//                              <div>  
//                                  <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
//                                  <button onClick={this.toggleDisplayBio}> Show Less </button>  
//                            </div>  
//                              ) : (  
//                                  <div>  
//                                      <button onClick={this.toggleDisplayBio}> Read More </button>  
//                                  </div>  
//                         )  
//                      }  
//                 </div>  
//            )  
//        }  
//    }  
//    export default App;  

