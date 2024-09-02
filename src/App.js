import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HeroSection from './HomePage/HeroSection';
import Features from './HomePage/Features';
import Marketplace from './MainFeatures/MarketPlace';
import FarmerCommunity from './MainFeatures/FarmerCommunity';
import LearningCenter from './MainFeatures/LearningCenter';
import CompanySection from './MainFeatures/CompanySection';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <HeroSection />
              <Features />
            </>
          } />
        </Route>
        {/* Routes for other pages */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/farmer-community" element={<FarmerCommunity />} />
        <Route path="/learning-center" element={<LearningCenter />} />
        <Route path="/company-section" element={<CompanySection />} />
      </Routes>
    </Router>
  );
};

export default App;
