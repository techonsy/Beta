import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout,isLoggedIn } from "../../helpers/auth";

const Navbar = () => {

  const [theme, setTheme] = useState("dark");
  
  

  // Apply theme class to HTML
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);



  return (
    <nav className="bg-[#161B22] dark:bg-[#0D1117] text-white px-6 py-4 border-b border-[#30363D] flex items-center justify-between">

      {/* Logo */}
      <div className="text-2xl font-bold text-[#3B82F6]">
        MyApp
      </div>

      {/* Center Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        <li>
          <Link to="/" className="hover:text-white">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-white">Contact Us</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center space-x-4">

        {/* 🌓 Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-2 bg-[#0D1117] text-gray-300 border border-[#30363D] rounded-lg hover:bg-[#1F2937] transition"
        >
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>

        {/* 🔐 If NOT logged in → Show Login & Register */}
        {isLoggedIn()?(
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        ): (
          <>
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
          </>
        )}

        
      </div>

    </nav>
  );
};

export default Navbar;
