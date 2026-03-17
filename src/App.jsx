import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import HowItWorks from './pages/HowItWorks';
import OurImpact from './pages/OurImpact';
import Login from './pages/Login';
import GetInvolved from './pages/GetInvolved';
import Donations from './pages/Donations';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans relative flex flex-col">
      
      {/* --- EXACT ORIGINAL NAVBAR --- */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="text-2xl font-extrabold text-emerald-600 tracking-tight">
          FoodRecovery<span className="text-gray-800">.org</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How it Works</Link>
          <Link to="/donate" className="text-gray-600 hover:text-emerald-600 transition-colors">Donate</Link>
          <Link to="/our-impact" className="text-gray-600 hover:text-emerald-600 transition-colors">Our Impact</Link>
          <Link to="/Donations" className="text-gray-600 hover:text-emerald-600 transition-colors">View Donations</Link>
          

        </div>
        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-gray-600 font-bold hover:text-emerald-600 transition-colors">
            Login
          </Link>
        <Link to="/get-involved" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md">
          Get Involved
        </Link>
        </div>
      </nav>

      {/* --- THIS IS THE ONLY NEW PART (The Router replacing the middle) --- */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donations" element={<Donations />} />
         <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />

        </Routes>
      </main>

      {/* --- EXACT ORIGINAL FOOTER --- */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold text-emerald-500 tracking-tight mb-4">
              FOODRECOVERY<span className="text-white">.ORG</span>
            </div>
            <p className="text-sm text-gray-400 mb-1">MEANS Database, Inc. DBA FoodRecovery.org</p>
            <p className="text-sm text-gray-400 mb-1">EIN: 47-4262060</p>
            <p className="text-sm text-gray-400">
              4410 Massachusetts Ave NW #397 <br /> Washington, DC 20016
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6 text-sm font-semibold text-emerald-400">
            <Link to="/terms" className="hover:text-white transition-colors">
  Terms of Use
</Link>

<Link to="/privacy" className="hover:text-white transition-colors">
  Privacy Policy
</Link>
              
            </div>
            <div className="text-gray-500 text-sm mt-4 md:mt-8">
              &copy; {new Date().getFullYear()} FoodRecovery.org. All rights reserved.
            </div>
          </div>

        </div>
      </footer>

      {/* --- EXACT ORIGINAL WATERMARK --- */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none opacity-20 select-none flex flex-col items-end">
        <span className="text-xl font-black text-gray-900 tracking-widest">PROJECT TITLE</span>
        <span className="text-xs font-bold text-gray-700">CONFIDENTIAL</span>
      </div>

    </div>
  );
}