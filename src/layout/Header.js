import React from "react";
import { Button } from "../components/ui";

const Header = ({ resetData }) => {
  return (
    <div className="bg-primary font-sans w-full tracking-widest text-white p-2 flex justify-center items-center">
      <span className="lg:text-4xl md:text-2xl flex-1 text-center">
        Codelog
      </span>
      <Button onClick={() => resetData()} text="Reset All" variant="danger" />
    </div>
  );
};

export default Header;
