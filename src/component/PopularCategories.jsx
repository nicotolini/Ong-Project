import React from "react";
import mark from "../assets/images-PopularCategories/mark.png";
import programm from "../assets/images-PopularCategories/programm.png";
import script from "../assets/images-PopularCategories/script.png";
import web from "../assets/images-PopularCategories/web.png";
import Card from "./Card";

const PopularCategories = () => {
  return (
    <section className="bg-violet-100">
      <div className="xl:h-[78vh] h-[178vh] sm:h-[87vh] flex w-full pt-10 sm:pt-0 items-center justify-center clip-path-popular bg-violet-500 ">
        <div className="w-[100%] xl:container flex h-[100vh] sm:h-[50%] flex-col xl:flex-row-reverse xl:gap-10  justify-center xl:justify-between">
          <div className="flex-1 flex justify-center lg:mt-5 xl:mt-0 flex-col gap-4 text-center xl:text-start items-center  text-shadow xl:items-end text-white-200  ">
            <div>
              <h2 className="font-bold text-3xl">Popular Category</h2>
              <p className="md:max-w-2xl xl:max-w-md text-center mt-3 xl:p-0 p-8 xl:text-start font-semibold ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row justify-center gap-8 mt-3 xl:justify-between">
            <div className="flex flex-col justify-center xl:items-start items-center sm:items-end xl:justify-start flex-1  gap-8">
              <Card
                image={web}
                title="Web Design"
                description="50+ Available Positions"
                bgColor="bg-violet-600"
                whiteBg="true"
                textColor="text-white-200"
              />
              <Card
                image={programm}
                title="Programmer"
                description="50+ Available Positions"
                bgColor="bg-violet-600"
                textColor="text-white-200"
                whiteBg="true"
              />
            </div>
            <div className="flex flex-1 flex-col items-center sm:items-start justify-end gap-8">
              <Card
                image={script}
                title="Script Writer"
                description="50+ Available Positions"
                bgColor="bg-violet-600"
                whiteBg="true"
                textColor="text-white-200"
              />
              <Card
                image={mark}
                title="Marketing"
                description="50+ Available Positions"
                bgColor="bg-violet-600"
                textColor="text-white-200"
                whiteBg="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
