import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Left Navbar Section */}
                <div className="nav-left">
                    <nav className="nav-links">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/explore" className="nav-link">Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/host" className="nav-link">Host</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Center Section: Logo */}
                <div className="nav-logo">
                    <Link to="/" className="logo">MyLogo</Link>
                </div>

                {/* Right Section: Login and Sign Up */}
                <div className="nav-right">
                    <Link to="/login" className="button button--secondary">Log In</Link>
                    <Link to="/signup" className="button button--secondary">Sign Up</Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;