
import { MdNavigateNext } from "react-icons/md";
const CreateFaster = () => {
  return (
    <div className="bg-[#00ffaf]   text-left">
      <div className="lg:px-24 px-8">
        <h1 className="lg:pt-24 pt-16 text-left sm:text-2xl text-xl lg:3xl font-semibold leading-snug">
          Create faster than you can overthink
        </h1>
        <p className=" lg:py-10 py-8 text-left font-normal text-lg text-black  mt-4">
          Catch the first flashes of inspiration as quickly as they come, and{" "}
          <br /> keep the momentum going with Move’s simple workflow. Mix <br />{" "}
          and match ideas, see what works and what doesn’t. With <br /> Move,
          it’s easier than ever to outpace your inner critic.
        </p>
        <a className="lg:hidden block" href="  https://ableton-production.imgix.net/components/text-beside-media/tour-image-03.jpg?auto=compress%2Cformat&w=320 320w"><img
            className="w-full"
            src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-03.jpg?auto=compress%2Cformat&w=320"
            alt="secc"
          />
        </a>
      </div>
      <div className="lg:flex px-8 lg:px-0 lg:pl-28 gap-28 lg:pt-20 pt-8 justify-between items-center w-full ">
        <div className="lg:w-1/3 lg:p ">
        <h1 className="sm:text-2xl block lg:hidden text-xl lg:3xl font-semibold pb-3">Four flexible tracks</h1>
          <h1 className="sm:text-2xl lg:block hidden text-xl lg:3xl font-semibold pb-3">Four flexible tracks</h1>
          <p className="font-normal py-6">
            Turn any or all of Move’s four tracks into a drum kit, sampler or
            synthesizer, and create rhythms and patterns with its powerful step
            sequencer.
          </p>
        </div>

        <div className="lg:w-2/3">
        <a href="  https://ableton-production.imgix.net/components/text-beside-media/tour-image-03.jpg?auto=compress%2Cformat&w=320 320w"><img
            className="w-full"
            src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-03.jpg?auto=compress%2Cformat&w=320"
            alt="secc"
          />
        </a>
        </div>
        
      </div>
      <div className="lg:flex gap-28 lg:py-24 py-8 px-8  lg:px-24 items-center w-full ">
        <div className="lg:w-1/2">
          <img className="w-full lg:block hidden"
            src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-04.jpg?auto=compress%2Cformat&w=320"
            alt="three"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl  font-semibold pb-3">16 pitches for drums</h1>
          <p className="font-normal py-4">
            Break out of the standard drum layout and turn any sample into a
            bassline or melody by transposing single drum hits to different
            pitches.
          </p>
        </div>
      </div>
      <div className="flex items-center text-center justify-center text-[#0000FF] pt-8 lg:pb-60 pb-20 lg:text-3xl">
       <a href="https://www.ableton.com/move/learn-move/">
       <h1>Learn how to use Move</h1>
        </a> 
        <span className="lg:block hidden"><MdNavigateNext size={30}/></span>
        <span className="lg:hidden block"><MdNavigateNext size={20}/></span>
      </div>
    </div>
  );
};

export default CreateFaster;
