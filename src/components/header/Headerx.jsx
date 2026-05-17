import React, { useState } from "react";
import { Menu, X, Store, ArrowRight } from "lucide-react";

import { Link, NavLink } from "react-router-dom";

import { TOOL_NAME, TOOL_DEV } from "../../config.js";

const Headerx = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Active Link Style
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-medium transition"
      : "text-[#0f172a] font-medium hover:text-green-600 transition";

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col cursor-pointer"
            onClick={closeMenu}
          >
            <div className="flex items-center gap-2">
              <Store className="text-green-600 w-7 h-7" />

              <h1
                className="text-2xl text-[#0f172a]"
                style={{ fontFamily: "mattermedium" }}
              >
                {TOOL_NAME}
              </h1>
            </div>

            <span className="text-[11px] text-gray-500 ml-9 -mt-1 tracking-wide">
              A Product by {TOOL_DEV}
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav
            className="hidden md:flex items-center gap-8"
            style={{ fontFamily: "mattermedium" }}
          >
            <NavLink to="/" className={navLinkClass}>
              Platform
            </NavLink>

            <NavLink to="/features" className={navLinkClass}>
              Features
            </NavLink>

            <NavLink to="/tools" className={navLinkClass}>
              Growth Tools
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <div className="w-[1px] h-6 bg-gray-300"></div>

            <a
              href="#"
              className="text-[#0f172a] hover:text-green-600 transition"
            >
              Dashboard
            </a>

            <NavLink
              to="/demo"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium flex items-center gap-2 transition-all"
            >
              Try For Free
              <ArrowRight size={18} />
            </NavLink>
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-7 h-7 text-black" />
            ) : (
              <Menu className="w-7 h-7 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <nav
            className="flex flex-col gap-5 pt-5 border-t border-gray-100"
            style={{ fontFamily: "mattermedium" }}
          >
            <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
              Platform
            </NavLink>

            <NavLink
              to="/features"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Features
            </NavLink>

            <NavLink to="/tools" className={navLinkClass} onClick={closeMenu}>
              Growth Tools
            </NavLink>

            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>

            <a href="#" className="text-[#0f172a]">
              Dashboard
            </a>

            <NavLink
              to="/demo"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all w-full"
            >
              Try For Free
              <ArrowRight size={18} />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headerx;
