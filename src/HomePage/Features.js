// src/HomePage/Features.js
import React from 'react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Our Features</h2>
        <p className="mb-8">Explore the benefits of connecting through AgriConnect.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-600">Description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
