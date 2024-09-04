// src/HomePage/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">We'd love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out to us.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
