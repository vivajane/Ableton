import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const GridOne = () => {
  return (
    <div className="py-8 sm:px-28 px-8">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-left ">
          <a href="">
            <img
              className="w-full"
              src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_484_batidakudoro_600x240px.jpg.600x340_q85_crop_upscale.jpg"
              alt="Downloads"
            />
            <h1 className="bg-yellow-300 inline-flex px-2 sm:text-xl text-xs font-semibold py-1 my-4">
              Artists
            </h1>
            <h1 className="sm:text-xl text-xs font-semibold">
              Henrique J. Paris & RS Produções: Mapping Batida’s Heritage
            </h1>
          </a>
        </div>
        <div className="text-left">
          <a href="">
            <img
              src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_482_Alan_Sparhawk_600x340.jpg.600x340_q85_crop_upscale.jpg"
              alt="Alarn"
            />
            <h1 className="bg-yellow-300 inline-flex font-semibold px-2 py-1 my-4">
              Artists
            </h1>
            <h1 className="sm:text-xl text-xs font-semibold">
              Alarn Sparhawk: I made this beat
            </h1>
          </a>
        </div>

        <div className="text-left">
          <a href="">
            <img
              src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_481_End_of_Year_Wrap_600x340.jpg.600x340_q85_crop_upscale.jpg"
              alt="News"
            />
            <h1 className="bg-purple-400 font-semibold inline-flex px-2 py-1 my-4">
              News
            </h1>
            <h1 className=" sm:text-xl text-xs font-semibold">
              Going Deeper into Sound: Eight Standout Features, Videos and
              Tutorials from 2024
            </h1>
          </a>
        </div>
      </div>
      <div className="block sm:hidden ">
        
          <div className="flex items-center pt-4 justify-center">
            <h1 className=" text-[#0000FF] sm:text-xl text-xs font-semibold  ">
              See all Posts
            </h1>
            <AiOutlineRight size={5} />
            
          </div>
        
      </div>
    </div>
  );
};

export default GridOne;
