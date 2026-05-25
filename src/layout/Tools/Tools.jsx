import React from "react";
import Header from "../../components/header/Headerx";
import Footer from "../../components/footer/Footer";

import {
  QrCode,
  MessageCircle,
  MapPinned,
  BellRing,
  Star,
  Link2,
  ArrowRight,
  Sparkles,
  CalendarDays,
  ImagePlus,
  ShieldCheck,
  SearchCheck,
} from "lucide-react";
import Banner from "../Home/Banner";

const tools = [
  {
    title: "Dynamic QR Review Generator",
    description:
      "Generate beautiful high-resolution QR codes linked directly to your Google Review flow for receipts, counters, and print materials.",
    icon: QrCode,
  },
  {
    title: "WhatsApp Review Requests",
    description:
      "Send pre-written review request templates directly to customer WhatsApp inboxes with one click automation.",
    icon: MessageCircle,
  },
  {
    title: "EXIF Geo-Tag Optimization",
    description:
      "Optimize uploaded business images with location-based metadata for stronger local SEO signals.",
    icon: MapPinned,
  },
  {
    title: "Reputation Alerting Protocol",
    description:
      "Receive instant alerts whenever low-rating reviews are detected on your business profile.",
    icon: BellRing,
  },
  {
    title: "Website Review Widget",
    description:
      "Display live Google ratings and reviews directly on your business website using lightweight embeds.",
    icon: Star,
  },
  {
    title: "Smart Link Shortener",
    description:
      "Create branded short links for reviews, offers, bookings, and customer campaigns.",
    icon: Link2,
  },
  {
    title: "AI Google Posts",
    description:
      "Generate Google Business Profile posts with AI-assisted captions and content suggestions.",
    icon: Sparkles,
  },
  {
    title: "Content Scheduler",
    description:
      "Schedule posts, updates, and offers weeks ahead to keep your business profile active.",
    icon: CalendarDays,
  },
  {
    title: "Photo Optimization",
    description:
      "Enhance business images automatically for better visibility and customer engagement.",
    icon: ImagePlus,
  },
  {
    title: "Spam Review Protection",
    description:
      "Track suspicious review activity and monitor harmful reputation threats intelligently.",
    icon: ShieldCheck,
  },
  {
    title: "Local SEO Scanner",
    description:
      "Analyze profile optimization gaps and discover actionable ranking opportunities.",
    icon: SearchCheck,
  },
];

const Tools = () => {
  return (
    <div className="bg-[#f8faf8] ">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,_#dcfce7_0%,_#f0fdf4_35%,_#f8faf8_70%)]">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-200/40 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 blur-3xl rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          {/* Top */}
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
            <h1
              className="text-[#0f172a] text-[42px] sm:text-[72px] leading-[1] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Tactical Tools Built for Daily Local Growth
            </h1>

            {/* Description */}
            <p
              className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Stop paying for multiple tools. JagahOne combines review
              management, local SEO tools, WhatsApp engagement, analytics, and
              business growth features into one centralized platform.
            </p>
          </div>

          {/* Feature Highlight */}
          <div className="relative mt-20 bg-white/80 backdrop-blur-xl border border-green-100 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-8 sm:px-14 py-14 sm:py-20">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-5 py-3 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>

                  <span
                    className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Utility Ecosystem
                  </span>
                </div>

                <h2
                  className="text-[#0f172a] text-[36px] sm:text-[56px] leading-[1.02] tracking-[-3px] mt-8"
                  style={{ fontFamily: "mattermedium" }}
                >
                  One Platform Instead of 10 Different Tools
                </h2>

                <p
                  className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-7"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Manage reviews, automate WhatsApp campaigns, optimize local
                  SEO, schedule content, monitor rankings, and improve
                  reputation — all from one centralized dashboard.
                </p>

                {/* Features */}
                <div className="space-y-5 mt-10">
                  {[
                    "AI-powered local SEO utilities",
                    "Review growth & reputation tools",
                    "Built for local businesses & agencies",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>

                      <p
                        className="text-[#0f172a] text-base sm:text-lg"
                        style={{ fontFamily: "mattermedium" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="group mt-10 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-all"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Explore All Utilities
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-all"
                  />
                </button>
              </div>

              {/* Right Mock Dashboard */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute top-10 w-[420px] h-[420px] bg-green-200 rounded-full blur-3xl opacity-40"></div>

                {/* Window */}
                <div className="relative bg-white border border-gray-200 rounded-[36px] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.10)]">
                  {/* Top Dots */}
                  <div className="flex items-center gap-2 mb-5 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Mock Content */}
                  <div className="grid grid-cols-2 gap-4">
                    {tools.slice(0, 4).map((tool, index) => {
                      const Icon = tool.icon;

                      return (
                        <div
                          key={index}
                          className="bg-green-50 border border-green-100 rounded-2xl p-5"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-green-100">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>

                          <div className="mt-5">
                            <div className="h-3 bg-green-200 rounded-full w-2/3"></div>

                            <div className="space-y-2 mt-4">
                              <div className="h-2 bg-green-100 rounded-full"></div>
                              <div className="h-2 bg-green-100 rounded-full w-4/5"></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Bottom Large */}
                    <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-5">
                      <div className="flex justify-between items-center">
                        <div className="h-3 w-28 bg-gray-200 rounded-full"></div>

                        <div className="h-8 w-20 bg-green-100 rounded-xl"></div>
                      </div>

                      <div className="space-y-4 mt-6">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-green-100"></div>

                            <div className="flex-1">
                              <div className="h-2 bg-gray-200 rounded-full"></div>

                              <div className="h-2 bg-gray-100 rounded-full mt-2 w-2/3"></div>
                            </div>

                            <div className="w-16 h-3 bg-green-300 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-20">
            {tools.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl border border-green-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-green-100 blur-2xl opacity-0 group-hover:opacity-70 transition-all"></div>

                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <h3
                      className="text-[#0f172a] text-[24px] leading-tight"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      {tool.title}
                    </h3>

                    <p
                      className="text-gray-500 text-[16px] leading-8 mt-5"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Banner />

      <Footer />
    </div>
  );
};

export default Tools;
