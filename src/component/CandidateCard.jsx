import React from "react";
import Avatar from "./Avatar";

const CandidateCard = ({ name, position, image }) => {
  return (
    <div className="w-[292px] h-[364px] rounded flex flex-col items-center bg-white-100 p-5 gap-2">
      <Avatar image={image} />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <h3 className="text-xl">{position}</h3>
    </div>
  );
};

export default CandidateCard;
