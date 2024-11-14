import React from "react";
import { Header, Footer } from "./index";

const MainLayout = ({
  resetData,
  exportDataToFile,
  importDataFromFile,
  children,
}) => {
  return (
    <div className="flex flex-col h-screen relative ">
      <Header
        resetData={resetData}
        exportDataToFile={exportDataToFile}
        importDataFromFile={importDataFromFile}
      />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
