import React from "react";
import banner from "../../assets/img/banner-image.jpg";

const Banner = () => {
  return (
    <section className="mt-[60px]">
      <div className="flex mb-[15px] items-start ">
        <div className="h-[144px] w-[580px] flex items-center ">
          <p className="text_title">Российский завод силовых машин</p>
        </div>
        <div className="w-[379px] h-[94px] flex justify-center items-center ml-20 ">
          <p className="links text-xl">
            научно-производственное предприятие, занимающееся разработкой и
            производством силовых машин.
          </p>
        </div>
      </div>
      <div>
        <img className="img" src={banner} alt="" />
      </div>
    </section>
  );
};

export default Banner;
