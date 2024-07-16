import React from "react";

const Section = ({ title, content, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-6 items-start md:items-stretch mx-6 p-2 `}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt=""
          className="rounded-lg shadow-lg object-cover h-full"
        />
      </div>
      <div
        className={`w-full h-full md:w-1/2 space-y-4 flex flex-col items-start justify-center ${
          reverse ? "md:pl-6" : ""
        }`}
      >
        <h2 className="text-white text-2xl pb-4 text-left pl-2">{title}</h2>
        <div className="space-y-4 flex flex-col gap-4 p-2 justify-between">
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <p key={index} className="text-white">
                {item}
              </p>
            ))
          ) : (
            <p className="text-white">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
