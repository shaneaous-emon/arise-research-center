import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../../data/events';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </div>
          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(event.startDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="mt-4 text-gray-600 line-clamp-2">{event.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
