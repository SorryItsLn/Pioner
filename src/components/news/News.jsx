import React from "react";
import NewsCard from "./NewsCard";
import news1 from "../../assets/img/news/news1.jpg";
import news2 from "../../assets/img/news/news2.jpg";
import news3 from "../../assets/img/news/news3.jpg";

const News = () => {
  return (
    <section className="mt-16">
      <div>
        <p className="text_title">Новости</p>
      </div>
      <div className="flex gap-4 mt-[32px]">
        <NewsCard
          img={news1}
          title={
            "НПП «ПИОНЕР» подтвердило свои компетенции в области консультирования и изготовления…"
          }
          date={"20.07.2020"}
        />
        <NewsCard
          img={news2}
          title={
            "Поздравляем коллектив регионального представительства «ПИОНЕР» с праздником!"
          }
          date={"18.07.2020"}
        />
        <NewsCard
          img={news3}
          title={"Перенос сроков проведения запланированных работ в 2020 году"}
          date={"20.06.2020"}
        />
      </div>
    </section>
  );
};

export default News;
