
const Sec = () => {
  return (
    <div className=" py-24 text-left">
      <div className="px-8 sm:px-28">
        <h1 className="text-5xl font-semibold pb-10">Trust your instincts</h1>
        <p className="text-lg font-normal">
          Move helps you capture your best ideas whenever they appear. <br />
          Pick it up, find new sounds and make fast decisions about what <br />
          feels right in the moment. Follow your intuition wherever it leads
          <br /> you.
        </p>
      </div>
      <div className="flex gap-8 py-24 items-center w-full ">
        <div className="w-2/3">
          <img
            src="https://ableton-production.imgix.net/components/text-beside-media/tour-image-02.jpg?auto=compress%2Cformat&w=768"
            alt="sec"
          />
        </div>
        <div className="w-1/3 pr-28">
          <h1 className="text-2xl  font-semibold pb-6">Standalone and portable</h1>
          <p className="font-normal">
            Moves built-in processor, speaker and microphone make it the ideal
            companion for on-the-go music creation, and its battery gives you up
            to four hours of use on a single charge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sec;
