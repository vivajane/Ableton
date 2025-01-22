import React from "react";

const MoveProp = ({ title, items }) => {
  return (
    <div className="sm:px-28 px-8">
      <h1 className="lg:text-4xl sm:text-3xl md:py-16 py-10 text-left font-semibold pb-12  ">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14">
        {items.map((item, index) => (
          <div key={index}>
            <a href={item.link}>
              <img src={item.image} alt={item.alt} />
              <h1 className=" font-semibold py-2 text-xs sm:text-sm text-left">{item.subtitle}</h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoveProp;
