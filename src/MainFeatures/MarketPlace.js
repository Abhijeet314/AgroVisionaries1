import React from 'react';

const Marketplace = () => {
  return (
    <div className="py-20 bg-gray-100 min-h-screen">
      <section className="px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Marketplace</h1>
        
        {/* Search & Filter Component */}
        <div className="mb-12">
          <input 
            type="text" 
            placeholder="Search by crop, region, etc." 
            className="p-3 border border-gray-300 rounded-md w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Add filters here (e.g., dropdowns for regions, price ranges) */}
          <div className="mt-4 flex space-x-4">
            <select className="p-2 border border-gray-300 rounded-md shadow-md">
              <option value="">Filter by Region</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-md shadow-md">
              <option value="">Filter by Price</option>
              <option value="0-50">0 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101-200">$101 - $200</option>
              <option value="201+">$201+</option>
            </select>
          </div>
        </div>

        {/* Product Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Product 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400x300" alt="Product" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <p className="text-gray-600 mb-4">Brief description of the product. Highlight key features and benefits.</p>
            <p className="text-lg font-bold text-green-600">$50.00</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition transform hover:scale-105">View Details</button>
          </div>

          {/* Sample Product 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400x300" alt="Product" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <p className="text-gray-600 mb-4">Brief description of the product. Highlight key features and benefits.</p>
            <p className="text-lg font-bold text-green-600">$75.00</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition transform hover:scale-105">View Details</button>
          </div>

          {/* Sample Product 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400x300" alt="Product" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <p className="text-gray-600 mb-4">Brief description of the product. Highlight key features and benefits.</p>
            <p className="text-lg font-bold text-green-600">$100.00</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition transform hover:scale-105">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
