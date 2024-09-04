import React from 'react';

const CompanySection = () => {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-center text-green-700">Company Section</h1>
      
      {/* Company Profiles */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Explore Company Profiles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Example Company Profile */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Green Farms Ltd.</h3>
            <p className="text-gray-700 mb-6">Dedicated to sustainable agriculture, Green Farms Ltd. specializes in organic produce and innovative farming solutions.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">View Profile</button>
          </div>
          {/* Repeat similar blocks for more companies */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">AgroCorp International</h3>
            <p className="text-gray-700 mb-6">AgroCorp International is a leading provider of high-quality seeds and farming technology to boost crop productivity.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">View Profile</button>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Harvest Co.</h3>
            <p className="text-gray-700 mb-6">Harvest Co. partners with local farmers to distribute fresh, locally sourced produce across the region.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">View Profile</button>
          </div>
        </div>
      </section>
      
      {/* Post Requirement Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-700">Post Your Crop Requirements</h2>
        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Submit a New Requirement</h3>
          <p className="text-gray-700 mb-6">Let farmers know what crops or products your company needs. Specify the quantity, quality, and other requirements.</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">Post Requirement</button>
        </div>
      </section>
      
      {/* Requirement Posts */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Current Crop Requirements</h2>
        <div className="space-y-8">
          {/* Example Requirement Post */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Wheat Procurement</h3>
            <p className="text-gray-700 mb-4">We are looking to procure 10,000 tons of high-quality wheat from the northern region. The wheat should meet all organic farming standards.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">View Details</button>
          </div>
          {/* Repeat similar blocks for more posts */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Tomato Supply</h3>
            <p className="text-gray-700 mb-4">Our company requires 5,000 tons of fresh, vine-ripened tomatoes for our processing unit. Delivery needed by mid-October.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">View Details</button>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Organic Cotton</h3>
            <p className="text-gray-700 mb-4">Seeking suppliers for organic cotton. Must adhere to GOTS standards. Required quantity: 2,000 bales.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanySection;
