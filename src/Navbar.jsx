import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                <img src={"https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png"} alt="Logo" className="navbar-logo" />
                <Link to="/" className="navbar-link">Home</Link>
                    
                    <Link to="/Home" className="navbar-link">Products</Link>
                    <Link to="/" className="navbar-link">Login</Link>
                    <Link to="/" className="navbar-link">About Us</Link>
                    <Link to="/" className="navbar-link">Count</Link>

                </div>
                <div className="navbar-right">
                  <Link to="/"><button className="navbar-button">Logout</button></Link> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
