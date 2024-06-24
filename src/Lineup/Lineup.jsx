import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Lineup = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" bg-[#212525] pl-[120px] pr-[120px] pt-[150px]  " >
      <div className="md:flex justify-between items-center pb-16 m-auto ">

        <p className="font-bold text-white text-4xl  ">Explore and Join Our Exciting Lineup</p>
        <p className="text-white  ">

          Explore a comprehensive list of nearby events conveniently accessible
          on our platform . Users have the opportunity to discover a diverse
          range of events and can seamlessly register directly through this
          dedicated page
        </p>
      </div>
      <Slider {...settings}>
        <div className="md:flex justify-between items-center w-1/2 ">

          <img src="https://i.ibb.co/bPHWypn/Rectangle-fifth-1.png" alt="" />

        </div>
        <div className="md:flex justify-between items-center">

          <img src="https://i.ibb.co/vJnC42t/Rectangle-fifth-2.png" alt="" />

        </div>
        <div className="md:flex justify-between items-center ">
          
            <img src="https://i.ibb.co/2NCYPNL/Rectangle-fifth-3.png" alt="" />

        </div>
      </Slider>
    
    </div>
  );
};

export default Lineup;
