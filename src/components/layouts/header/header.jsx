import React, { Component} from "react";
import Nav from "../nav/nav";

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="container">

                    <Nav />
                </div>
                
            </header>
        )
    }
}

export default Header;