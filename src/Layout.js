import React from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This will render the current route's component */}
      <Footer />
    </div>
  );
};

export default Layout;