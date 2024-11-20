import React from 'react';
import EventCard from '../components/EventCard';

const EventsPage: React.FC = () => {
    return (
        <div className="events-page">
            <h2>Upcoming Events</h2>
            <EventCard title="Tekken Tournament 2024" date="March 33, 2024" description="International Tekken 8 Tournament hosted by Houston FGC." />
            <EventCard title="Smash Brothers Ultimate" date="May 36, 2024" description="State wide Super Smash Brothers Ultimate Tournament hosted by Houston FGC." /> 
        </div>
    );
};

export default EventsPage;