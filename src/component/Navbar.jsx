import React from "react";
import { ButtonHome } from "./ButtonHome";

export const Navbar = () => {
  return (
    <nav
      className="h-[155px] flex pt-[23px] pl-[67px] pr-[73px]"
      style={{ background: "linear-gradient(255.2deg, #2A2AD1 -5.67%, #4D4DDB 108.81%)" }}
    >
      <ButtonHome />

      <div className="flex justify-between flex-1">
        <ul className="flex_center flex-1 gap-[32px]  text-white-100 text-[18px]">
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent  transition-all ease-in-out duration-200">
            <a href="/">Home</a>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <a href="/job">Browse Job</a>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <a href="/candidates">Candidates</a>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <a href="/about">About</a>
          </li>
        </ul>

        <div className="flex items-center gap-[47px] text-white-100 text-[18px]">
          <button>
            <a href="/login">Sign In</a>
          </button>
          <button className="rounded-[8px] bg-black h-[55px] px-[31px]">Post a Job</button>
        </div>
      </div>
    </nav>
  );
};
