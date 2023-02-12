import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ButtonHome } from "./ButtonHome";

export const Navbar = () => {
  return (
    <nav
      className="h-[110px] flex justify-center bg-transparent">

      <div className="flex   container justify-between">
      <ButtonHome />
        <ul className="flex_center  gap-8  text-white-100 text-[18px]">
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent  transition-all ease-in-out duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <Link to="/job">Browse Job</Link>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <Link to="/candidates">Candidates</Link>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="flex items-center gap-8 text-white-100 text-[18px]">
          <Button border="border-0" width="w-[70%]">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button bg="bg-black" border="border-0" width="w-[200px]" >Post a Job</Button>
        </div>
      </div>
    </nav>
  );
};
