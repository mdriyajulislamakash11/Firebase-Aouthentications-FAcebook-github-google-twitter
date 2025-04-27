import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayoutes = () => {
  return (
    <div>
      <Header />

      <div className="min-h-[calc(100vh_-_400px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayoutes;
