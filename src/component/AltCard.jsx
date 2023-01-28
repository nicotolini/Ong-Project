import React from "react";

const AltCard = ({
  title,
  description,
  image,
  bgColor,
  textColor,
  whiteBg,
  rounded = "true",
}) => {
  return (
    <div
      className={`  rounded-lg xl:p-3 ${bgColor} ${textColor} flex flex-col justify-center items-center text-center w-3/4 p-1 h-[140px] xl:justify-start xl:items-start xl:text-start xl:h-[169px] xl:w-[235px] lg:h-[140px] lg:w-[280px]`}
    >
      <div className="rounded-t">
        <div
          className={`h-[55px] w-[55px] ${
            rounded === "true" && "rounded-full"
          } ${
            whiteBg === "true" ? "bg-white" : ""
          } p-0 m-0 flex items-center justify-center`}
        >
          <img
            src={image}
            alt="icon"
            className={`mx-auto object-cover ${
              rounded === "true" && "rounded-full"
            }`}
          />
        </div>
      </div>
      <div className={`${textColor} xl:ml-[7%]`}>
        <h2 className="font-semibold text-[1.25rem] xl:text-[1.5rem]">
          {title}
        </h2>
        <h3 className="text-[1.1rem] xl:text-[1.25rem]">{description}</h3>
      </div>
    </div>
  );
};

export default AltCard;
