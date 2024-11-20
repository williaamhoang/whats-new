import React from 'react';
import './EventCard.css';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
    return (
        <div className="event-card">
            <h3>{title}</h3>
            <p><strong>Date:</strong> {date}</p>
            <p>{description}</p>
        </div>
    );
};

export default EventCard;