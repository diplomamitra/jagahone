import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { TOOL_NAME, TOOL_DEV } from "../../config";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 py-14">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col">
              <h2
                className="text-3xl text-[#0f172a]"
                style={{ fontFamily: "mattermedium" }}
              >
                {TOOL_NAME}
              </h2>

              <span className="text-[12px] text-gray-500 tracking-wide mt-1">
                A Product by {TOOL_DEV}
              </span>
            </div>

            <p
              className="mt-6 text-gray-600 leading-8 text-[16px]"
              style={{ fontFamily: "mattermedium" }}
            >
              Smart Google Business Profile platform for local businesses to
              improve visibility, customer engagement and online growth.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-50 hover:border-green-200 transition-all cursor-pointer">
                <FaFacebookF className="text-gray-700" />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-50 hover:border-green-200 transition-all cursor-pointer">
                <FaInstagram className="text-gray-700" />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-50 hover:border-green-200 transition-all cursor-pointer">
                <FaLinkedinIn className="text-gray-700" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-lg text-[#0f172a] mb-6"
              style={{ fontFamily: "mattermedium" }}
            >
              {TOOL_NAME} For
            </h3>

            <ul
              className="space-y-4 text-gray-600 text-[16px]"
              style={{ fontFamily: "mattermedium" }}
            >
              <li className="hover:text-green-600 transition cursor-pointer">
                Salon Owners
              </li>

              <li className="hover:text-green-600 transition cursor-pointer">
                Gym & Fitness Centres
              </li>

              <li className="hover:text-green-600 transition cursor-pointer">
                Doctors & Clinics
              </li>

              <li className="hover:text-green-600 transition cursor-pointer">
                Restaurant & Cafes
              </li>

              <li className="hover:text-green-600 transition cursor-pointer">
                Local Businesses
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-lg text-[#0f172a] mb-6"
              style={{ fontFamily: "mattermedium" }}
            >
              Company
            </h3>

            <ul
              className="space-y-4 text-[16px]"
              style={{ fontFamily: "mattermedium" }}
            >
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 transition"
                      : "text-gray-600 hover:text-green-600 transition"
                  }
                >
                  Platform
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 transition"
                      : "text-gray-600 hover:text-green-600 transition"
                  }
                >
                  Features
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tools"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 transition"
                      : "text-gray-600 hover:text-green-600 transition"
                  }
                >
                  Growth Tools
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 transition"
                      : "text-gray-600 hover:text-green-600 transition"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3
              className="text-lg text-[#0f172a] mb-6"
              style={{ fontFamily: "mattermedium" }}
            >
              Contact Us
            </h3>

            <div
              className="space-y-5 text-gray-600 text-[16px]"
              style={{ fontFamily: "mattermedium" }}
            >
             

              <p>
                Dev Contact Number:
                <br />
                +91 9306225156
              </p>

              <p>
                Email:
                <br />
                support@harjeetdevx.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-gray-500 text-center md:text-left"
            style={{ fontFamily: "mattermedium" }}
          >
            © 2026 {TOOL_NAME} Tool By HarjeetDevx
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500"
            style={{ fontFamily: "mattermedium" }}
          >
            <NavLink
            to="/terms-and-conditions"
            className="hover:text-green-600 transition cursor-pointer">
              Terms & Conditions
            </NavLink>

            <NavLink
            to="/privacy-policy"
            className="hover:text-green-600 transition cursor-pointer">
              Privacy Policy
            </NavLink>

            <NavLink
            to='/refund-policy'
            className="hover:text-green-600 transition cursor-pointer">
              Refund Policy
            </NavLink>

            <NavLink
            to='/terms-of-service-ai'
            className="hover:text-green-600 transition cursor-pointer">
              Terms of AI Usage
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
