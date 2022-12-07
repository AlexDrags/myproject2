import React, { Component} from "react";
import Nav from "../nav/nav";
import Button from "../../ui/button/button";

function UserGreeting() {
    return <h1>С возвращением!</h1>;
}
  
function GuestGreeting() {
    return <h1>Войдите, пожалуйста.</h1>;
}
  
function Greeting(props) {
    
    if (props.isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}

class Header extends React.Component {
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin() {
        this.setState({isLoggedIn: true})
    }

    handleLogout() {
        this.setState({isLoggedIn: false})
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn
        return(
            <header>
                <div className="container">
                    <Nav />
                    <Greeting isLoggedIn={isLoggedIn} />
                    <Button isLoggedIn={isLoggedIn} onClick={isLoggedIn ? this.handleLogout : this.handleLogin} />
                </div>
                
            </header>
        )
    }
}

export default Header;