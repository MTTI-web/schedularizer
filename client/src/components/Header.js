import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="appName">Schedularizer</div>
                <nav>
                    <Link to="/schedularizer">Home</Link>
                    <Link to="/schedularizer/about">About</Link>
                </nav>
                <div className="linkOpenMenuBar">
                    <div className="linkOpenMenuBarLine"></div>
                    <div className="linkOpenMenuBarLine"></div>
                    <div className="linkOpenMenuBarLine"></div>
                </div>
            </header>
        );
    }
}

export default Header;
