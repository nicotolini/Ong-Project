import React from "react";
import Subcribe from "./Subcribe";

const Footer = () => {
  return (
    <footer  className="bg-white-200 md:h-[60vh] h-[40vh]">
      <div className="bg-black  clip-paht-footer  w-full bg-contain bg-no-repeat flex h-full">
        <div className="flex text-white-100 md:items-center items-end md:flex-nowrap flex-wrap container mx-auto  ">
          <div className="flex flex-col gap-5 text-lg flex-1 md:items-start items-center min-w-[300px]  text-white  ">
            <div className="flex gap-4 md:justify-start  justify-center items-center pb-5 ml-[-5px] md:text-xl text-sm">
              <img src="https://icongr.am/fontawesome/paper-plane-o.svg?size=43&color=ffffff" className="w-12" alt="" />
              <h3 className="font-bold md:text-2xl text-lg">Job Dev</h3>
            </div>
            <h4 className="font-black md:text-2xl text-lg tracking-wide">
              Find Your Dream Job
            </h4>
            <p>job.search@gmail.com</p>
            <p>+54 896-5454-4725</p>
            <p>Buenos Aires Argentina</p>
          </div>
          <div className="flex flex-wrap  text-lg flex-1 md:justify-start justify-center md:gap-20 gap-2 md:pb-0 pb-0.5 text-white ">
            <div className="flex flex-col gap-4  md:text-xl text-sm  ">
              <h4 className="font-black md:text-2xl text-lg tracking-wide pb-5">
                Company
              </h4>
              <p>
                <a href="#">About</a>
              </p>
              <p>
                <a href="#">FAQ</a>
              </p>
              <p>
                <a href="#">Carier Tips</a>
              </p>
              <p>
                <a href="#">Princing</a>
              </p>
            </div>
            <div className="flex flex-col gap-4  md:text-xl text-sm ">
              <h4 className="font-black md:text-2xl text-lg tracking-wide pb-5">
                Category
              </h4>
              <p>
                <a href="#">Marketing</a>
              </p>
              <p>
                <a href="#">UI/UX</a>
              </p>
              <p>
                <a href="#">Programmer</a>
              </p>
              <p>
                <a href="#">Telemarketing</a>
              </p>
            </div>
            <div className="min-w-[40%]  ">
              <Subcribe />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
