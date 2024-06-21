import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" bannerBg  pl-[120px] pr-[120px]   ">
      <div className="md:w-[370px]  pt-[300px] ">
        <p className=" text-5xl text-white text-start font-bold pb-2 ">
          Witness The World’s Biggest
        </p>
        <p className="text-white text-start text-sm ">
          durga puja is technically west bengal’s largest religious festival,
          centred on the goddess durga, destroyer of the demon mahishasura. but
          increasingly, durga puja is also the world’s largest publicly funded
          Art show.
        </p>
        <div className="flex justify-between items-center">
            <button className="text-white bg-[#fc032c] w-[100px] h-8 rounded-2xl mt-3  ">Get Ticket</button>
            <div className="flex justify-between items-center gap-2 ">
                <p className="text-white">view more</p>
                <img className="text-white "  src="../assets/view more.png" alt="" />
                <img className="text-white "  src="../assets/view more.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
