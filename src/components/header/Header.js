import React from "react";
import logo from "../../assets/icons/logo.svg";
import Links from "./Links";

const Header = () => {
  return (
    <header className="">
      <div className="flex  items-center justify-between">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex">
          <div className="text-right">
            <p className="img">По вопросам и предложениям</p>
            <a href="zxc" className="text_link underline ">
              pionerrr@sila.ru
            </a>
          </div>
          <div className="ml-[30px]">
            <p className="font-source  text-right">Для консультаций</p>
            <p className="text_link">+7 (495) 456-24-21</p>
          </div>
        </div>
      </div>
      <hr className="mt-[30px]" />
      <Links />
    </header>
  );
};

export default Header;
