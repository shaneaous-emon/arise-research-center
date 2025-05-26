import React from 'react';
import { useParams } from 'react-router-dom';

const PublicationDetail: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Publication Details</h1>
      <p className="mb-2">Publication ID: {id}</p>
      {/* TODO: Fetch and display publication details, authors, abstract, citation, download links, etc. */}
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Abstract</h2>
        <p>[Abstract content here]</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Authors & Affiliations</h2>
        <p>[Authors and affiliations here]</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Citation</h2>
        <p>[Citation info here]</p>
        <a href="#" className="text-blue-600 underline mt-4 inline-block">Download PDF</a>
      </div>
    </div>
  );
};

export default PublicationDetail;
