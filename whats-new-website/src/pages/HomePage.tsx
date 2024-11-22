import React from 'react';
import Banner from '../components/Banner/Banner';
import EventsButton from '../components/EventsButton/EventsButton';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Banner />
            <EventsButton />
        </div>
    );
};

export default HomePage;