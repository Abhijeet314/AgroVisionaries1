import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
const Features = () => {
  return (
    <>
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-green-700">Our Features</h2>
        <p className="text-lg mb-12 text-center text-gray-700">Discover the key benefits and features that make AgriConnect your go-to platform for agriculture and farming.</p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Feature 1: Centralized Marketplace */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Centralized Marketplace</h3>
            <p className="text-gray-600">Buy and sell crops and dairy products directly through our platform, connecting farmers with customers across regions.</p>
          </div>
          
          {/* Feature 2: Farmer Community Space */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Farmer Community Space</h3>
            <p className="text-gray-600">Join a vibrant community of farmers to share techniques, experiences, and support each other in their agricultural journey.</p>
          </div>
          
          {/* Feature 3: Learning Resources */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Learning Resources</h3>
            <p className="text-gray-600">Access a wealth of educational content in regional languages, covering best practices in farming, technology use, and more.</p>
          </div>
          
          {/* Feature 4: Company Partnerships */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Company Partnerships</h3>
            <p className="text-gray-600">Engage with companies for contract farming opportunities and specific crop requirements, ensuring better market access.</p>
          </div>
          
          {/* Feature 5: Sector Support */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Sector Support</h3>
            <p className="text-gray-600">Support for specialized sectors like dairy, organic farming, and more to help farmers diversify and maximize their income.</p>
          </div>
          
          {/* Feature 6: Regional Language Support */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Regional Language Support</h3>
            <p className="text-gray-600">Content and communication in regional languages to ensure accessibility and effective knowledge sharing for all farmers.</p>
          </div>
          
          {/* Feature 7: Weather Prediction Tools */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Weather Prediction Tools</h3>
            <p className="text-gray-600">Use advanced weather prediction tools to make informed decisions on crop selection and planting schedules.</p>
          </div>
          
          {/* Feature 8: Mobile Access */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mobile Access</h3>
            <p className="text-gray-600">Access AgriConnect on the go with our mobile-friendly platform, ensuring you stay connected anywhere, anytime.</p>
          </div>
        </div>
      </div>
    </section>
     {/* Add About Us and Contact Us sections */}
     <AboutUs />
      <ContactUs />
    </>
  );
};

export default Features;
