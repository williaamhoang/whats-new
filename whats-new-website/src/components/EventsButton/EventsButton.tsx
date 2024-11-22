import React from 'react';
import { Link } from 'react-router-dom';
import './EventsButton.css';

const EventsButton: React.FC = () => {
    return (
        <div className="events-button-container">
            <Link to="/events">
                <button className="events-button">Explore</button>
            </Link>
        </div>
    );
};

export default EventsButton;