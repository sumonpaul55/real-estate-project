import React from "react";
import Images from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="max-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-start text-center lg:text-left lg:items-start justify-center p-4 flex-1">
          <h1 className="text-4xl lg:text-[58px] leading-none mb-6 font-semibold">
            <span className="text-violet-700">Rent</span>Your Dream House With Us.
          </h1>
          <p className="max-w-[480px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ducimus suscipit voluptatem sed debitis dolorum sunt saepe? Exercitationem, autem porro!
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Images} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
