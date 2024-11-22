import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import homepageImage from '../assets/homepageImage.jpg';

const HomePage: React.FC = () => {
    // Define words and fonts to rotate
    const words = ["Create", "Discover", "Paint", "Meet", "Draw"];
    const fonts = ["'Arial', serif", "'Georgia', serif", "'Courier New', serif", "'Verdana', serif", "'Lucida Console', serif"];

    // Set up state for current word and font
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 250);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="home-page">
            {/* Banner Section */}
            <div className="banner-container">
                <img src={homepageImage} alt="Welcome" className="homepage-image" />
                <div className="banner-text">
                    <h2>I want to</h2>
                    <div className="dynamic-text-container">
                        <span className="dynamic-text" style={{ fontFamily: fonts[currentWordIndex] }}>
                            {words[currentWordIndex]}
                        </span>
                    </div>
                </div>
            </div>

            {/* Explore Events Button Section */}
            <div className="events-button-container">
                <Link to="/events">
                    <button className="events-button">Explore Events</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;