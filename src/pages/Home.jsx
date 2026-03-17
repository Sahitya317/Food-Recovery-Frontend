import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  // --- SLIDER STATE & LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [donations, setDonations] = useState([]);

useEffect(() => {
  fetchDonations();
}, []);

const fetchDonations = async () => {
  try {
    const res = await fetch("https://food-recovery.onrender.com/api/donations");
    const data = await res.json();

    // latest 3 donations
    setDonations(data.slice(0, 3));
  } catch (err) {
    console.log(err);
  }
};

  // Array of slides with high-quality images and text
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Stop Food Waste Everywhere.",
      highlight: "Recover Food Anywhere.",
      subtitle: "Your surplus food has a better home. We connect food donors with nonprofits to fight hunger and reduce waste. All for free."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Feed the Community.",
      highlight: "Empower the Future.",
      subtitle: "Join thousands of volunteers and organizations working together to ensure no one in our city goes to bed hungry."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1615897571386-67a3a80808a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Perfectly Good Food.",
      highlight: "Saved from the Landfill.",
      subtitle: "We rescue fresh, nutritious produce and meals before they are thrown away, protecting our environment and our people."
    }
  ];

  // Auto-advance the slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer); // Cleanup when component unmounts
  }, [slides.length]);

  // --- DONATION FORM STATE (For the section further down) ---
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(99);

  const donationOptions = [
    { amount: 499, desc: "Build tools that power food rescue at scale." },
    { amount: 199, desc: "Feed a family for 6 months" },
    { amount: 99, desc: "Feed a family for 3 months" },
    { amount: 59, desc: "Deliver food where it's needed most" },
    { amount: 29, desc: "Feed the hungry for a month" },
    { amount: 19, desc: "Help feed the hungry" }
  ];

  return (
    <>
      {/* --- ANIMATED HERO SLIDER --- */}
      <header className="relative py-32 px-6 md:px-12 text-center flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-900">
        <motion.div
  className="absolute inset-0 bg-cover bg-center z-0"
style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
/>
        
        {/* The Images fading in and out */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          />
        </AnimatePresence>

        {/* Dark Overlay (Stays static to keep text readable) */}
        <div className="absolute inset-0 bg-gray-900/70 z-10"></div>

        {/* The Text Content */}
        <div className="relative z-20 w-full max-w-4xl mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
                {slides[currentSlide].title} <br className="hidden md:block" />
                <span className="text-emerald-400">{slides[currentSlide].highlight}</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Static Buttons (They don't animate out, they stay visible) */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md mx-auto">
            <Link to="/donate" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-bold text-center hover:bg-emerald-500 transition-all shadow-lg w-full sm:w-auto">
              Donate Food
            </Link>
          </div>

          {/* Slider Indicators (The little dots at the bottom) */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-emerald-500 scale-125' : 'bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* --- REST OF YOUR HOME PAGE (Unchanged) --- */}
      
      {/* USER PATHWAYS GRID */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Small Donors</h2>
            <p className="text-gray-500 mb-8">Restaurants, Schools, Caterers, Grocers and more</p>
            <Link to="/how-it-works" className="text-emerald-600 font-semibold hover:text-emerald-800 mt-auto">See how to start donating &rarr;</Link>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Small Recipients</h2>
            <p className="text-gray-500 mb-8">Pantries, Shelters, Churches, Mutual Aid and more</p>
            <Link to="/how-it-works" className="text-emerald-600 font-semibold hover:text-emerald-800 mt-auto">Start receiving donations &rarr;</Link>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Large Donors</h2>
            <p className="text-gray-500 mb-8">Manufacturers, warehouses, truck drivers, and more</p>
            <Link to="/how-it-works" className="text-emerald-600 font-semibold hover:text-emerald-800 mt-auto">Offer a donation &rarr;</Link>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Large Recipients</h2>
            <p className="text-gray-500 mb-8">Nonprofits and Mutual Aid groups with warehouse space</p>
            <Link to="/how-it-works" className="text-emerald-600 font-semibold hover:text-emerald-800 mt-auto">See if you qualify &rarr;</Link>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="bg-emerald-900 text-white py-24 px-6 md:px-12 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Annually, 133 billion pounds of food is wasted.</h2>
            <p className="text-lg text-emerald-100 mb-6 leading-relaxed">Our goal is to bridge the gap between food surplus and food insecurity, making nutritious meals accessible to everyone.</p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-8 text-center md:text-left">
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50 flex-1">
              <div className="text-5xl font-black text-emerald-300 mb-2">10M+</div>
              <div className="text-sm uppercase tracking-wider font-semibold text-emerald-100">Pounds of food rescued since 2023</div>
            </div>
          </div>
        </div>
      </section>
      {/* 🔥 RECENT DONATIONS SECTION */}
<section className="max-w-6xl mx-auto px-6 py-20">
  
  <h2 className="text-3xl font-bold text-center mb-10">
    Recent Donations
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {donations.map((donation) => (
      <div
        key={donation._id}
        className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-all"
      >
        <h3 className="text-lg font-bold text-emerald-600 mb-2">
          {donation.name}
        </h3>

        <p className="text-gray-600 text-sm">
          <strong>Type:</strong> {donation.foodType}
        </p>

        <p className="text-gray-600 text-sm">
          <strong>Amount:</strong> {donation.quantity}
        </p>

        <p className="text-gray-400 text-xs mt-2">
          {new Date(donation.createdAt).toLocaleDateString()}
        </p>
      </div>
    ))}
  </div>

  {/* VIEW ALL BUTTON */}
  <div className="text-center mt-10">
    <Link
      to="/donations"
      className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
    >
      View All Donations →
    </Link>
  </div>

</section>

    </>
  );
}