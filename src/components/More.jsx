import React from "react";

const More = () => {
  return (
    <div className="bg-zinc-200 py-16 sm:px-28  px-8 sm:my-24 ">
      <div className="flex text-center justify-center items-baseline">
      <h1 className="pr-6 sm:text-2xl text-sm">
        <strong>More:</strong>
      </h1>
      <div className="lg:text-xl flex-wrap md:text-sm text-xs font-semibold flex gap-4 text-[#0000FF]">
        <a href="#">All posts</a>
        <a href="#">Artists</a>
        <a href="#">News</a>
        <a href="#">Downloads</a>
        <a href="#">Tutorials</a>
        <a href="#">Videos</a>
        <a href="#">Loop</a>
        <a href="#">One Thing</a>
      </div>
      </div>
    </div>
  );
};

export default More;
