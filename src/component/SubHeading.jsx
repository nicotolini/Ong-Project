import React from "react";

export const SubHeading = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col pt-[100px] pl-[64px] h-[320px] bg-violet-700">
      <h3 className="text-[48px] text-white-100 z-10">{subTitle}</h3>
      <h2 className="text-[56px] text-white-100 pt-[32px] z-10">{title}</h2>
    </div>
  );
};
