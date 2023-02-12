import React from "react";

const TextArea = ({ className, type, name, placeholder, label, value, handleOnChange }) => {
  return (
    <textarea
      name={name}
      className={`min-h-[83.5px] resize-none placeholder:text-black w-full ring-1 ring-violet-500 rounded-[7px] p-4 ${className}`}
      type={type}
      placeholder={placeholder}
      id={label}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default TextArea;
