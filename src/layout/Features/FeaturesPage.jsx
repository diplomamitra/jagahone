import {
  Settings2,
  ShieldCheck,
  MapPinned,
  Bot,
  CalendarDays,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

const features = [
  {
    title: "Profile Management System",
    description:
      "Edit business details, update hours, manage services, and apply holiday closures directly from one dashboard.",
    icon: Settings2,
  },
  {
    title: "Competitor Auditing",
    description:
      "Analyze top-ranking local competitors and identify missing optimization opportunities instantly.",
    icon: ShieldCheck,
  },
  {
    title: "Ranking Grid Maps",
    description:
      "Track Google Maps visibility across multiple nearby locations with smart grid ranking insights.",
    icon: MapPinned,
  },
  {
    title: "AI Review Responses",
    description:
      "Generate professional and contextual AI-powered customer review replies in seconds.",
    icon: Bot,
  },
  {
    title: "AI Content Scheduling",
    description:
      "Create and schedule Google Posts automatically using AI-generated content and visuals.",
    icon: CalendarDays,
  },
  {
    title: "Analytics & KPIs",
    description:
      "Monitor profile views, clicks, calls, rankings, and local business performance metrics.",
    icon: BarChart3,
  },
];

const FeaturesPage = () => {
  return (
    <div>
      <Header />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#dcfce7_0%,_#f0fdf4_35%,_#f8faf8_70%)] py-24">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-200/40 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 blur-3xl rounded-full"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:48px_48px]" />
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
                Features & Capabilities
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[#0f172a] text-[40px] sm:text-[68px] leading-[1] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Everything You Need to Grow Locally
            </h2>

            {/* Description */}
            <p
              className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Powerful AI tools built to manage, optimize, and scale your Google
              Business Profile visibility from one smart dashboard.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;

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
                      className="text-[#0f172a] text-[26px] leading-tight"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="text-gray-500 text-[16px] leading-8 mt-5"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="relative mt-8 inline-flex items-center gap-2 text-green-700">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "mattermedium" }}
                    >
                      Explore Feature
                    </span>

                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Showcase */}
          <div className="relative mt-28 bg-white/80 backdrop-blur-xl border border-green-100 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-8 sm:px-14 py-14 sm:py-20">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-5 py-3 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>

                  <span
                    className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Detailed Dashboard
                  </span>
                </div>

                <h2
                  className="text-[#0f172a] text-[38px] sm:text-[58px] leading-[1.02] tracking-[-3px] mt-8"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Complete Local SEO Integration
                </h2>

                <p
                  className="text-gray-600 text-[17px] sm:text-[21px] leading-9 mt-7"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Built specifically for local business ranking workflows —
                  combining AI automation, analytics, review management,
                  competitor tracking, and optimization insights in one
                  platform.
                </p>

                {/* Checklist */}
                <div className="space-y-5 mt-10">
                  {[
                    "Smart AI-powered optimization tools",
                    "Advanced competitor visibility tracking",
                    "Real-time local ranking analytics",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600 stroke-[3]" />
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

                {/* Stat */}
                <div className="mt-10 bg-green-50 border border-green-100 rounded-3xl p-6">
                  <p
                    className="text-green-700 text-sm uppercase tracking-wide"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Did You Know?
                  </p>

                  <h3
                    className="text-[#0f172a] text-2xl sm:text-3xl leading-tight mt-3"
                    style={{ fontFamily: "mattermedium" }}
                  >
                    Businesses with complete profiles are 2.7x more trusted by
                    customers.
                  </h3>
                </div>

                {/* CTA */}
                <button
                  className="group mt-10 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-all"
                  style={{ fontFamily: "mattermedium" }}
                >
                  Explore Utility Tools
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-all"
                  />
                </button>
              </div>

              {/* Right Dashboard Mock */}
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

                  {/* Dashboard Preview */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                      <div className="h-3 w-24 bg-green-200 rounded-full"></div>

                      <div className="h-10 w-16 bg-green-500 rounded-2xl mt-5"></div>

                      <div className="space-y-3 mt-6">
                        <div className="h-2 bg-green-200 rounded-full"></div>
                        <div className="h-2 bg-green-100 rounded-full"></div>
                        <div className="h-2 bg-green-200 rounded-full w-2/3"></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-gray-100">
                      <div className="h-3 w-20 bg-gray-200 rounded-full"></div>

                      <div className="flex items-end gap-2 mt-8">
                        <div className="h-12 w-5 bg-green-300 rounded-xl"></div>
                        <div className="h-20 w-5 bg-green-400 rounded-xl"></div>
                        <div className="h-14 w-5 bg-green-300 rounded-xl"></div>
                        <div className="h-24 w-5 bg-green-500 rounded-xl"></div>
                      </div>
                    </div>

                    <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-5">
                      <div className="flex justify-between items-center">
                        <div className="h-3 w-28 bg-gray-200 rounded-full"></div>

                        <div className="h-8 w-20 bg-green-100 rounded-xl"></div>
                      </div>

                      <div className="mt-6 space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
