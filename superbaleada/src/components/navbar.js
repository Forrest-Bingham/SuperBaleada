import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        
        <div className="nav">
            <div className="blue"/>
            <div className="links">
            <Link to="/login" className="link">Log In</Link>
            <Link to="/" className="link">Menu</Link>
            <Link to="/cart" className="link">Cart</Link>
            </div>
            <div className="blue"/>
        </div>
    )
}

export default Navbar;