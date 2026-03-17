import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function OurImpact() {
  const stats = [
    { label: "Pounds of food rescued since 2023", value: "10M+" },
    { label: "Nutritious meals served since 2023", value: "8.5M+" },
    { label: "Nonprofits & partners connected", value: "1,200+" },
    { label: "Pounds of CO2 emissions prevented", value: "4.2M" }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* --- PAGE HEADER --- */}
      <header className="bg-emerald-900 py-24 px-6 md:px-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-6"
          >
            Our Impact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-2xl mx-auto"
          >
            Numbers tell a story. Here is how our community is changing the landscape of food waste and hunger, one meal at a time.
          </motion.p>
        </div>
      </header>

      {/* --- THE CORE PROBLEM --- */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mt-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-emerald-50 rounded-3xl p-10 md:p-16 border border-emerald-100 shadow-sm"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Annually, <span className="text-emerald-600">133 billion pounds</span> of food is wasted.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our goal is to bridge the gap between food surplus and food insecurity, making nutritious meals accessible to everyone, regardless of their circumstances. We work hand in hand with community organizations to distribute surplus food to those who need it most.
          </p>
        </motion.div>
      </section>

      {/* --- STATISTICS GRID --- */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-5xl font-black text-emerald-600 mb-4">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider font-bold text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Be part of the solution.</h2>
        <Link to="/donate" className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-600/20">
          Make a Donation Today
        </Link>
      </section>

    </div>
  );
}