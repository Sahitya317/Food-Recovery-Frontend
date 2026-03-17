import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      
      {/* --- PAGE HEADER --- */}
      <header className="bg-emerald-900 py-24 px-6 md:px-12 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          How FoodRecovery Works
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-emerald-100 max-w-2xl mx-auto"
        >
          We bridge the gap between excess food and empty plates through a seamless, three-step logistics network.
        </motion.p>
      </header>

      {/* --- STEPS SECTION --- */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-20 space-y-24">
        
        {/* Step 1: Donate (Text Left, Image Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <div className="text-emerald-600 font-black text-6xl mb-4 opacity-50">01</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">You have surplus food.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are a local restaurant with unserved meals, a grocery store with visually imperfect produce, or a large warehouse, you can list your available food on our platform in less than two minutes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Volunteers organizing food boxes" 
              className="rounded-2xl shadow-xl w-full object-cover h-80"
            />
          </div>
        </motion.div>

        {/* Step 2: Match (Image Left, Text Right using flex-row-reverse) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="md:w-1/2">
            <div className="text-emerald-600 font-black text-6xl mb-4 opacity-50">02</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We find the perfect match.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our algorithm instantly notifies nearby partner nonprofits, food pantries, and mutual aid shelters about your donation. The organization that needs it most claims the food directly through the dashboard.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Data and matching dashboard" 
              className="rounded-2xl shadow-xl w-full object-cover h-80"
            />
          </div>
        </motion.div>

        {/* Step 3: Deliver (Text Left, Image Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <div className="text-emerald-600 font-black text-6xl mb-4 opacity-50">03</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The community gets fed.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Volunteers or logistics partners transport the food from your door to the recipient's facility. Good food stays out of the landfill, and vulnerable populations get the nutrition they deserve.
            </p>
            <Link to="/donate" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-md">
              Start Donating Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="People sharing a meal" 
              className="rounded-2xl shadow-xl w-full object-cover h-80"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}