import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    background: '',
    experienceLevel: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://lern-backend.onrender.com/api/signup`, formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-black to-purple-950 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
            className="p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
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
            placeholder="password"
            onChange={handleChange}
            className="p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <select
            name="background"
            onChange={handleChange}
            className="p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          >
            <option value="" className="text-gray-500">choose</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="beginner">Beginner</option>
          </select>

          <select
            name="experienceLevel"
            onChange={handleChange}
            className="p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          >
            <option value="">Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
