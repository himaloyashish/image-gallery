import React from "react";

const Discover = () => {
  return (
    <div className="bg-[#212525] pl-[120px] pr-[120px]  ">
      <div className="pt-[150px] w-2/3 m-auto ">
        <p className="font-bold text-4xl text-white  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <button className="text-white  bg-[#fc032c] w-[120px] h-8 rounded-2xl mt-3  ">Discover Now</button>
      </div>
      <div className=" md:flex justify-between items-center pt-10 ">
        <img className="flex justify-center items-end " src="/src/assets/Rectangle- second 1.png" alt="" />
        <img src="/src/assets/Rectangle- second 2.png" alt="" />
        <img src="/src/assets/Rectangle- second 3.png" alt="" />
      </div>
    </div>
  );
};

export default Discover;
