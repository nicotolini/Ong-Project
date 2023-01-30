import React from "react";

export const PaginationButton = ({ children, active }) => {
  return (
    <button
      type="button"
      className={`w-[44px] h-[44px] rounded-full border-[1px] flex_center border-violet-50 text-[24px] 
      ${active ? "bg-violet-500 text-white-100" : "bg-transparent"}`}
    >
      {children}
    </button>
  );
};
