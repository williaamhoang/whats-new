import React, { useEffect, useState } from 'react';
import homepageImage from '../../assets/homepageImage.jpg';
import homepageImage2 from '../../assets/homepageImage2.jpg';
import homepageImage3 from '../../assets/homepageImage3.jpg';
import homepageImage4 from '../../assets/homepageImage4.jpg';
import homepageImage5 from '../../assets/homepageImage5.jpg';
import './Banner.css';


const Banner: React.FC = () => {
    const images = [homepageImage, homepageImage2, homepageImage3, homepageImage4, homepageImage5];
    const words = ["Create", "Discover", "Paint", "Meet", "Draw"];
    const fonts = ["'Arial', serif", "'Georgia', serif", "'Courier New', serif", "'Verdana', serif", "'Lucida Console', serif"];

    // Set up state for current word and font
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 350);

        return () => clearInterval(interval);
    }, [words.length]);


    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 350);

        return () => clearInterval(imageInterval);
    }, [images.length]);

    return (
        <div className="banner-container">
            <img src={images[currentImageIndex]} alt="Dynamic Homepage Banner" className="homepage-image" />
            <div className="banner-text">
                <h2>I want to</h2>
                <div className="dynamic-text-container">
                    <span className="dynamic-text" style={{ fontFamily: fonts[currentWordIndex] }}>
                        {words[currentWordIndex]}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;