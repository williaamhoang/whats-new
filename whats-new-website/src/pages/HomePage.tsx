import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import homepageImage from '../assets/homepageImage.jpg';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <div className="banner-container">
                <img src={homepageImage} alt="Welcome" className="homepage-image" />
                <div className="banner-text">

                    {/* Adding button to navigate to the events page */}
                    <h2>H2 Text</h2>
                    <p>P Text</p>
                    <Link to="/events">
                        <button className="events-button">Explore Events</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;