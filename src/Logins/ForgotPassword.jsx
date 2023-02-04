import React, { useState } from "react";
import Input from "../component/Input";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  
  return (
    <div className="flex items-center justify-center min-h-screen  bg-[url('bg5.svg')] ">
      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="250"
        className="flex min-h-[600px] max-w-[55%] lg:min-w-[60%] min-w-[80%] shadow-2xl  overflow-hidden rounded-xl   "
      >
        <div className="hidden flex-1 lg:flex  justify-evenly text-slate-100 flex-col items-center  bg-gradient-to-l from-sky-400 to-indigo-700 ">
          <img className="w-[80%]" src="forgot_password.svg" alt="" />
        </div>
        <div className=" flex-1 flex flex-col   items-center justify-center gap-10 bg-[#fff] rounded-r-sm ">
          <div className="w-4/5">
            <h1 className=" text-3xl  font-bold lg:text-start text-center ">
              Recovery Password
            </h1>
          </div>

          <form className="lg:w-4/5 w-11/12 flex flex-col gap-3 " action="">
            <Input
              label="Email"
              type={"email"}
              placeholder="Email..."
              value={email}
              handleOnChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="flex items-center justify-between"></div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Recover
            </button>
            <p className="text-sm font-light text-gray-500">
              Do you have account?{" "}
              <Link
                to="../Login"
                className="font-semibold text-zinc-800 hover:underline ml-3 "
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
