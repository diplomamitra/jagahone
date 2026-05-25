import {
  QrCode,
  MessageCircle,
  CalendarDays,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

const tools = [
  {
    title: "Review QR Generator",
    desc: "Create smart QR codes to collect more customer reviews instantly.",
    icon: QrCode,
  },
  {
    title: "WhatsApp Automation",
    desc: "Send review requests and updates directly to your customers.",
    icon: MessageCircle,
  },
  {
    title: "Google Posts Planner",
    desc: "Schedule offers, events, and business updates automatically.",
    icon: CalendarDays,
  },
  {
    title: "Negative Review Alerts",
    desc: "Get instant alerts whenever a low-rating review appears.",
    icon: ShieldAlert,
  },
];

const GrowthTools = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f8faf8] via-[#f0fdf4] to-[#dcfce7]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-100/40 blur-3xl rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Top Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-5 py-3 rounded-full shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>

            <span
              className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
              style={{ fontFamily: "mattermedium" }}
            >
              Growth Utilities
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#0f172a] text-[38px] sm:text-[60px] leading-[1.02] tracking-[-3px] mt-8"
            style={{ fontFamily: "mattermedium" }}
          >
            Powerful Tools Built for Local Business Growth
          </h2>

          {/* Description */}
          <p
            className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-7"
            style={{ fontFamily: "mattermedium" }}
          >
            Everything you need to automate engagement, manage reputation, and
            grow your Google Business Profile faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border border-green-100 rounded-[30px] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-green-100 blur-2xl opacity-0 group-hover:opacity-70 transition-all"></div>

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3
                    className="text-[#0f172a] text-[22px] leading-tight"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    {tool.title}
                  </h3>

                  <p
                    className="text-gray-500 text-base leading-8 mt-4"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    {tool.desc}
                  </p>
                </div>

                {/* Link */}
                <button
                  className="relative mt-8 inline-flex items-center gap-2 text-green-700 hover:text-green-800 transition-all"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Learn More
                  <ArrowRight size={17} />
                </button>
              </div>
            );
          })}
        </div>
        {/* Bottom Button */}
        <div className="flex justify-center mt-14">
          <NavLink
            to="/tools"
            className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            style={{ fontFamily: "mattermedium" }}
          >
            View All 12+ Tools
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default GrowthTools;
