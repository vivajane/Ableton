import React from "react";

const Ready = () => {
  return (
    <div className=" text-left text-black py-16  lg:py-24">
      <div className="px-8 lg:px-28">
      <h1 className="sm:text-2xl text-2xl lg:text-4xl font-semibold pb-5 lg:pb-20 ">
        Ready to play
      </h1>
      <p className="text-lg font-normal lg:w-1/2">
        Move high-quality instruments, effects and samples are easy to access
        and tweak to your liking. When you start a new set, Move will load up
        four random instrument presets. See if they inspire you, or switch them
        out for new sounds.
      </p>
      <a href="">
        <img className="w-full py-20"
          src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-05a.jpg?auto=compress%2Cformat&w=320"
          alt="a"
        />
      </a>
      </div>
      <div className="lg:flex gap-20 pl-8 lg:pl-28 lg:py-24 items-center w-full ">
        <div className="lg:w-1/2 ">
          {" "}
          <h1 className="sm:text-2xl text-xl lg:3xl font-semibold pb-3">Free sampling</h1>
          <p className="font-normal py-6">
            Found a sound you like? Plug in your phone or use the built-in mic
            to record it, then turn it into a new beat or melody
          </p>
        </div>
        <div className="w-full"><a href="">
          <img className="w-full"
            src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-06.jpg?auto=compress%2Cformat&w=320"
            alt="b"
          />
        </a></div>
      </div>
    </div>
  );
};

export default Ready;
