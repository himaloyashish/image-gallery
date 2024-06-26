import React from "react";
import "./Navbar";

const Navbar = () => {
  return (
    <div className=" md:flex items-center justify-between md:pl-[120px] bg-black pt-5  md:pr-[120px]  ">
      <div>
        <li>
          <img src="https://i.ibb.co/VYnqVhq/massart-1.png" alt="MassArt" />
        </li>
      </div>
      <div className="md:flex gap-3">
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
