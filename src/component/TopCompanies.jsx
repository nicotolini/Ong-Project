import React from "react";
import Card from "./Card";
import Dribble from "../assets/images-TopCompanies/DribbbleLogo.png";
import Shopee from "../assets/images-TopCompanies/ShopeeLogo.png";
import Tokopedia from "../assets/images-TopCompanies/TokopediaLogo.png";
import Webtoon from "../assets/images-TopCompanies/WebtoonLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TopCompanies = () => {
  return (
    <section className="xl:h-[522px] h-[116vh] sm:h-[84vh] flex w-full pt-10 sm:pt-0 sm:items-center sm:justify-center bg-violet-100">
      <div data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
        data-aos-duration="700" className="w-[100%] xl:container flex h-[496px] flex-col xl:flex-row xl:gap-6">
        <div className="flex-1 flex justify-center flex-col gap-4 text-center xl:text-start items-center xl:items-start">
          <h2 className="font-bold text-4xl">Top Companies</h2>
          <p className="md:max-w-3xl xl:max-w-xl text-black  text-center xl:p-0 p-8 xl:text-start font-semibold text-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row justify-center gap-8 mt-3 xl:justify-between">
          <div className="flex flex-col justify-center xl:items-start items-center sm:items-end xl:justify-start flex-1  gap-8">
            <Card
              image={Webtoon}
              title="Webtoon"
              description="50+ Available Positions"
              bgColor="bg-violet-500"
              textColor="text-white-200"
            />
            <Card
              image={Shopee}
              title="Shopee"
              description="50+ Available Positions"
              bgColor="bg-white-100"
              textColor="text-black"
            />
          </div>
          <div className="flex flex-1 flex-col items-center sm:items-start justify-end gap-8">
            <Card
              image={Dribble}
              title="Dribbble"
              description="50+ Available Positions"
              bgColor="bg-white-100"
              textColor="text-black"
              
            />
            <Card
              rounded="false"
              image={Tokopedia}
              title="Tokopedia"
              description="50+ Available Positions"
              bgColor="bg-white-100"
              textColor="text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
