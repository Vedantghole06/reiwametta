import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      date: {
        day: 14,
        month: "Jan"
      },
      title: "National Conference on Indian Higher Education",
      description: "We'll get you directly seated and inside for you to enjoy the show.",
      image: "/src/assets/events-img1.png",
    },
    {
      id: 2,
      date: {
        day: 20,
        month: "Jan"
      },
      title: "National Conference Programme - SDG Knowledge Hub",
      description: "Directly seated and inside for you to enjoy the show.",
      image: "/src/assets/events-img2.png",
    },
    {
      id: 3,
      date: {
        day: 18,
        month: "Jan"
      },
      title: "6th National Conference on Tobacco or Health | Web Insights",
      description: "6th National Conference on Tobacco or Health | Web Insights",
      image: "/src/assets/events-img3.png",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-medium uppercase tracking-wider">Our Events</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First row */}
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-yellow-500 text-sm font-medium">{event.date.month}</span>
                  <span className="text-2xl font-bold">{event.date.day}</span>
                </div>

                <div className="flex-1">
                  <h3 className="font-medium mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Second row - Repeated cards */}
        {events.map((event) => (
          <div key={`repeat-${event.id}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-yellow-500 text-sm font-medium">{event.date.month}</span>
                  <span className="text-2xl font-bold">{event.date.day}</span>
                </div>

                <div className="flex-1">
                  <h3 className="font-medium mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Events;