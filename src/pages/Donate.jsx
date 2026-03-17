import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export default function Donate() {

  const navigate = useNavigate();

  // 🔒 Protect route (login required)
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  // form states
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(99);
  const [customAmount, setCustomAmount] = useState('');

  // success message
  const [message, setMessage] = useState("");

  // logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  const donationOptions = [
    { amount: 499, desc: "Build tools that power food rescue at scale." },
    { amount: 199, desc: "Feed a family for 6 months" },
    { amount: 99, desc: "Feed a family for 3 months" },
    { amount: 59, desc: "Deliver food where it's needed most" },
    { amount: 29, desc: "Feed the hungry for a month" },
    { amount: 19, desc: "Help feed the hungry" }
  ];

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('custom');
  };

  // 🚀 SUBMIT DONATION
  const handleDonate = async () => {
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount;

    try {
      const res = await fetch("https://food-recovery.onrender.com/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: user?.name || "Guest",
          email: user?.email || "guest@gmail.com",
          foodType: donationType,
          quantity: amount,
          location: "Not specified",
          phone: "0000000000"
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Donation successful 🎉");

        // reset form
        setSelectedAmount(99);
        setCustomAmount("");

      } else {
        alert(data.message || "Error submitting donation");
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      
      {/* HEADER */}
      <header className="bg-emerald-900 py-16 px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Make a Difference Today
        </motion.h1>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Help fight food waste and food insecurity.
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Choose amount
          </h3>

          {/* ✅ SUCCESS TOAST */}
          {message && (
            <div className="mb-4 flex items-center gap-3 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl">
              <span className="text-xl">✅</span>
              <span className="font-medium">{message}</span>
            </div>
          )}

          {/* Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
            <button 
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-3 rounded-lg font-bold ${donationType === 'one-time' ? 'bg-white border border-emerald-500' : ''}`}
            >
              One-time
            </button>
            <button 
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-3 rounded-lg font-bold ${donationType === 'monthly' ? 'bg-white border border-emerald-500' : ''}`}
            >
              Monthly
            </button>
          </div>

          {/* OPTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {donationOptions.map((option) => (
              <div 
                key={option.amount}
                onClick={() => {
                  setSelectedAmount(option.amount);
                  setCustomAmount('');
                }}
                className={`cursor-pointer p-4 rounded-xl border-2 ${
                  selectedAmount === option.amount ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                }`}
              >
                <div className="text-xl font-bold">${option.amount}</div>
                <div className="text-sm">{option.desc}</div>
              </div>
            ))}
          </div>

          {/* CUSTOM */}
          <div className="flex items-center border-b-2 py-3 mb-6">
            <span className="mr-2">$</span>
            <input 
              type="number"
              placeholder="Other"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="flex-1 outline-none"
            />
          </div>

          {/* BUTTON */}
          <button 
            onClick={handleDonate}
            className="w-full bg-emerald-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-700 transition"
          >
            Donate Now →
          </button>

        </motion.div>

      </div>
    </div>
  );
}