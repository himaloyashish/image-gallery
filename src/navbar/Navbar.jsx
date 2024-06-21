import React from "react";
import "./Navbar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pl-[120px] bg-black pt-5  pr-[120px]  ">
      <div>
        <li>
          <img src="src/assets/massart 1.png" alt="MassArt" />
        </li>
      </div>
      <div className="flex gap-3">
        <a href="GetTicket" className="text-white">
          GetTicket
        </a>
        <a href="Schedules" className="text-white">
          Schedules
        </a>
        <a href=" Speakers" className="text-white">
          Speakers
        </a>
        <a href="FAQ " className="text-white">
          FAQ
        </a>
      </div>
      <div>
        <button className="text-white bg-r bg-[#fc032c] w-[100px] h-8 rounded-2xl ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
