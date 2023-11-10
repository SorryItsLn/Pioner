import React from "react";
import logo from "../../assets/icons/logo_footer.svg";

const Footer = () => {
  return (
    <section className="h-[381px] bg-[#333] mt-16 text">
      <div className="  mx-[130px]  pt-[32px] flex  justify-between">
        <div className="mt-[56px]">
          <div className="pl-10">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex gap-24  mt-[56px]">
          <div className="flex flex-col gap-5">
            <p className="footer_text">Главная</p>
            <p className="footer_text">О предприятии</p>
            <p className="footer_text">Новости</p>
            <p className="footer_text">Продукция</p>
            <p className="footer_text">Услуги</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="footer_text">Поддержка</p>
            <p className="footer_text">География поставок</p>
            <p className="footer_text">Контакты</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="footer_text">Файлы</p>
            <p className="footer_text">Поддержка</p>
            <p className=" footer_text wrap">
              Политика <br />
              конфеденциальности
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center pt-[80px]">
        <p className="footer_text">1994 — 2020 ООО «ПИОНЕР»</p>
      </div>
    </section>
  );
};

export default Footer;
