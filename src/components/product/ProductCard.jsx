import React from "react";
import vector from "../../assets/icons/Vector (1).png";

const ProductCard = ({ img }) => {
  return (
    <div className="w-[31%] h-[400px] bg-[#D9D9D9]   ">
      <div className="block w-[300px] h-[240px] p-8 mt-2  ">
        <img src={img} alt="" />
      </div>
      <div className="px-8 mt-10">
        <p className=" text-3xl"> Сигнализатор уровня</p>
        <div className="flex items-center">
          <a
            href="zxc"
            className=" text-2xl text-[#607CE6] hover:text-[#394572]"
          >
            Подробнее
          </a>
          <div className="ml-2 ">
            <img src={vector} alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
