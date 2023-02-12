import React, { useRef } from "react";

const InputFile = ({ placeholder, value, name, handleOnChange }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="h-[33.5px] relative">
      <input
        type="text"
        value={value}
        className="placeholder:text-black h-[33.5px] w-full ring-1 ring-violet-500 rounded-[7px] p-4"
        placeholder={placeholder}
        onClick={handleClick}
        readOnly
      />
      <input
        type="file"
        name={name}
        ref={inputRef}
        accept="application/pdf,application/vnd.ms-excel"
        value={value}
        onChange={handleOnChange}
        className="hidden"
      />
      <button
        type="button"
        className="absolute top-[1px] right-2 rounded-[6px] bg-violet-500 text-white-100 px-4 py-1"
        onClick={handleClick}
      >
        Browse
      </button>
    </div>
  );
};

export default InputFile;
