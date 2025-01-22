import React from "react";
import Button from "../Button";

const OverviewMove = () => {
  return (
    <section className="bg-black h-full text-white">
      <h1 className="text-7xl font-semibold pt-8 md:pt-24 pb-8">Move</h1>
      <p>A portable tool for intuitive music making</p>
      <h3>USD 449</h3>
      <div className="pt-4 pb-20">
      <Button className="bg-[#0000FF] py-2 px-9 text-white mt-4 ">Buy Now</Button>
      </div>
      <div className="px-24"><a href="https://youtu.be/qg0BzsVCMGs">
      <img src="https://ableton-production.imgix.net/components/text-beside-media/web-tour-hero-a.jpg?auto=compress%2Cformat&w=320 320w" className=" w-full"  alt="ab" /></a>
      
        
      </div>
    </section>
  );
};

export default OverviewMove;
