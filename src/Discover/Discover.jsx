import React from "react";
import './Discover'

const Discover = () => {
  return (
    <div className="bg-[#212525] pl-[120px] pr-[120px]  ">
      <div className="pt-[150px] md:w-2/3 m-auto ">
        <p className="font-bold text-4xl text-white  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <button className="text-white  bg-[#fc032c] w-[120px] h-8 rounded-2xl mt-3  ">
          Discover Now
        </button>
      </div>
      <div className=" md:flex justify-between items-center  pt-10 ">
        <div className=" h-fit ">
          <img
            className=" "
            src="https://i.ibb.co/6NLBhNd/Rectangle-second-1.png"
            alt=""
          />
        </div>
        <div>
          <img className="" src="https://i.ibb.co/n6zHF7p/Rectangle-second-2.png" alt="" />
        </div>

        <div className=" relative ">
          <img className=" " src="https://i.ibb.co/wsQf327/Rectangle-second-3.png  "  alt="" />
          <p  className="text-white absolute ml-10 mb-40 "> </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
