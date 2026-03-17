import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GetInvolved() {
  const involvementOptions = [
    {
      title: "Volunteer Your Time",
      description: "Join our on-the-ground team. Help rescue food from local businesses, organize pantry shelves, or deliver meals to those in need.",
      ctaText: "Become a Volunteer",
      link: "/login", // Points to login/signup for now
      icon: "🤝"
    },
    {
      title: "Donate Funds",
      description: "Every dollar you give helps us rescue 10 pounds of food. Your financial support keeps our trucks running and our platform online.",
      ctaText: "Make a Donation",
      link: "/donate",
      icon: "💚"
    },
    {
      title: "Provide Surplus Food",
      description: "Are you a restaurant, farm, or grocery store with excess edible food? Don't throw it away—route it to your community.",
      ctaText: "Donate Food",
      link: "/how-it-works",
      icon: "📦"
    },
    {
      title: "Corporate Partnerships",
      description: "Sponsor a local food drive or integrate our API into your supply chain software to automate your company's food waste reduction.",
      ctaText: "Partner With Us",
      link: "/contact", // A placeholder for a future contact page
      icon: "🏢"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      
      {/* --- PAGE HEADER --- */}
      <header className="bg-emerald-900 py-24 px-6 md:px-12 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Join the Movement
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-emerald-100 max-w-2xl mx-auto"
        >
          It takes a community to solve a community problem. Whether you have time, resources, or a platform, there is a place for you here.
        </motion.p>
      </header>

      {/* --- OPTIONS GRID --- */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {involvementOptions.map((option, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{option.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{option.title}</h2>
              <p className="text-lg text-gray-600 mb-8 flex-grow leading-relaxed">
                {option.description}
              </p>
              <Link 
                to={option.link} 
                className="inline-block bg-emerald-50 text-emerald-700 font-bold py-3 px-6 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors text-center border border-emerald-200 hover:border-emerald-600 mt-auto"
              >
                {option.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}