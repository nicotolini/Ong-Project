import { useRef } from "react";

export const Select = () => {
  return (
    <div className="p-10 bg-violet-100">
      <div className="relative w-[150px]">
        <img src="/selecticon.svg" alt="selecticon" className="absolute right-[50%] mr-[20px] mt-[8px]" />
        <select className="w-[150px] border-[1px] border-solid border-violet-200 rounded-[8px] text-center">
          <option value="asd">123</option>
          <option value="asd1">123</option>
          <option value="asd2">123</option>
        </select>
      </div>
    </div>
  );
};
