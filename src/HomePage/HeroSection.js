import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video 
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="/videos/3126484-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-4 bg-transparent">
        <h1 className="text-5xl font-extrabold">Connecting Farmers and Customers</h1>
        <p className="text-lg text-green-400">Bridging the gap for a better future in agriculture</p>
        <div className="space-x-4">
          <button className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition transform hover:scale-105">Join as a Farmer</button>
          <button className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition transform hover:scale-105">Explore as a Customer</button>
          <button className="bg-yellow-600 px-6 py-3 rounded-md hover:bg-yellow-700 transition transform hover:scale-105">Discover Company Needs</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
