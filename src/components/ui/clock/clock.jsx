import React, { Component} from "react";
import "./clock.css";

function FormattedDate(props) {
  return (
    <h2>Сейчас {props.date.toLocaleTimeString()}</h2>
  )
}

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  render(){
    return(
      <section className="section">
        <h1> Тик, так! </h1>
        <FormattedDate date={this.state.date} />
      </section>
    );
  }
}

  export default Clock;