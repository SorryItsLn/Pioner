import React from "react";
import phone from "../../assets/icons/phone.svg";

const Links = () => {
  return (
    <section className="flex justify-between mt-3">
      <div className="flex justify-between w-[951px]">
        <a href="#" className="links">
          Главная
        </a>
        <a href="#" className="links">
          О предприятии
        </a>
        <a href="#" className="links">
          Новости
        </a>
        <a href="#" className="links">
          Продукция
        </a>
        <a href="#" className="links">
          Услуги
        </a>
        <a href="#" className="links">
          Поддержка
        </a>
        <a href="#" className="links">
          География поставок
        </a>
        <a href="#" className="links">
          Контакты
        </a>
      </div>
      <div className="flex w-[200px] items-center justify-center">
        <img src={phone} alt="" />
        <a href="id" className="text_link font-normal text-base ml-2 ">
          ПЕРЕЗВОНИТЕ МНЕ
        </a>
      </div>
    </section>
  );
};

export default Links;
