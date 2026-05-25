import React from "react";
import Header from "../components/header/Headerx";
import Footer from "../components/footer/Footer";

const sections = [
  {
    title: "1. Introduction",
    content:
      "These AI Terms of Service govern the use of AI-powered features, automation systems, machine learning utilities, and related intelligent services provided through JagahOne.",
  },

  {
    title: "2. AI Service Scope",
    content:
      "JagahOne may provide AI-generated review replies, optimization recommendations, business insights, ranking analysis, content suggestions, automation workflows, summaries, and related intelligent assistance features.",
  },

  {
    title: "3. Informational Nature of AI Outputs",
    content:
      "AI-generated outputs are provided for informational, productivity, and operational assistance purposes only. Users are responsible for reviewing, validating, and approving all generated content before publishing, distributing, or relying on it.",
  },

  {
    title: "4. No Guaranteed Accuracy",
    content:
      "While JagahOne aims to provide useful and contextually relevant AI outputs, we do not guarantee accuracy, completeness, reliability, legality, ranking improvements, or suitability for any specific business purpose.",
  },

  {
    title: "5. User Responsibility",
    content:
      "Users remain fully responsible for all business actions, profile modifications, review replies, generated content, published materials, communications, and operational decisions made using JagahOne AI services.",
  },

  {
    title: "6. Prohibited Usage",
    content:
      "Users may not use JagahOne AI systems to generate misleading, deceptive, harmful, abusive, illegal, spam-related, defamatory, fraudulent, or policy-violating content. Users must comply with all applicable laws and third-party platform policies.",
  },

  {
    title: "7. Google & Third-Party Policies",
    content:
      "Certain AI features may interact with third-party services such as Google Business Profile APIs or communication platforms. Users remain responsible for ensuring that generated content and automation activities comply with all third-party platform rules and policies.",
  },

  {
    title: "8. Human Review Requirement",
    content:
      "AI-generated content may contain inaccuracies, outdated information, or context limitations. Users are encouraged to apply human review and discretion before publishing or implementing AI-generated outputs.",
  },

  {
    title: "9. AI Training & Improvements",
    content:
      "JagahOne may analyze anonymized operational usage patterns, system interactions, and aggregated platform feedback to improve AI performance, platform quality, automation systems, and user experience.",
  },

  {
    title: "10. Availability & Limitations",
    content:
      "AI functionality may change, improve, pause, or become temporarily unavailable due to maintenance, infrastructure limitations, API restrictions, model updates, or external provider interruptions.",
  },

  {
    title: "11. No Professional Advice",
    content:
      "AI-generated outputs do not constitute legal, financial, business, marketing, compliance, or professional advice. Users should seek qualified professionals where appropriate.",
  },

  {
    title: "12. Intellectual Property",
    content:
      "JagahOne retains ownership of platform systems, AI infrastructure, models, workflows, interfaces, and proprietary technology associated with AI-powered services unless otherwise stated.",
  },

  {
    title: "13. Limitation of Liability",
    content:
      "JagahOne shall not be liable for losses, damages, reputational harm, ranking fluctuations, customer disputes, platform penalties, or business impacts resulting from the use of AI-generated outputs or automation systems.",
  },

  {
    title: "14. Modifications to AI Services",
    content:
      "We reserve the right to modify, improve, restrict, suspend, or discontinue AI-powered services, features, processing capabilities, or automation systems at any time without prior notice.",
  },

  {
    title: "15. Acceptance of AI Terms",
    content:
      "By using JagahOne AI-powered features, users acknowledge and agree to these AI Terms of Service and accept responsibility for reviewing and managing all generated outputs appropriately.",
  },
];

const TermsOfServiceAI = () => {
  return (
    <div className="bg-[#f8faf8] overflow-hidden">

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
                AI Platform Usage
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[#0f172a] text-[42px] sm:text-[72px] leading-[1] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              AI Terms of Service
            </h1>

            {/* Desc */}
            <p
              className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8 max-w-3xl mx-auto"
              style={{ fontFamily: "mattermedium" }}
            >
              These terms explain how AI-powered automation, content generation,
              optimization systems, and intelligent utilities operate within the
              JagahOne platform.
            </p>
          </div>

          {/* Cards */}
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

          {/* AI Notice */}
          <div className="mt-14 bg-white/80 backdrop-blur-xl border border-green-100 rounded-[32px] p-8 sm:p-10 shadow-sm">
            <h2
              className="text-[#0f172a] text-[28px] sm:text-[36px]"
              style={{ fontFamily: "mattermedium" }}
            >
              Important AI Notice
            </h2>

            <p
              className="text-gray-600 text-[16px] sm:text-[18px] leading-9 mt-6"
              style={{ fontFamily: "mattermedium" }}
            >
              JagahOne AI systems are designed to assist businesses with
              operational efficiency, local SEO workflows, review handling,
              analytics, and content generation. AI outputs should always be
              reviewed by users before implementation or publication.
            </p>
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

    </div>
  );
};

export default TermsOfServiceAI;
