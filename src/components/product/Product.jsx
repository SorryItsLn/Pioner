import React from "react";
import ProductCard from "./ProductCard";
import product1 from "../../assets/img/product/product1.png";
import product2 from "../../assets/img/product/product2.png";
import product3 from "../../assets/img/product/product3.png";
import product4 from "../../assets/img/product/product4.png";
import product5 from "../../assets/img/product/product5.png";
import product6 from "../../assets/img/product/product6.png";

const Product = () => {
  return (
    <section className=" mt-16 ml-[0]">
      <div className="block mb-10">
        <p className="text_title mb-10">Продукция</p>
        <div className="">
          <div className="flex justify-between ">
            <ProductCard img={product1} />
            <ProductCard img={product2} />
            <ProductCard img={product3} />
          </div>
          <div className="flex justify-between mt-8">
            {" "}
            <ProductCard img={product4} />
            <ProductCard img={product5} />
            <ProductCard img={product6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
