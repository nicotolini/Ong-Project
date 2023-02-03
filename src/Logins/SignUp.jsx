import React, { useState } from "react";
import Input from "../component/Input";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen  bg-[url('bg5.svg')] ">
      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="250"
        className="flex min-h-[600px] max-w-[55%] lg:min-w-[60%] min-w-[80%] shadow-2xl  overflow-hidden rounded-xl   "
      >
        <div className="hidden flex-1 lg:flex  justify-evenly text-slate-100 flex-col items-center  bg-gradient-to-l from-sky-400 to-indigo-700 ">
          <img className="w-[80%]" src="SignUp.svg" alt="" />
        </div>
        <div className=" flex-1 flex flex-col   items-center justify-center gap-10 bg-[#fff] rounded-r-sm ">
          <div className="w-4/5">
            <h1 className=" text-3xl  font-bold lg:text-start text-center ">
              Sign Up
            </h1>
          </div>

          <form className="lg:w-4/5 w-11/12 flex flex-col gap-3 " action="">
            <Input
            label="Full Name"
            type={"text"}
            placeholder="Name..."
            value={text}
            handleOnChange={(e) => {
                setText(e.target.value);}}
            />

            <Input
              label="Email"
              type={"email"}
              placeholder="Email..."
              value={email}
              handleOnChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              label="Password"
              type={"password"}
              placeholder="Password..."
              value={password}
              handleOnChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-500"
                  >
                    I agree the private polic.
                  </label>
                </div>
              </div>
              <Link
                to="../ForgotPassword"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign Up
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

export default SignUp;