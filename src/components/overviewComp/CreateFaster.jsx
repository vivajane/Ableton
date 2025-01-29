

const CreateFaster = () => {
  return (
    <div className="bg-[#00ffaf]  text-left">
      <div className="sm:px-28 px-8">
        <h1 className="md:pt-28 pt-10 text-[20px] text-left sm:text-5xl  font-semibold leading-snug">
          Create faster than you can overthink
        </h1>
        <p className=" py-16 text-left font-normal text-lg text-black  mt-4">
          Catch the first flashes of inspiration as quickly as they come, and{" "}
          <br /> keep the momentum going with Move’s simple workflow. Mix <br />{" "}
          and match ideas, see what works and what doesn’t. With <br /> Move,
          it’s easier than ever to outpace your inner critic.
        </p>
      </div>
      <div className="flex gap-8 pt-24 items-center w-full ">
        <div className="w-1/3 pl-28 ">
          <h1 className="text-2xl  font-semibold pb-3">Four flexible tracks</h1>
          <p className="font-normal py-6">
            Turn any or all of Move’s four tracks into a drum kit, sampler or
            synthesizer, and create rhythms and patterns with its powerful step
            sequencer.
          </p>
        </div>

        <div className="w-2/3">
          <img
            className="w-full"
            src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-03.jpg?auto=compress%2Cformat&w=320"
            alt="secc"
          />
        </div>
      </div>
      <div className="flex gap-28 py-24 px-8 sm:px-28 items-center w-full ">
        <div className="w-1/2">
          <img className="w-full"
            src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-04.jpg?auto=compress%2Cformat&w=320"
            alt="three"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl  font-semibold pb-3">16 pitches for drums</h1>
          <p className="font-normal py-4">
            Break out of the standard drum layout and turn any sample into a
            bassline or melody by transposing single drum hits to different
            pitches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateFaster;
