import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/requests")
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);
  return (
    <div>
       <h2 className="text-lg font-semibold">🎉 Upcoming Events</h2>
      {events.length ? (
        <ul>
          {events.map(event => (
            <li key={event.id} className="border p-2 my-2">{event.title} - {event.date}</li>
          ))}
        </ul>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default Events;

  