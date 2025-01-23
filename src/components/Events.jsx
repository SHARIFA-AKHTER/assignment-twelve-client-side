const Events = () => {
    // Sample event data (replace with dynamic data later if needed)
    const events = [
      {
        id: 1,
        title: "Music Concert",
        date: "January 25, 2025",
        description: "Join us for an evening of live music and fun!",
        location: "Downtown Arena",
      },
      {
        id: 2,
        title: "Art Exhibition",
        date: "February 10, 2025",
        description: "Explore modern art from local artists.",
        location: "City Art Gallery",
      },
      {
        id: 3,
        title: "Tech Meetup",
        date: "March 15, 2025",
        description: "Network with tech enthusiasts and industry experts.",
        location: "Innovation Hub",
      },
    ];
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
              Upcoming & Past Events
            </h1>
            <p className="mt-2 text-gray-700">
              Stay updated with the latest happenings around you.
            </p>
          </div>
  
          {/* Events List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-blue-500 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-bold">Date:</span> {event.date}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-bold">Location:</span> {event.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Events;