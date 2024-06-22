import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" bannerBg  pl-[120px] pr-[120px]   ">
      <div className="md:w-[370px]   pt-[300px] ">
        <p className=" text-5xl text-white text-start font-bold pb-2 ">
          Witness The World’s Biggest
        </p>
        <p className="text-white py-2 text-start text-sm ">
          durga puja is technically west bengal’s largest religious festival,
          centred on the goddess durga, destroyer of the demon mahishasura. but
          increasingly, durga puja is also the world’s largest publicly funded
          Art show.
        </p>
        <div className="md:flex justify-between items-center md:py-4">
            <button className="text-white bg-[#fc032c] w-[100px] h-8 rounded-2xl mt-3  ">Get Ticket</button>
            <div className="flex justify-between items-center gap-2 ">
                <p className="text-white">view more</p>
                <img className="text-white "  src="https://i.ibb.co/yB70nt7/fast-forward.png" alt="" />
                <img className="text-white "  src="https://i.ibb.co/yB70nt7/fast-forward.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
