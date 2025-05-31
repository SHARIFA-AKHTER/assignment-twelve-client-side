import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get("http://localhost:3000/requests")
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching events");
        setLoading(false);
        console.error("Error fetching events:", error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold">🎉 Upcoming Events</h2>
      {error ? (
        <p>{error}</p>
      ) : events.length ? (
        <ul>
          {events.map(event => (
            <li key={event.id || event.title} className="border p-2 my-2">
              {event.title} - {event.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
};

export default Events;

  