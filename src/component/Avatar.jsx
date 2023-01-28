import React from "react";

const Avatar = ({ image, className }) => {
  return (
    <div className= {`${className} rounded-full flex justify-center text-center items-center h-[143px] w-[136.9px]`}>
      <img
        src={image}
        alt="Avatar..."
        className= "mx-auto object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
