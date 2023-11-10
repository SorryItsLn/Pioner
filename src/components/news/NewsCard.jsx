import React from "react";

const NewsCard = ({ img, title, date }) => {
  return (
    <div className="w-[33%]  cursor-pointer box-1 ">
      <div className="">
        <img src={img} alt="img" />
      </div>
      <div className="h-[227px] bg-[#F5F5F5] ">
        <div className="h-[84px]">
          <p className="p-[16px] text-2xl">{title}</p>
        </div>
        <div className="flex justify-between items-end p-[16px] mt-[81px]">
          <p className=" text-2xl text-[#607CE6] hover:text-[#394572]">
            Читать далее
          </p>
          <p className="text-xl">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
