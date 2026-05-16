import React from 'react'

const Banner = () => {
  return (
<section className="py-20 px-5 lg:px-10 bg-[#f8faf8]">
  <div className="max-w-7xl mx-auto">
    
    {/* Main CTA Card */}
    <div className="relative overflow-hidden rounded-[40px] bg-[#0f172a] px-6 sm:px-12 lg:px-16 py-14 sm:py-20">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-green-400/10 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-14">
        
        {/* Left Side */}
        <div className="max-w-2xl text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>

            <span
              className="text-white/80 text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: "mattermedium" }}
            >
              AI Local Business Suite
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-white text-[36px] sm:text-[58px] leading-[1.02] tracking-[-2px] mt-7"
            style={{ fontFamily: "mattermedium" }}
          >
            Turn Your Google Business Profile Into a Growth Machine
          </h2>

          {/* Description */}
          <p
            className="text-white/65 text-[17px] sm:text-[21px] leading-8 mt-7"
            style={{ fontFamily: "mattermedium" }}
          >
            Automate reviews, improve local rankings, publish updates,
            and manage all your business locations from one smart dashboard.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
            
            <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-white/90 text-sm">
              AI Review Replies
            </div>

            <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-white/90 text-sm">
              Rank Tracking
            </div>

            <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-white/90 text-sm">
              Multi Location
            </div>

            <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-white/90 text-sm">
              Smart Automation
            </div>
          </div>
        </div>

        {/* Right Side CTA */}
        <div className="w-full max-w-[380px] bg-white rounded-[30px] p-6 sm:p-8 shadow-2xl">
          
          {/* Top */}
          <div className="text-center">
            <h3
              className="text-[#0f172a] text-2xl sm:text-3xl"
              style={{ fontFamily: "mattermedium" }}
            >
              Start Growing Today
            </h3>

            <p
              className="text-gray-500 text-sm sm:text-base mt-3 leading-7"
              style={{ fontFamily: "mattermedium" }}
            >
              Built for local businesses, agencies and multi-location brands.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg transition-all shadow-lg"
              style={{ fontFamily: "mattermedium" }}
            >
              Start Free Trial
            </button>

            <button
              className="w-full border border-gray-200 hover:border-green-300 hover:bg-green-50 text-[#0f172a] py-4 rounded-2xl text-lg transition-all"
              style={{ fontFamily: "mattermedium" }}
            >
              Book Free Demo
            </button>
          </div>

          {/* Bottom Note */}
          <p
            className="text-center text-gray-400 text-xs mt-6"
            style={{ fontFamily: "mattermedium" }}
          >
            No setup hassle • Simple onboarding • Easy to manage
          </p>
        </div>
      </div>
    </div>
  </div>
</section>  )
}

export default Banner