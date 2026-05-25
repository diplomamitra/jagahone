import React from "react";
import Header from "../components/header/Headerx";
import Footer from "../components/footer/Footer";

const sections = [
  {
    title: "1. Overview",
    content:
      "This Refund Policy outlines the terms governing payments, subscriptions, cancellations, and refund eligibility for JagahOne services, tools, subscriptions, and related platform offerings.",
  },

  {
    title: "2. Digital Service Nature",
    content:
      "JagahOne primarily provides digital software services, AI-powered tools, automation systems, analytics platforms, onboarding assistance, and cloud-based utilities. Due to the nature of digital services, certain purchases may become non-refundable once access or usage has started.",
  },

  {
    title: "3. Subscription Payments",
    content:
      "Paid subscriptions may provide access to premium features, integrations, AI utilities, analytics dashboards, local SEO tools, or related platform functionality. Subscription charges are billed according to the selected billing cycle.",
  },

  {
    title: "4. Refund Eligibility",
    content:
      "Refund requests may only be considered under limited circumstances including duplicate billing, technical failure preventing core platform access, or accidental payment issues verified by JagahOne. Refund approvals remain solely at our discretion.",
  },

  {
    title: "5. Non-Refundable Services",
    content:
      "The following services are generally non-refundable after activation, onboarding, setup, usage, or delivery: AI processing usage, onboarding assistance, custom configurations, consulting services, account setup work, API usage consumption, and promotional campaign execution.",
  },

  {
    title: "6. Trial & Demo Access",
    content:
      "Where free demos, trial access, or limited free features are provided, users are encouraged to evaluate platform suitability before purchasing paid plans or premium subscriptions.",
  },

  {
    title: "7. Cancellation Policy",
    content:
      "Users may cancel subscriptions at any time before the next billing cycle. Cancellation will stop future recurring charges but does not automatically guarantee refunds for previous payments already processed.",
  },

  {
    title: "8. Failed or Interrupted Services",
    content:
      "Temporary interruptions caused by maintenance, API limitations, third-party outages, internet connectivity issues, or external platform restrictions do not automatically qualify for refunds.",
  },

  {
    title: "9. Abuse & Policy Violations",
    content:
      "Accounts suspended or terminated for violating platform policies, abusing integrations, engaging in fraudulent activity, or violating third-party rules are not eligible for refunds.",
  },

  {
    title: "10. Processing Time",
    content:
      "Approved refunds, where applicable, may take several business days to process depending on payment providers, banks, or financial institutions involved in the transaction.",
  },

  {
    title: "11. Third-Party Charges",
    content:
      "JagahOne is not responsible for additional charges, taxes, bank fees, payment gateway fees, currency conversion fees, or third-party transaction costs that may arise during payment processing.",
  },

  {
    title: "12. Modifications to Pricing",
    content:
      "We reserve the right to modify pricing structures, subscription plans, feature availability, or billing models at any time. Updated pricing will apply prospectively unless otherwise stated.",
  },

  {
    title: "13. Contact for Billing Issues",
    content:
      "Users experiencing payment problems, accidental charges, or billing-related concerns may contact JagahOne through official support channels for assistance and review.",
  },
];

const RefundPolicy = () => {
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
                Billing & Refund Information
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[#0f172a] text-[42px] sm:text-[72px] leading-[1] tracking-[-3px] mt-8"
              style={{ fontFamily: "mattermedium" }}
            >
              Refund Policy
            </h1>

            {/* Desc */}
            <p
              className="text-gray-600 text-[18px] sm:text-[22px] leading-9 mt-8 max-w-3xl mx-auto"
              style={{ fontFamily: "mattermedium" }}
            >
              This Refund Policy explains payment handling, subscription
              cancellations, refund eligibility, and billing practices for
              JagahOne services and platform offerings.
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

          {/* Important Notice */}
          <div className="mt-14 bg-white/80 backdrop-blur-xl border border-green-100 rounded-[32px] p-8 sm:p-10 shadow-sm">
            
            <h2
              className="text-[#0f172a] text-[28px] sm:text-[36px]"
              style={{ fontFamily: "mattermedium" }}
            >
              Important Notice
            </h2>

            <p
              className="text-gray-600 text-[16px] sm:text-[18px] leading-9 mt-6"
              style={{ fontFamily: "mattermedium" }}
            >
              JagahOne focuses on providing software access, AI-powered
              automation utilities, analytics tools, and digital platform
              services. Since service value may begin immediately after
              activation or usage, refunds are evaluated carefully on a
              case-by-case basis.
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

export default RefundPolicy;