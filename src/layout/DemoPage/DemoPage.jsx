import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const DemoPage = () => {
  return (
    <div className="bg-[#f8faf8] overflow-hidden">
      <Header />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#dcfce7_0%,_#f0fdf4_35%,_#f8faf8_70%)] py-24">
        
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-200/40 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 blur-3xl rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side */}
            <div className="max-w-2xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-5 py-3 rounded-full shadow-sm">
                
                <div className="w-2 h-2 rounded-full bg-green-600"></div>

                <span
                  className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Free Demo Access
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[#0f172a] text-[42px] sm:text-[72px] leading-[1] tracking-[-3px] mt-8"
                style={{ fontFamily: "mattermedium" }}
              >
                Ready to See JagahOne in Action?
              </h1>

              {/* Description */}
              <p
                className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8"
                style={{ fontFamily: "mattermedium" }}
              >
                Book a free personalized demo and discover how AI-powered
                local SEO, review management, automation, and rank tracking
                can help grow your Google Business visibility.
              </p>

              {/* Features */}
              <div className="space-y-5 mt-12">
                
                {[
                  {
                    title: "AI-Powered Growth Tools",
                    desc: "Smart automation built for local business growth.",
                    icon: Sparkles,
                  },
                  {
                    title: "Review & Reputation Management",
                    desc: "Track reviews and improve customer trust instantly.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Real-Time Ranking Analytics",
                    desc: "Monitor Maps visibility and local SEO performance.",
                    icon: BarChart3,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-5 bg-white/70 backdrop-blur-xl border border-green-100 rounded-3xl p-6 "
                    >
                      
                      <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-green-600" />
                      </div>

                      <div>
                        <h3
                          className="text-[#0f172a] text-xl"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className="text-gray-500 text-base leading-8 mt-2"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side Form */}
            <div className="relative">
              
              {/* Glow */}
              <div className="absolute top-10 w-[420px] h-[420px] bg-green-200 rounded-full blur-3xl opacity-40"></div>

              {/* Form Card */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-green-100 rounded-[40px] p-7 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                
                {/* Top Dots */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Form Heading */}
                <h2
                  className="text-[#0f172a] text-[30px] sm:text-[38px] leading-[1.05]"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Book Free Demo
                </h2>

                <p
                  className="text-gray-500 text-base leading-8 mt-4"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Fill out the form below and we'll connect with you shortly.
                </p>

                {/* Form */}
                <form className="space-y-7 mt-10">
                  
                  {/* Business */}
                  <div>
                    <label
                      className="block text-[#0f172a] text-sm mb-3"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Business Details *
                    </label>

                    <input
                      type="text"
                      placeholder="Start typing your business name..."
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-green-500"
                      style={{ fontFamily: "mattermedium" }}
                    />

                    <p
                      className="text-gray-400 text-sm mt-3"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Select your Google Business Profile from suggestions.
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="block text-[#0f172a] text-sm mb-3"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Phone Number *
                    </label>

                    <div className="flex flex-col sm:flex-row gap-3">
                      
                      {/* Country */}
                      <button
                        type="button"
                        className="sm:w-[190px] h-14 rounded-2xl border border-gray-200 px-5 bg-white flex items-center justify-between"
                      >
                        <span
                          className="text-[#0f172a]"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          🇮🇳 India (+91)
                        </span>

                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </button>

                      {/* Number */}
                      <input
                        type="tel"
                        placeholder="81234 56789"
                        className="flex-1 h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-green-500"
                        style={{ fontFamily: "mattermedium" }}
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      className="block text-[#0f172a] text-sm mb-4"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Monthly Marketing Budget
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      {[
                        "More than ₹5000",
                        "₹3000 - ₹5000",
                        "Less than ₹3000",
                      ].map((budget, index) => (
                        <label key={index} className="cursor-pointer">
                          
                          <input
                            type="radio"
                            name="budget"
                            className="hidden peer"
                          />

                          <div className="border border-gray-200 rounded-2xl p-5 peer-checked:border-green-500 peer-checked:bg-green-50 transition-all">
                            
                            <p
                              className="text-[#0f172a] text-sm"
                              style={{ fontFamily: "mattermedium" }}
                            >
                              {budget}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Extra Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div>
                      <label
                        className="block text-[#0f172a] text-sm mb-3"
                        style={{ fontFamily: "mattermedium" }}
                      >
                        Business Category
                      </label>

                      <input
                        type="text"
                        placeholder="Restaurant, Clinic..."
                        className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-green-500"
                        style={{ fontFamily: "mattermedium" }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[#0f172a] text-sm mb-3"
                        style={{ fontFamily: "mattermedium" }}
                      >
                        City / Area
                      </label>

                      <input
                        type="text"
                        placeholder="Delhi, Gurgaon..."
                        className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-green-500"
                        style={{ fontFamily: "mattermedium" }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-[#0f172a] text-sm mb-3"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      What do you want help with?
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Rank tracking, reviews, AI automation..."
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-green-500 resize-none"
                      style={{ fontFamily: "mattermedium" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full h-14 rounded-2xl bg-green-600 hover:bg-green-700 text-white text-lg shadow-lg hover:shadow-2xl transition-all"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    <span className="inline-flex items-center gap-3">
                      Submit Demo Request

                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-all"
                      />
                    </span>
                  </button>

                  {/* Bottom */}
                  <p
                    className="text-center text-gray-400 text-sm leading-7"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    No spam. No complicated onboarding. Just a personalized
                    walkthrough focused on growing your business locally.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;