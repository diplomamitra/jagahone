import React from "react";
import {
  RiTimeLine,
  RiShieldCheckLine,
  RiMapPin2Fill,
  RiMailLine,
} from "react-icons/ri";

export default function ApprovalPendingPage() {
  return (
    <div className="min-h-screen bg-[#f1fcf5] flex items-center justify-center px-5 py-10 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-green-100 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute bottom-[-140px] right-[-100px] w-[450px] h-[450px] bg-emerald-200 rounded-full blur-3xl opacity-50"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white border border-[#e7f5ec] shadow-[0_20px_80px_rgba(16,24,40,0.08)] rounded-[32px] overflow-hidden">

        {/* Top Section */}
        <div className="bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#064e3b] px-8 py-10 text-white relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-green-400/10 rounded-full blur-3xl"></div>

          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <RiMapPin2Fill className="text-3xl text-green-400" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-wide">
                JagahOne
              </h1>

              <p className="text-sm text-gray-300">
                Google Business Growth Platform
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/15 border border-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <RiTimeLine className="text-lg" />
            API Approval Pending
          </div>

          <h2 className="text-4xl font-bold leading-tight max-w-2xl">
            This project is currently under Google API approval review
          </h2>

          <p className="text-gray-300 mt-5 text-[15px] leading-relaxed max-w-2xl">
            Some features may not function properly until official approval and
            verification are completed by Google.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">

          {/* Info Box */}
          <div className="bg-[#f8fffa] border border-green-100 rounded-3xl p-6">

            <div className="flex items-start gap-4">
              <div className="min-w-[56px] h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                <RiShieldCheckLine className="text-3xl text-green-700" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Approval In Progress
                </h3>

                <p className="text-gray-600 leading-relaxed text-[15px]">
                  JagahOne is currently waiting for official Google Business API
                  approval and verification. Due to this, some automation,
                  management, and synchronization features may be limited or
                  temporarily unavailable.
                </p>

                <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
                  Once approval is completed, all services and integrations will
                  start functioning normally across the platform.
                </p>
              </div>
            </div>

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-5 mt-8">

            <div className="border border-gray-100 rounded-3xl p-5 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                <RiShieldCheckLine className="text-2xl text-green-700" />
              </div>

              <h4 className="font-bold text-gray-900 mb-2">
                Secure Platform
              </h4>

              <p className="text-sm text-gray-500 leading-relaxed">
                All systems are being configured according to Google compliance
                and verification standards.
              </p>
            </div>

            <div className="border border-gray-100 rounded-3xl p-5 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                <RiTimeLine className="text-2xl text-green-700" />
              </div>

              <h4 className="font-bold text-gray-900 mb-2">
                Approval Review
              </h4>

              <p className="text-sm text-gray-500 leading-relaxed">
                Google is currently reviewing API access permissions and project
                verification requests.
              </p>
            </div>

            <div className="border border-gray-100 rounded-3xl p-5 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                <RiMailLine className="text-2xl text-green-700" />
              </div>

              <h4 className="font-bold text-gray-900 mb-2">
                Support Available
              </h4>

              <p className="text-sm text-gray-500 leading-relaxed">
                For business inquiries or verification updates, please contact
                the JagahOne support team.
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            <p className="text-sm text-gray-500">
              © 2026 JagahOne. All rights reserved.
            </p>

            <button className="h-12 px-6 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
              Contact Support
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}