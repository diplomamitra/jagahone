import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";

const sections = [
  {
    title: "1. Introduction",
    content:
      "JagahOne respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, process, and safeguard information when you access our platform, services, applications, integrations, and related tools.",
  },

  {
    title: "2. Information We Collect",
    content:
      "We may collect business information, contact details, connected account data, Google Business Profile information, usage analytics, device information, IP addresses, communication details, and operational data necessary to provide our services.",
  },

  {
    title: "3. Google Account & Third-Party Integrations",
    content:
      "Certain features may require access to third-party platforms such as Google Business Profile APIs, analytics providers, mapping systems, or communication services. By connecting external accounts, you authorize JagahOne to access and process necessary information required for platform functionality.",
  },

  {
    title: "4. How We Use Information",
    content:
      "Information collected may be used to provide platform functionality, improve local SEO tools, generate AI-powered recommendations, automate workflows, improve customer experience, monitor analytics, enhance security, and optimize service performance.",
  },

  {
    title: "5. AI & Automated Processing",
    content:
      "JagahOne may use artificial intelligence and automated systems to generate review replies, optimization insights, analytics summaries, recommendations, and related outputs. AI-generated content should be reviewed by users before publishing or implementing.",
  },

  {
    title: "6. Cookies & Analytics",
    content:
      "We may use cookies, session technologies, and analytics tools to improve platform performance, understand user behavior, maintain sessions, and enhance user experience. Users may control cookies through browser settings where applicable.",
  },

  {
    title: "7. Data Sharing & Disclosure",
    content:
      "JagahOne does not sell personal information. Information may only be shared with trusted service providers, infrastructure partners, analytics systems, or where legally required to operate and secure platform functionality.",
  },

  {
    title: "8. Data Security",
    content:
      "We implement reasonable technical and organizational safeguards designed to protect information from unauthorized access, misuse, disclosure, or loss. However, no digital system can guarantee absolute security.",
  },

  {
    title: "9. User Responsibilities",
    content:
      "Users remain responsible for protecting account credentials, connected services, and ensuring that all content or actions performed through JagahOne comply with applicable laws and third-party platform policies.",
  },

  {
    title: "10. Data Retention",
    content:
      "We retain information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, improve platform performance, and maintain operational integrity.",
  },

  {
    title: "11. Third-Party Services",
    content:
      "JagahOne may contain integrations or links to external services operated by third parties. We are not responsible for the privacy practices, content, or policies of external platforms.",
  },

  {
    title: "12. Children's Privacy",
    content:
      "JagahOne is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
  },

  {
    title: "13. Your Rights",
    content:
      "Depending on applicable laws, users may have rights to access, update, correct, or request deletion of their information. Users may also revoke connected account permissions directly through third-party providers where applicable.",
  },

  {
    title: "14. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically to reflect platform improvements, legal requirements, or operational changes. Continued use of JagahOne after updates constitutes acceptance of the revised policy.",
  },

  {
    title: "15. Contact Information",
    content:
      "For questions regarding this Privacy Policy or data practices, users may contact JagahOne through official platform communication channels.",
  },
];

const PrivacyPolicy = () => {
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
                Privacy & Data Protection
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[#0f172a] text-[42px] sm:text-[72px] leading-[1] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Privacy Policy
            </h1>

            {/* Desc */}
            <p
              className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8 max-w-3xl mx-auto"
              style={{ fontFamily: "mattermedium" }}
            >
              This Privacy Policy explains how JagahOne collects, uses,
              processes, and protects information related to platform usage
              and connected services.
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

export default PrivacyPolicy;