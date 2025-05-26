import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { eventItems } from '../data/news';
import { LinkButton } from '../components/common/Button';

const Events: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');

  const upcomingEvents = eventItems.filter(event => 
    new Date(event.startDate) > new Date()
  );

  const pastEvents = eventItems.filter(event => 
    new Date(event.startDate) <= new Date()
  );

  const filteredEvents = eventItems.filter(event =>
    selectedType === 'all' || event.type === selectedType
  );

  return (
    <div>
      <PageHero
        title="Events"
        subtitle="Join us for workshops, seminars, and conferences exploring the future of AI."
        backgroundImage="https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Upcoming Events"
              subtitle="Don't miss our next events"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {upcomingEvents.map(event => (
                <div key={event.id} className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent-50 text-accent-700">
                        {event.type}
                      </span>
                      <div className="flex items-center text-neutral-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {event.startDate}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">{event.title}</h3>
                    <p className="text-neutral-600 mb-4">{event.location}</p>
                    <LinkButton to={`/events/${event.id}`} variant="primary" size="sm">
                      Learn More
                    </LinkButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Event Types</option>
              <option value="conference">Conferences</option>
              <option value="workshop">Workshops</option>
              <option value="seminar">Seminars</option>
              <option value="webinar">Webinars</option>
              <option value="hackathon">Hackathons</option>
            </select>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent-50 text-accent-700">
                      {event.type}
                    </span>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {event.startDate}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">{event.title}</h3>
                  <p className="text-neutral-600 mb-4">{event.location}</p>
                  <LinkButton to={`/events/${event.id}`} variant="primary" size="sm">
                    View Details
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;