import React from 'react';

const FarmerCommunity = () => {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Farmer Community</h1>

      {/* Discussion Forums */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Discussion Forums</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Forum */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Crop Techniques</h3>
            <p className="text-gray-700 mb-4">Discuss various techniques for improving crop yields, pest management, and soil health.</p>
            <a href="#" className="text-blue-600 hover:underline">Join the Discussion</a>
          </div>
          {/* Example Forum */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Organic Farming</h3>
            <p className="text-gray-700 mb-4">Share tips and experiences about organic farming methods and sustainable practices.</p>
            <a href="#" className="text-blue-600 hover:underline">Join the Discussion</a>
          </div>
          {/* Example Forum */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Dairy Farming</h3>
            <p className="text-gray-700 mb-4">Connect with other dairy farmers to discuss best practices, equipment, and challenges.</p>
            <a href="#" className="text-blue-600 hover:underline">Join the Discussion</a>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Success Stories</h2>
        <div className="space-y-6">
          {/* Example Success Story */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Revitalizing Soil Health</h3>
            <p className="text-gray-700 mb-4">How farmer John Doe transformed his soil with innovative techniques, leading to a 40% increase in crop yield.</p>
            <p className="text-gray-600">Read the full story <a href="#" className="text-blue-600 hover:underline">here</a>.</p>
          </div>
          {/* Example Success Story */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Organic Farming Breakthrough</h3>
            <p className="text-gray-700 mb-4">Jane Smith's journey to successfully implement organic farming practices and the impact it had on her farm.</p>
            <p className="text-gray-600">Read the full story <a href="#" className="text-blue-600 hover:underline">here</a>.</p>
          </div>
          {/* Example Success Story */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Efficient Dairy Production</h3>
            <p className="text-gray-700 mb-4">A case study on how efficient practices improved dairy production and profitability.</p>
            <p className="text-gray-600">Read the full story <a href="#" className="text-blue-600 hover:underline">here</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerCommunity;
