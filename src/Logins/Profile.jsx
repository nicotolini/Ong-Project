import React, { useState } from "react";
import Input from "../component/Input";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Profile = () => {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [tel, setTel] = useState("");
  const [select, setSelect] = useState("male");

  return (
    <div className="flex items-center justify-center min-h-screen  bg-[url('bg5.svg')] ">
      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="250"
        className="flex min-h-[600px] max-w-[55%] lg:min-w-[60%] min-w-[80%] shadow-2xl  overflow-hidden rounded-xl   "
      >
        <div className="hidden flex-1 lg:flex  justify-evenly text-slate-100 flex-col items-center  bg-gradient-to-l from-sky-400 to-indigo-700 ">
          <img className="w-[80%]" src="Profile.svg" alt="" />
        </div>
        <div className=" flex-1 flex flex-col   items-center justify-center gap-10 bg-[#fff] rounded-r-sm ">
          <div className="w-4/5">
            <h1 className=" text-3xl  font-bold lg:text-start text-center ">
              Complete Profile
            </h1>
          </div>

          <form className="lg:w-4/5 w-11/12 flex flex-col gap-3 " action="">
            <Input
              label="Full Name"
              type={"text"}
              placeholder="Name..."
              value={name}
              handleOnChange={(e) => {
                setName(e.target.value);
              }}
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
              label="Date of Brith"
              type={"text"}
              placeholder="Date..."
              value={date}
              handleOnChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <Input
              label="Phone Number"
              type={"tel"}
              placeholder="Ej. +54 11-999-999"
              value={tel}
              handleOnChange={(e) => {
                setTel(e.target.value);
              }}
            />

            <label htmlFor="gender" className="font-semibold">
              Gender
            </label>
            <select
              value={select}
              onChange={e =>setSelect(e.target.value)}
              id="gender"
              className="border  w-full  block  px-3 py-2 bg-white  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            >
              <option
                value="male"
              >
                Male
              </option>
              <option
                value="female"
              >
                Female
              </option>
            </select>

            <button
              type="submit"
              className="w-1/2 mx-auto text-white bg-blue-500 hover:bg-blue-700 text-white-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
