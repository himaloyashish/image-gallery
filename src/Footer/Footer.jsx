import React from "react";

const Footer = () => {
  return (
    <div className=" grid grid-cols-4 gap-3 justify-between items-start  bg-[#171a1a] pl-[120px] 
    pr-[120px] pt-[150px] pb-8 ">
      <div>
        <p className="text-white">
          Lepeakers is a company in the field of technology, we were founded in
          1998
        </p>
      </div>
      <div className="text-start">
        <p className="font-bold pb-2 text-white">Navigation</p>
        <p className="text-white ">Get Ticket</p>
        <p className="text-white ">Schedule</p>
        <p className="text-white ">Speakers</p>
      </div>
      <div className="text-start">
        <p className="font-bold pb-2 text-white">Learn more</p>
        <p className="text-white ">Terms Of Use</p>
        <p className="text-white ">Privacy & Policy</p>
        <p className="text-white ">FAQ</p>
      </div>
      <div className="text-start">
        <p className="text-white ">Newsletter</p>
        <p className="text-white ">Don't miss the latest information on this platform</p>
        <div className="flex pt-2">
          <input type="email" name="" id="" />
          <img className="bg-[#ED2127]  " src="https://i.ibb.co/L6QM17t/send.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
