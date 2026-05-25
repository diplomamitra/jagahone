import { ArrowRight, Check } from "lucide-react";
import Dashboard from "../../assets/images/dashboard22.png";
import { Link, NavLink } from "react-router-dom";

const RankTrackingSection = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-linear-to-br from-[#f8faf8] ">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 blur-3xl rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-green-100 px-5 py-3 rounded-full shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>

              <span
                className="text-green-700 uppercase tracking-[0.18em] text-xs sm:text-sm"
                style={{ fontFamily: "mattermedium" }}
              >
                Rank Tracking
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[#0f172a] text-[40px] sm:text-[64px] leading-[0.98] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Know Exactly Where Your Business Ranks Locally
            </h2>

            {/* Description */}
            <p
              className="text-gray-600 text-[17px] sm:text-[22px] leading-9 mt-8 max-w-xl"
              style={{ fontFamily: "mattermedium" }}
            >
              Track your Google Business visibility across different locations,
              monitor local ranking performance, and discover growth
              opportunities with smart AI insights.
            </p>

            {/* Features */}
            <div className="space-y-5 mt-10">
              {/* Feature */}
              <div className="flex items-start gap-4">
                <div className="min-w-[38px] h-[38px] rounded-xl bg-green-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                </div>

                <div>
                  <h4
                    className="text-[#0f172a] text-lg"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Accurate Local Grid Tracking
                  </h4>

                  <p
                    className="text-gray-500 text-sm sm:text-base mt-1"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Monitor rankings across multiple nearby locations.
                  </p>
                </div>
              </div>

              {/* Feature */}
              <div className="flex items-start gap-4">
                <div className="min-w-[38px] h-[38px] rounded-xl bg-green-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                </div>

                <div>
                  <h4
                    className="text-[#0f172a] text-lg"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Smart Visibility Insights
                  </h4>

                  <p
                    className="text-gray-500 text-sm sm:text-base mt-1"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Understand where your business performs best.
                  </p>
                </div>
              </div>

              {/* Feature */}
              <div className="flex items-start gap-4">
                <div className="min-w-[38px] h-[38px] rounded-xl bg-green-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                </div>

                <div>
                  <h4
                    className="text-[#0f172a] text-lg"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Real-Time Analytics Dashboard
                  </h4>

                  <p
                    className="text-gray-500 text-sm sm:text-base mt-1"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Access ranking trends and performance metrics instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <NavLink
              to="/demo"
              className="mt-10 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-all text-lg"
              style={{ fontFamily: "mattermedium" }}
            >
              Explore Rank Tracking
              <ArrowRight size={20} />
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center lg:justify-end border border-gray-200 rounded-4xl">
            {/* Glow */}
            <div className="absolute top-10 w-[450px] h-[450px] bg-green-200 rounded-full blur-3xl opacity-40"></div>

            {/* Floating Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-[36px] p-4 sm:p-6 ">
              {/* Top Mini Bar */}
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Image */}
              <img
                src={Dashboard}
                alt="Dashboard Preview"
                className="w-full max-w-[650px] rounded-[24px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankTrackingSection;
