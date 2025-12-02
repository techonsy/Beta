import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      
      {/* Left: Logo/Name */}
      <div className="text-2xl font-bold">
        MyApp
      </div>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link to="/" className="hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
        </li>
      </ul>

      {/* Right: Auth Buttons */}
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 transition">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
