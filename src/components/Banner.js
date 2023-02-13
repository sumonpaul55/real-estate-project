import React from "react";
import Images from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="max-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] ">
          <h1>
            <span>Rent</span>Your Dream House With Us.
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ducimus suscipit voluptatem sed debitis dolorum sunt saepe? Exercitationem, autem porro!</p>
        </div>
        <div>
          <img src={Images} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
