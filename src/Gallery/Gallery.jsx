import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[#212525] pl-[120px] pr-[120px] pt-[150px] ">
      <div className="md:flex justify-between items-center pb-8 ">
        <p className="text-white ">Gallery</p>
        <p className="text-white text-sm md:w-[350px] ">
          Find Togetherness and Friendship in Every Corner of Our Events"
          depicts moments of closeness and a sense of brotherhood that exist
          during our events. These photos show how shared experiences can create
          lasting relationships
        </p>
      </div>

      <div className="md:flex justify-between items-center gap-3">
        <div className="gap-3">
          <img src="/src/assets/Rectangle- thire 1.png" alt="" />
          <div className="md:flex justify-between items-center gap-2 pt-5">
            <img src="/src/assets/Rectangle- Third 2.png" alt="" />
            <img src="/src/assets/Rectangle- Third 3.png" alt="" />
          </div>
        </div>
        <div>
            <img src="/src/assets/Rectangle- third 4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
