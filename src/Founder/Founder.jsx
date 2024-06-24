import React from "react";

const Founder = () => {
  return (
    <div className="bg-[#212525] pl-[120px] pr-[120px] pt-[150px]">
      <p className="text-4xl font-bold md:w-[480px] m-auto pb-4 text-white">
        Lorem Ipsum Is Simply Dummy
      </p>
      <div className="md:flex w-3/3 gap-2">
        <img src="https://i.ibb.co/hmqVR0T/sec-third-1.png" alt="" />
        <img src="https://i.ibb.co/ScCBQbp/god-1.png" alt="" />
        <div className=" rounded-md bg-[#151717]">
          <img src="https://i.ibb.co/tDmr6dG/Rectangle-second-3.png" alt="" />
          <img src="https://i.ibb.co/FnN5t0r/sec-third-details.png" alt="" />
          {/* <p className="font-bold text-xl text-start text-white ">Jonathan Manuel R.</p>
          <p className="text-white text-start">Founder Bisinuse.io</p> */}
        </div>
      </div>
    </div>
  );
};
export default Founder;
