import React from "react";

const InputForm = ({ className, type, placeholder, name, value, handleOnChange }) => {
  return (
    <input
      name={name}
      className={`h-[33.5px] placeholder:text-black w-full ring-1 ring-violet-500 rounded-[7px] p-4 ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default InputForm;
