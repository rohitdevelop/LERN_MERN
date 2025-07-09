import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://lern-backend.onrender.com/api/login`, formData);
      alert("Login successful!");

      // ✅ Save token & user info in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Trigger navbar update
      window.dispatchEvent(new Event("storage"));

      // ✅ Redirect to homepage or about
      navigate("/about");
    } catch (err) {
      console.log("Login error:", err.response);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-black to-purple-950 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
