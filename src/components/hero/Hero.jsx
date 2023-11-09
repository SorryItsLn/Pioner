import React from "react";
import map from "../../assets/img/map@2x.png";

const Hero = () => {
  return (
    <section className="mt-20">
      <p className="text_title">Представительства</p>
      <div className="mt-[32px] flex justify-center">
        <div>
          <img src={map} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
