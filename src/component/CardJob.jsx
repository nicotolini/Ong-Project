import React from "react";
import { useNavigate } from "react-router-dom";

export const CardJob = ({ id, image, jobTitle, country, modality, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`job/${id}`);
  };

  return (
    <div className="flex flex-col box-shadow rounded-md bg-white-100 min-h-[213px] max-w-full md:flex-row mt-[50px] ">
      <div className="flex-1 flex flex-col md:flex-row md:items-start items-center pl-[38px] pt-[30px] pb-[40px]">
        <div className="w-[143px] h-full md:text-start text-center flex items-center p-5">
          <img src={image} alt={jobTitle} className="w-[90px]" />
        </div>

        <div className="flex flex-col gap-[18px] justify-center flex-1 h-full ">
          <p className="text-black text-[24px] text-center md:text-start">{jobTitle}</p>
          <div className="flex gap-[8px]">
            <div className="flex gap-[4px]">
              <img src="/locationicon.svg" alt="location-icon" />
              <span className="text-black text-[20px]">{country}</span>
            </div>
            <div className="flex gap-[4px]">
              <img src="/clockicon.svg" alt="clock-icon" />
              <span className="text-black text-[20px]">{modality}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center md:justify-end md:items-start pt-[24px] md:pr-[29px] pl-[]">
        <div className="flex items-center md:items-start flex-col">
          <div className="flex gap-[20px]">
            <button className="flex_center w-[44px] h-[44px] bg-violet-100 rounded-[6px]">
              <img src="/hearticon.svg" alt="love-icon" />
            </button>

            <button
              className="bg-black text-white-100 pt-[13px] pb-[6px] pl-[24px] pr-[24px] rounded-[7px]"
              onClick={handleClick}
            >
              Apply Now
            </button>
          </div>

          <p className="text-[14px] pt-[16px]" style={{ color: "rgba(0, 0, 0, 0.7)" }}>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};
