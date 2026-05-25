import { Check } from "lucide-react";
import Dashboard from "../../assets/images/Dashboard14.png";
import { Link, NavLink } from "react-router-dom";


const AuditSection = () => {
  return (
    <section className="relative py-24 overflow-hidden ">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 blur-3xl rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Side */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-5 py-3 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>

              <span
                className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                style={{ fontFamily: "mattermedium" }}
              >
                Audits & Reports
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[#0f172a] text-[38px] sm:text-[62px] leading-[1.02] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              AI-Powered Business Profile Audits
            </h2>

            {/* Description */}
            <p
              className="text-gray-600 text-[17px] sm:text-[22px] leading-9 mt-7"
              style={{ fontFamily: "mattermedium" }}
            >
              Analyze your Google Business Profile, discover optimization
              opportunities, and get actionable insights to improve local
              visibility and customer engagement.
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
                    Profile Optimization Insights
                  </h4>

                  <p
                    className="text-gray-500 text-sm sm:text-base mt-1"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Identify missing information and improvement areas
                    instantly.
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
                    Competitor Performance Tracking
                  </h4>

                  <p
                    className="text-gray-500 text-sm sm:text-base mt-1"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Compare your visibility against nearby competitors.
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
                    Smart Local Growth Reports
                  </h4>

                  <p
                    className="text-gray-500 text-sm sm:text-base mt-1"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Access detailed analytics and actionable business insights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center lg:justify-end border border-gray-200 rounded-4xl">
            {/* Glow */}
            <div className="absolute top-10 w-[420px] h-[420px] bg-green-200 rounded-full blur-3xl opacity-40"></div>

            {/* Dashboard Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-[36px] p-4 sm:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.10)]">
              {/* Top Mini Bar */}
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Dashboard Image */}
              <img
                src={Dashboard}
                alt="Audit Dashboard"
                className="w-full max-w-[650px] rounded-[24px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
