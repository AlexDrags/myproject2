import React, { Component} from "react";

class Nav extends React.Component {
    render() {
        return(
        <nav>
            <ul className="nav__list">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Features</a></li>
            <li><a>Contact</a></li>
            </ul>
        </nav>
        )
    }
}

export default Nav;
