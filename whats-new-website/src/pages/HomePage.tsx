import React from 'react';
import Banner from '../components/Banner/Banner';
import EventsButton from '../components/EventsButton/EventsButton';
import NavBar from '../components/NavBar/NavBar';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Banner />
            <NavBar />
            <EventsButton />
        </div>
    );
};

export default HomePage;