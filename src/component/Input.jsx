import React from "react";

const Input = ({ label, type, placeholder, value, handleOnChange, className, handleOnKeyUp }) => {
  return (
    <div className="flex flex-col gap-1 ">
      <label className="font-semibold " htmlFor={label}>
        {label}
      </label>
      <input
        className={
          !className
            ? `border p-2 w-full block  px-3 py-2 bg-white  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600 
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500`
            : className
        }
        type={type}
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
      />
    </div>
  );
};

export default Input;
