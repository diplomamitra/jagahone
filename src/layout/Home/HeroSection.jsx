import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Dashboard6 from "../../assets/images/hero-img-2.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faf8] via-[#f0fdf4] ">
      {" "}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-green-200 bg-white px-4 sm:px-5 py-2 rounded-full shadow-sm">
              <span className="text-green-600">✦</span>

              <span
                className="text-green-700 text-sm sm:text-base"
                style={{ fontFamily: "mattermedium" }}
              >
                Local Business Growth software
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[34px] sm:text-[52px] lg:text-[58px] leading-[1.05] tracking-[-2px] text-[#0f172a] mt-7"
              style={{ fontFamily: "mattermedium" }}
            >
              Manage & Grow Google Business Profiles from One Powerful Dashboard
            </h1>

            {/* Sub Heading */}
            <p
              className="text-[17px] sm:text-[20px] text-gray-600 mt-6 leading-8 max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: "mattermedium" }}
            >
              Monitor reviews, publish updates, track rankings, and manage
              multiple business locations with AI-assisted workflows and full
              manual control.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="text-green-500 text-2xl">✓</div>

                <p
                  className="text-[#1e293b] text-lg sm:text-xl"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Safe Google Business Profile workflows
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-500 text-2xl">✓</div>

                <p
                  className="text-[#1e293b] text-lg sm:text-xl"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Manual approval system
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-500 text-2xl">✓</div>

                <p
                  className="text-[#1e293b] text-lg sm:text-xl"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Multi-location management
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-500 text-2xl">✓</div>

                <p
                  className="text-[#1e293b] text-lg sm:text-xl"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Agency-ready tools
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              {/* Primary Button */}
              <NavLink
                to="https://wa.me/+919306225156"
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all text-base sm:text-lg w-full sm:w-auto"
                style={{ fontFamily: "mattermedium" }}
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
                Try For Free
              </NavLink>

              {/* Secondary Button */}
              <NavLink
                to="/demo"
                className="border border-green-600 text-green-700 hover:bg-green-50 px-6 sm:px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all text-base sm:text-lg w-full sm:w-auto"
                style={{ fontFamily: "mattermedium" }}
              >
                Book Free Demo
                <ArrowRight size={20} />
              </NavLink>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow Effect */}
            <div className="absolute top-20 right-10 w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] bg-green-100 rounded-full blur-3xl opacity-40"></div>

            {/* Main Image */}
            <img
              src={Dashboard6}
              alt="AI Marketing"
              className=" border border-[#f1fdf5] rounded-4xl relative z-10 w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[650px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
