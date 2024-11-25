import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo Section */}
                <div className="nav-left">
                    <div className="logo">
                        <Link to="/">YourLogo</Link>
                    </div>
                    <nav className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/features" className="nav-link">Features</Link>
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                    </nav>
                </div>

                {/* Right Section: Login and Sign Up */}
                <div className="nav-actions">
                    <Link to="/login" className="button button--secondary">Log In</Link>
                    <Link to="/signup" className="button button--secondary">Sign Up</Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;