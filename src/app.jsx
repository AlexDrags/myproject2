import React, { Component} from "react";
import {hot} from "react-hot-loader";
import PageWrapper from "./components/layouts/page-wrapper/page-wrapper";
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
      <PageWrapper />      
    );
  }
}

export default hot(module)(App);