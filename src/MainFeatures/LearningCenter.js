import React from 'react';

const LearningCenter = () => {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Learning Center</h1>

      {/* Content Library */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Content Library</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Tutorial */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Introduction to Sustainable Farming</h3>
            <p className="text-gray-700 mb-4">A comprehensive guide to sustainable farming practices to enhance soil health and yield.</p>
            <a href="#" className="text-blue-600 hover:underline">Read More</a>
          </div>
          {/* Example Tutorial */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Modern Irrigation Techniques</h3>
            <p className="text-gray-700 mb-4">Explore the latest advancements in irrigation technology to optimize water usage.</p>
            <a href="#" className="text-blue-600 hover:underline">Read More</a>
          </div>
          {/* Example Tutorial */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Organic Pest Management</h3>
            <p className="text-gray-700 mb-4">Learn about effective and eco-friendly methods to manage pests in organic farming.</p>
            <a href="#" className="text-blue-600 hover:underline">Read More</a>
          </div>
        </div>
      </section>

      {/* Interactive Webinars */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Interactive Webinars</h2>
        <div className="space-y-6">
          {/* Example Webinar */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Webinar: Advances in Agricultural Technology</h3>
            <p className="text-gray-700 mb-4">Join us for a live session on the latest technological advancements in agriculture.</p>
            <p className="text-gray-600">Date: September 15, 2024 | Time: 3:00 PM - 4:30 PM</p>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Register Now</a>
          </div>
          {/* Example Webinar */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Webinar: Best Practices for Crop Rotation</h3>
            <p className="text-gray-700 mb-4">Learn from experts about the benefits and techniques of effective crop rotation.</p>
            <p className="text-gray-600">Date: October 10, 2024 | Time: 2:00 PM - 3:30 PM</p>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Register Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningCenter;
