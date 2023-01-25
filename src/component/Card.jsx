import React from "react";

const Card = ({
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
      className={`h-[193px] w-[305px] p-3  rounded-md ${bgColor} ${textColor} flex flex-col gap-2`}
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
      <div className={`${textColor} ml-[27.5px]`}>
        <h2 className="font-semibold text-[1.5rem]">{title}</h2>
        <h3 className="text-[1.25rem]">{description}</h3>
      </div>
    </div>
  );
};

export default Card;
