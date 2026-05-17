import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./layout/Home/Homepage";
import FeaturesPage from "./layout/Features/FeaturesPage";
import Tools from "./layout/Tools/Tools";
import About from "./layout/About/About";
import DemoPage from "./layout/DemoPage/DemoPage";
import TermsConditions from "./layout/TermsConditions";
import PrivacyPolicy from "./layout/PrivacyPolicy";
import RefundPolicy from "./layout/RefundPolicy";
import TermsOfServiceAI from "./layout/TermsOfServiceAI";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Homepage />} />

        {/* Other Pages */}
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<DemoPage />} />

        {/* Legal Pages */}
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-of-service-ai" element={<TermsOfServiceAI />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;