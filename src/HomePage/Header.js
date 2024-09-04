import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current route is the homepage
  const isHomePage = location.pathname === '/';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the mobile menu after clicking
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 p-4 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-green-700 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold text-white">AgroVisionaries</div>
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/marketplace" className="text-white">Marketplace</Link></li>
          <li><Link to="/farmer-community" className="text-white">Community</Link></li>
          <li><Link to="/learning-center" className="text-white">Learning Center</Link></li>
          <li><Link to="/company-section" className="text-white">Company Section</Link></li>
          <li><a href="#about-us" onClick={() => scrollToSection('about-us')} className="text-white">About Us</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-white">Contact</a></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-green-700 bg-opacity-95 z-10 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="space-y-6 text-center">
          <li><Link to="/" className="text-white text-2xl" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/marketplace" className="text-white text-2xl" onClick={toggleMenu}>Marketplace</Link></li>
          <li><Link to="/farmer-community" className="text-white text-2xl" onClick={toggleMenu}>Community</Link></li>
          <li><Link to="/learning-center" className="text-white text-2xl" onClick={toggleMenu}>Learning Center</Link></li>
          <li><Link to="/company-section" className="text-white text-2xl" onClick={toggleMenu}>Company Section</Link></li>
          <li><a href="#about-us" onClick={() => scrollToSection('about-us')} className="text-white text-2xl">About Us</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-white text-2xl">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
