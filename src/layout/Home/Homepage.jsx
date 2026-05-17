import React from "react";
import Header from "../../components/header/Headerx";
import HeroSection from "./HeroSection";
import TrustBus from "./TrustBus";
import RankTrackingSection from "./RankTrackingSection";
import AuditSection from "./AuditSection";
import AIReplySection from "./AIReplySection";
import GrowthTools from "./GrowthTools";
import Banner from "./Banner";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustBus />
      <RankTrackingSection />
      <AuditSection />
      <AIReplySection />
      <GrowthTools />
      <Banner />
      <Footer />
    </div>
  );
};

export default Homepage;
