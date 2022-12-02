import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Clock from "./components/app/section";
import "./App.css";

// function Element () {
//   return(
//       React.createElement(
//           'a', {
//               href: '/'
//           },
//           `Текущее время ${new Date().toLocaleTimeString()}`
//       )
//   )
// } 


class App extends Component{  
  render(){
    return(
      <div className="App">
        <p className="App__paragraf"> Текущее время </p>
        <Clock />
      </div>
      
    );
  }
}

export default hot(module)(App);