import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Adjust the speed (2.0 means twice as fast)
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
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
        <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">Connecting Farmers and Customers</h1>
        <p className="text-sm text-green-400 sm:text-base md:text-lg">Bridging the gap for a better future in agriculture</p>
        <div className="space-x-4">
          <button className="bg-green-600 px-3 py-1 rounded-md hover:bg-green-700 transition transform hover:scale-105 sm:px-4 sm:py-2 md:px-6 md:py-3">Join as a Farmer</button>
          <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 transition transform hover:scale-105 sm:px-4 sm:py-2 md:px-6 md:py-3">Explore as a Customer</button>
          <button className="bg-yellow-600 px-3 py-1 rounded-md hover:bg-yellow-700 transition transform hover:scale-105 sm:px-4 sm:py-2 md:px-6 md:py-3">Discover Company Needs</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
