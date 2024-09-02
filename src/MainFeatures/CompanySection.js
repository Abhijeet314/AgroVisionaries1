import React from 'react';

const CompanySection = () => {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Company Section</h1>
      
      {/* Company Profiles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Company Profiles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Company Profile */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Company Name</h3>
            <p className="text-gray-700 mb-4">Description of the company, their values, and their services.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Profile</button>
          </div>
          {/* Repeat similar blocks for more companies */}
        </div>
      </section>
      
      {/* Requirement Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Requirement Posts</h2>
        <div className="space-y-4">
          {/* Example Requirement Post */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Crop Requirement</h3>
            <p className="text-gray-700 mb-4">Details about the crop requirements, including quantity, quality, and region.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">View Details</button>
          </div>
          {/* Repeat similar blocks for more posts */}
        </div>
      </section>
    </div>
  );
};

export default CompanySection;
