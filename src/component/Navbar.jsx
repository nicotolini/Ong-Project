
import { Link } from "react-router-dom";
import Button from "./Button";
import { ButtonHome } from "./ButtonHome";
import { useLayoutEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  useLayoutEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div
      className="h-[110px] flex justify-center bg-transparent">

      <div className="flex   container justify-between">
      <ButtonHome />
      <div className={`sm:flex hidden  gap-8 ${showMobileMenu && isMobile ? "mobile-menu" : "hidden"}`}>
        <ul className={` ${showMobileMenu && isMobile ? "flex flex-col text-[45px] gap-10 mt-10 items-start" : "flex items-center"}   gap-8  text-white-100 text-[18px]`}>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent  transition-all ease-in-out duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <Link to="/BrowserJob">Browse Job</Link>
          </li>
          <li className="hover:border-b-2 hover:border-emerald-400 border-b-2 border-transparent transition-all ease-in-out duration-200">
            <Link to="/candidates">Candidates</Link>
          </li>
          
        </ul>

        <div className="flex items-center text-white-100 text-[18px]">
          <Button   bg="bg-black" border="border-0"  >
            <Link className=" font-bold px-4" to="/login">Sign In</Link>
          </Button>
          
        </div>
        </div>
        <button className="block sm:hidden" onClick={toggleMobileMenu}>
          <img src="https://icongr.am/entypo/menu.svg?size=80&color=000000" alt="" />
        </button>
      </div>
    </div>
  );
};
