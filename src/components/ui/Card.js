// Card.js
import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <div className="relative bg-red-500 pb-5/6">
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 w-full h-full object-cover"
        />
      </div> */}
      <div className="h-96 bg-red-500">
        <img
          src={imageUrl}
          alt={title}
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
