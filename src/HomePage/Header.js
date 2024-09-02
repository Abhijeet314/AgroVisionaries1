import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 p-4 transition-all duration-300 ${
        isScrolled ? 'bg-green-700 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-around items-center text-1xl">
        <div className="text-2xl font-bold text-white space-x-15">AgroVisionaries</div>
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/marketplace" className="text-white">Marketplace</Link></li>
          <li><Link to="/farmer-community" className="text-white">Community</Link></li>
          <li><Link to="/learning-center" className="text-white">Learning Center</Link></li>
          <li><Link to="/company-section" className="text-white">Company Section</Link></li>
          <li><Link to="/about-us" className="text-white">About Us</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
        </ul>
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
