import React from "react";
import Header from "../components/header/Headerx";
import Footer from "../components/footer/Footer";


const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using JagahOne, you agree to comply with and be legally bound by these Terms & Conditions. If you do not agree with any part of these terms, you must discontinue use of the platform immediately.",
  },

  {
    title: "2. Platform Overview",
    content:
      "JagahOne is a SaaS platform designed to help businesses manage and optimize their Google Business Profile presence using automation, analytics, AI-powered utilities, review management tools, local SEO insights, and related growth utilities.",
  },

  {
    title: "3. Google & Third-Party Services",
    content:
      "JagahOne is an independent platform and is not affiliated with, endorsed by, or officially connected to Google LLC. Certain features may require integration with third-party services including Google Business Profile APIs, WhatsApp, analytics providers, or mapping services. Users remain responsible for complying with all third-party policies and requirements.",
  },

  {
    title: "4. User Responsibilities",
    content:
      "Users are responsible for ensuring that all information, content, images, reviews, replies, and profile details submitted through JagahOne comply with applicable laws and platform policies. Users may not use the platform for fraudulent, misleading, abusive, or unauthorized activities.",
  },

  {
    title: "5. AI-Generated Content",
    content:
      "JagahOne may provide AI-generated review replies, recommendations, content suggestions, or optimization insights. AI-generated outputs are provided for informational and productivity purposes only and should be reviewed by the user before publishing or acting upon them.",
  },

  {
    title: "6. Rankings & Performance Disclaimer",
    content:
      "JagahOne does not guarantee search rankings, business growth, customer acquisition, revenue increases, or Google Maps visibility improvements. Local SEO performance depends on numerous external factors outside our control.",
  },

  {
    title: "7. Account Access & Security",
    content:
      "Users are responsible for maintaining the confidentiality of their accounts, connected profiles, and authentication credentials. JagahOne will not be responsible for unauthorized access caused by user negligence or third-party compromise.",
  },

  {
    title: "8. Subscription & Payments",
    content:
      "Certain features of JagahOne may require paid subscriptions or premium access. Pricing, billing cycles, and feature limitations may change over time. Continued use of paid services constitutes acceptance of updated pricing where legally permitted.",
  },

  {
    title: "9. Refund Policy",
    content:
      "Refund eligibility, where applicable, will be governed by our Refund Policy. Certain digital services, onboarding work, custom setup, or AI processing usage may be non-refundable after activation.",
  },

  {
    title: "10. Suspension & Termination",
    content:
      "JagahOne reserves the right to suspend or terminate accounts that violate these terms, misuse platform functionality, abuse APIs, engage in harmful activity, or violate applicable third-party platform rules.",
  },

  {
    title: "11. Intellectual Property",
    content:
      "All platform branding, software, UI elements, content structures, visual assets, and proprietary systems used within JagahOne remain the intellectual property of JagahOne and its creators unless otherwise stated.",
  },

  {
    title: "12. Limitation of Liability",
    content:
      "JagahOne shall not be liable for indirect, incidental, consequential, or business-related damages resulting from platform usage, service interruptions, third-party integrations, ranking fluctuations, or data inaccuracies.",
  },

  {
    title: "13. Modifications to Services",
    content:
      "We reserve the right to modify, improve, suspend, or discontinue features, integrations, pricing structures, or platform functionality at any time without prior notice.",
  },

  {
    title: "14. Privacy & Data Usage",
    content:
      "Use of JagahOne is also governed by our Privacy Policy. By using the platform, you consent to the collection and processing of necessary operational data required to provide services and improve platform functionality.",
  },

  {
    title: "15. Contact Information",
    content:
      "For questions regarding these Terms & Conditions, users may contact JagahOne support through the official website or platform communication channels.",
  },
];

const TermsConditions = () => {
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

        <div className="relative max-w-5xl mx-auto px-5 lg:px-10">
          
          {/* Top */}
          <div className="text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-5 py-3 rounded-full shadow-sm">
              
              <div className="w-2 h-2 rounded-full bg-green-600"></div>

              <span
                className="text-green-700 uppercase tracking-[0.15em] text-xs sm:text-sm"
                style={{ fontFamily: "mattermedium" }}
              >
                Legal Information
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[#0f172a] text-[42px] sm:text-[72px] leading-[1] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Terms & Conditions
            </h1>

            {/* Desc */}
            <p
              className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8 max-w-3xl mx-auto"
              style={{ fontFamily: "mattermedium" }}
            >
              These Terms & Conditions govern the use of JagahOne and all
              related services, tools, integrations, and platform features.
            </p>
          </div>

          {/* Terms Cards */}
          <div className="space-y-7 mt-20">
            
            {sections.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-green-100 rounded-[32px] p-8 sm:p-10 shadow-sm"
              >
                
                <h2
                  className="text-[#0f172a] text-[26px] sm:text-[32px] leading-tight"
                  style={{ fontFamily: "mattermedium" }}
                >
                  {item.title}
                </h2>

                <p
                  className="text-gray-600 text-[16px] sm:text-[18px] leading-9 mt-6"
                  style={{ fontFamily: "mattermedium" }}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="text-center mt-16">
            
            <p
              className="text-gray-400 text-sm leading-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;