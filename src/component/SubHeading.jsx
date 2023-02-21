import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "./Navbar";

export const SubHeading = ({ title, subTitle, p, button }) => {
  const isMobile = useMediaQuery({ minWidth: 640 });
  return (
    <nav className="bg-white-200">
      <div
        className={`h-[620px] ${isMobile ? "clip-paht-navbar" : ""}  bg-gradient-nav`}
      >
        <Navbar />
        <div className="container mx-auto  pt-20">
          <div className="flex flex-col gap-3">
            <h3 className="text-[48px] text-white-100 ">{subTitle}</h3>
            <h2 className="text-[56px] text-white-100 font-bold">{title}</h2>
            <p className="text-lg text-white-100 min-w-[200px] w-[450px] pb-8">
              {p}
            </p>
            {button === "true" && (
              
              <Button
                bg="bg-black"
                border="border-0"
                width="w-[150px]"
                txColor="text-white-100"
                >
                <Link to="BrowserJob">
                Browser Job
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
