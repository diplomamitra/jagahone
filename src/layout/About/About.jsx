import React from "react";
import {
  Sparkles,
  MapPinned,
  Bot,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";
import Header from "../../components/header/Headerx";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div>
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
          {/* Top */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-5 py-3 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>

              <span
                className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                style={{ fontFamily: "mattermedium" }}
              >
                About JagahOne
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[#0f172a] text-[42px] sm:text-[72px] leading-[1] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Built to Simplify Local Business Growth
            </h1>

            {/* Description */}
            <p
              className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              JagahOne was created to help local businesses manage, optimize,
              and grow their Google Business Profile without depending on
              multiple complicated tools and services.
            </p>
          </div>

          {/* Story Section */}
          <div className="relative mt-20 bg-white/80 backdrop-blur-xl border border-green-100 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-8 sm:px-14 py-14 sm:py-20">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-5 py-3 rounded-full">
                  <Sparkles className="w-4 h-4 text-green-600" />

                  <span
                    className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Why JagahOne Exists
                  </span>
                </div>

                <h2
                  className="text-[#0f172a] text-[36px] sm:text-[56px] leading-[1.02] tracking-[-3px] mt-8"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Local businesses deserve better tools.
                </h2>

                <p
                  className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-7"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Most local businesses struggle with rankings, reviews,
                  customer engagement, and visibility because existing SEO
                  platforms are expensive, complicated, and designed for
                  enterprise teams instead of real business owners.
                </p>

                <p
                  className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-6"
                  style={{ fontFamily: "mattermedium" }}
                >
                  JagahOne brings all essential local growth utilities into one
                  clean dashboard — making local SEO, review management, AI
                  automation, and profile optimization simple and accessible.
                </p>
              </div>

              {/* Right */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute top-10 w-[420px] h-[420px] bg-green-200 rounded-full blur-3xl opacity-40"></div>

                {/* Mock Card */}
                <div className="relative bg-white border border-gray-200 rounded-[36px] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.10)]">
                  {/* Top Dots */}
                  <div className="flex items-center gap-2 mb-6 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                      <MapPinned className="w-8 h-8 text-green-600" />

                      <h3
                        className="text-[#0f172a] text-lg mt-5"
                        style={{ fontFamily: "mattermedium" }}
                      >
                        Local Rankings
                      </h3>

                      <div className="space-y-2 mt-4">
                        <div className="h-2 bg-green-200 rounded-full"></div>
                        <div className="h-2 bg-green-100 rounded-full w-2/3"></div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                      <Bot className="w-8 h-8 text-green-600" />

                      <h3
                        className="text-[#0f172a] text-lg mt-5"
                        style={{ fontFamily: "mattermedium" }}
                      >
                        AI Automation
                      </h3>

                      <div className="space-y-2 mt-4">
                        <div className="h-2 bg-green-200 rounded-full"></div>
                        <div className="h-2 bg-green-100 rounded-full w-2/3"></div>
                      </div>
                    </div>

                    <div className="col-span-2 bg-white border border-gray-100 rounded-2xl p-5">
                      <div className="flex items-center justify-between">
                        <h3
                          className="text-[#0f172a] text-lg"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          Growth Analytics
                        </h3>

                        <BarChart3 className="w-6 h-6 text-green-600" />
                      </div>

                      {/* Fake Graph */}
                      <div className="flex items-end gap-3 mt-8 h-32">
                        <div className="w-8 bg-green-200 rounded-t-xl h-12"></div>
                        <div className="w-8 bg-green-300 rounded-t-xl h-20"></div>
                        <div className="w-8 bg-green-400 rounded-t-xl h-16"></div>
                        <div className="w-8 bg-green-500 rounded-t-xl h-28"></div>
                        <div className="w-8 bg-green-300 rounded-t-xl h-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-20">
            {[
              {
                title: "Simple Local SEO",
                desc: "Track rankings, optimize profiles, and improve visibility without technical complexity.",
              },
              {
                title: "AI-Powered Automation",
                desc: "Save hours with AI review replies, automated posts, and smart business insights.",
              },
              {
                title: "Built for Real Businesses",
                desc: "Designed specifically for local stores, clinics, restaurants, agencies, and service brands.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-green-100 rounded-[32px] p-8 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600 stroke-[3]" />
                </div>

                <h3
                  className="text-[#0f172a] text-[26px] leading-tight mt-7"
                  style={{ fontFamily: "mattermedium" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-500 text-[16px] leading-8 mt-5"
                  style={{ fontFamily: "mattermedium" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Founder Section */}
          <div className="relative mt-24 bg-white/80 backdrop-blur-xl border border-green-100 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-8 sm:px-14 py-14 sm:py-20">
              {/* Left Side */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-5 py-3 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>

                  <span
                    className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Founder Story
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="text-[#0f172a] text-[36px] sm:text-[58px] leading-[1.02] tracking-[-3px] mt-8"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Built by Harjeet to Simplify Local Business Growth
                </h2>

                {/* Description */}
                <p
                  className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-7"
                  style={{ fontFamily: "mattermedium" }}
                >
                  JagahOne was created by Harjeet — a developer passionate about
                  building practical tools that solve real-world business
                  problems.
                </p>

                <p
                  className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-6"
                  style={{ fontFamily: "mattermedium" }}
                >
                  While working around local businesses and Google Business
                  Profile optimization, he noticed that most business owners
                  struggle with expensive SEO software, complex dashboards, and
                  disconnected tools.
                </p>

                <p
                  className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-6"
                  style={{ fontFamily: "mattermedium" }}
                >
                  JagahOne combines AI automation, local SEO utilities, review
                  management, ranking analytics, and growth tools into one
                  clean, accessible ecosystem designed specifically for local
                  businesses.
                </p>

                {/* Mini Points */}
                <div className="space-y-5 mt-10">
                  {[
                    "Focused on practical AI automation",
                    "Built for local businesses & agencies",
                    "Designed with simplicity and accessibility",
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
              </div>

              {/* Right Side */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute top-10 w-[420px] h-[420px] bg-green-200 rounded-full blur-3xl opacity-40"></div>

                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-[36px] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.10)]">
                  {/* Top Dots */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Founder Card */}
                  <div className="bg-green-50 border border-green-100 rounded-[28px] p-8">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white text-3xl shadow-lg">
                      H
                    </div>

                    {/* Name */}
                    <h3
                      className="text-[#0f172a] text-[32px] mt-7"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Harjeet
                    </h3>

                    {/* Role */}
                    <p
                      className="text-green-700 text-lg mt-2"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Founder • Developer • Builder
                    </p>

                    {/* Bio */}
                    <p
                      className="text-gray-600 text-[16px] leading-8 mt-6"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Passionate about building AI-powered tools and practical
                      products that help local businesses grow smarter online.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="bg-white rounded-2xl p-5 border border-green-100">
                        <h4
                          className="text-[#0f172a] text-2xl"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          AI
                        </h4>

                        <p
                          className="text-gray-500 text-sm mt-2"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          Automation Focus
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl p-5 border border-green-100">
                        <h4
                          className="text-[#0f172a] text-2xl"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          Local
                        </h4>

                        <p
                          className="text-gray-500 text-sm mt-2"
                          style={{ fontFamily: "mattermedium" }}
                        >
                          Business Growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <h2
              className="text-[#0f172a] text-[34px] sm:text-[56px] leading-[1.05] tracking-[-3px]"
              style={{ fontFamily: "mattermedium" }}
            >
              Helping Local Businesses Grow Smarter
            </h2>

            <p
              className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-6 max-w-3xl mx-auto"
              style={{ fontFamily: "mattermedium" }}
            >
              JagahOne is focused on making local growth tools more accessible,
              automated, and practical for modern businesses.
            </p>

            <button
              className="group mt-10 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-all"
              style={{ fontFamily: "mattermedium" }}
            >
              Explore Platform
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
