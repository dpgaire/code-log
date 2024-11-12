import React from "react";
import { Header, Footer } from "./index";

const MainLayout = ({ resetData, exportDataToFile, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header resetData={resetData} exportDataToFile={exportDataToFile} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
