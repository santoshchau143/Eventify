import React from "react";
import "./Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Music Concert",
      date: "10 April 2026",
      location: "Delhi",
    },
    {
      id: 2,
      title: "Tech Meetup",
      date: "12 April 2026",
      location: "Noida",
    },
    {
      id: 3,
      title: "Startup Pitch",
      date: "15 April 2026",
      location: "Bangalore",
    },
    {
      id: 4,
      title: "Standup Comedy",
      date: "18 April 2026",
      location: "Mumbai",
    },
        {
      id: 5,
      title: "Dhunrandar 2",
      date: "Now Showing",
      location: "INOX Cinema , Crown Mall, Lucknow",
      type: "Event",
    },
    {
      id: 6,
      title: "Avengers: Secret Wars",
      date: "Now Showing",
      location: "PVR Cinema, Wave Mall, Lucknow",
      type: "Movie",
      image: "https://source.unsplash.com/400x300/?movie",
    },
    
  ];

  return (
    <div className="page">
      <h1>Events Page</h1>
      <p>Here you will see all events.</p>

      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;