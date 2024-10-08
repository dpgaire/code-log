import React from "react";
import { Header, Footer } from "./index";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
