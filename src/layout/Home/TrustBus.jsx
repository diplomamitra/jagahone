import React from "react";
import {
  Store,
  UtensilsCrossed,
  Stethoscope,
  Car,
  Coffee,
  Sparkles,
} from "lucide-react";

const businessTypes = [
  {
    name: "Salons",
    icon: Store,
  },
  {
    name: "Restaurants",
    icon: UtensilsCrossed,
  },
  {
    name: "Clinics",
    icon: Stethoscope,
  },
  {
    name: "Garages",
    icon: Car,
  },
  {
    name: "Cafes",
    icon: Coffee,
  },
];

const TrustBus = () => {
  return (
    <section className="relative overflow-hidden py-14">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-green-100 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Top Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 border border-green-200 bg-white px-4 py-2 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-green-600" />

            <span
              className="text-green-700 text-xs sm:text-sm tracking-wide"
              style={{ fontFamily: "mattermedium" }}
            >
              BUILT FOR MODERN LOCAL BUSINESSES
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-center text-[28px] sm:text-[42px] leading-tight text-[#0f172a] mt-7"
          style={{ fontFamily: "mattermedium" }}
        >
          Helping Local Brands Grow Faster with AI
        </h2>

        {/* Sub Text */}
        <p
          className="text-center text-gray-600 text-base sm:text-lg mt-5 max-w-3xl mx-auto leading-8"
          style={{ fontFamily: "mattermedium" }}
        >
          From restaurants to clinics — manage reviews, rankings, visibility,
          and customer engagement from one smart dashboard.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-12">
          {businessTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-all">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>

                {/* Name */}
                <span
                  className="mt-4 text-[#0f172a] text-sm sm:text-base"
                  style={{ fontFamily: "mattermedium" }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBus;
