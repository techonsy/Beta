import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../context/ThemeContext";
import resolveLogo from "../assets/resolveos-logo.svg";

const Navbar = () => {
  const { Thememode, dark, light } = useTheme();
  const location = useLocation();

  // ⭐ SHOW NAV ONLY ON LOGIN & REGISTER PAGE for non-user access
  const isAuthPage =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register");

  if (!isAuthPage) {
    return null; // Hide Navbar for ALL other pages
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0b0b0b] border-b border-gray-200 dark:border-gray-800">
      <div className="w-full h-16 px-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 text-xl font-semibold text-gray-900 dark:text-gray-100"
        >
          <img
            src={resolveLogo}
            alt="ResolveOS"
            className="w-10 h-10 rounded-xl"
          />
          ResolveOS
        </Link>

        {/* THEME BUTTON */}
        <button
          onClick={() =>
            Thememode === "light" ? dark() : light()
          }
          className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
        >
          {Thememode === "light" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
