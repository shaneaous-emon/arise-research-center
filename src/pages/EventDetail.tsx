import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Event Details</h1>
      <p className="mb-2">Event ID: {id}</p>
      {/* TODO: Fetch and display event details, registration, workshop info, stats, etc. */}
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Event Information</h2>
        <p>[Event information here]</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Registration</h2>
        <p>[Registration details here]</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Workshops</h2>
        <p>[Workshop details here]</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Statistics</h2>
        <p>[Event statistics here]</p>
      </div>
    </div>
  );
};

export default EventDetail;
