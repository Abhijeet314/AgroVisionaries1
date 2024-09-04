import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import HeroSection from './HomePage/HeroSection';
import Features from './HomePage/Features';
import Marketplace from './MainFeatures/MarketPlace';
import FarmerCommunity from './MainFeatures/FarmerCommunity';
import LearningCenter from './MainFeatures/LearningCenter';
import CompanySection from './MainFeatures/CompanySection';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Features />
            </>
          } />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/farmer-community" element={<FarmerCommunity />} />
          <Route path="/learning-center" element={<LearningCenter />} />
          <Route path="/company-section" element={<CompanySection />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
};

export default App;
