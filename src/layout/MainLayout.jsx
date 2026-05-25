import React from "react";
import { Outlet } from "react-router-dom";

import Headerx from "../components/header/Headerx";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Headerx />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;