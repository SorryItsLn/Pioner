import React from "react";
import about1 from "../../assets//img/about1.jpg";
import about2 from "../../assets//img/about2.jpg";

const About = () => {
  return (
    <section className="mt-16">
      <div className="block mb-10">
        <p className="text_title">О предприятии</p>
      </div>
      <div className="flex  justify-between">
        <div className="">
          <div className="w-[680px]  h-[110px]">
            <p className="links text-xl  ">
              За 20 лет развития в структуре завода сформирован мощный
              производственный потенциал, научно-технический центр,
              испытательная лаборатория, современная база, учебный центр
              и широкая сеть региональных и международных представительств
              в Российской Федерации, Республике Беларусь, Узбекистане
              и Казахстане.
            </p>
          </div>
          <div className="w-[680px]  h-[110px] mt-10">
            <p className="links text-xl ">
              Ежегодно НПП «ПИОНЕР» реализует несколько проектов по модернизации
              серийных и разработке новых приборов, призванные в наибольшей
              степени удовлетворять возрастающие требования наших заказчиков.
            </p>
          </div>
        </div>
        <div className="w-[680px]  h-[66px]">
          <p className="links text-xl  ">
            В номенклатуре выпускаемой НПП «ПИОНЕР» продукции найдется все, что
            необходимо для успешного решения задачи автоматизации
            технологических процессов на любом предприятии. Все средства
            измерения производства «ПИОНЕР» внесены в Государственный реестр
            СИ и имеют необходимые разрешительные документы.
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src={about1} alt="about1" />
        </div>
        <div className="ml-5">
          <img src={about2} alt="about2" />
        </div>
      </div>
    </section>
  );
};

export default About;
