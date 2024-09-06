import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2024 ? "2024" : "2024 - " + currentYear;
  return (
    <div className="bg-primary font-serif w-full tracking-widest text-white p-2 flex justify-center items-center">
      <span className="text-sm">
        {" "}
        © {yearTxt} codelog - Developed by Durga Gairhe
      </span>
    </div>
  );
};

export default Footer;
