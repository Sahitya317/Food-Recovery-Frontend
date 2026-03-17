import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // success message
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "https://food-recovery.onrender.com/api/auth/login"
      : "https://food-recovery.onrender.com/api/auth/register";

    const bodyData = isLogin
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
          setMessage("Login successful");

          // store user (optional but useful later)
          localStorage.setItem("user", JSON.stringify(data.user));

          setTimeout(() => {
            navigate("/");
          }, 1500);

        } else {
          setMessage("Signup successful");
          setIsLogin(true);
        }
      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-[85vh] bg-gray-50 flex flex-col justify-center items-center py-12 px-6">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
      >

        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-gray-500">
            {isLogin ? 'Enter your details to access your dashboard.' : 'Join us in the fight against food waste.'}
          </p>
        </div>

        {/* ✅ GREEN SUCCESS TOAST */}
        {message && (
          <div className="mb-4 flex items-center gap-3 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl">
            <span className="text-xl">✅</span>
            <span className="font-medium">{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name (Signup only) */}
          {!isLogin && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </motion.div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                Forgot password?
              </a>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-emerald-600 text-white font-bold text-lg py-3.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 mt-4"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600 font-medium">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition-all"
          >
            {isLogin ? 'Sign up for free' : 'Log in here'}
          </button>
        </div>

      </motion.div>
    </div>
  );
}