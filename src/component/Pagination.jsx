import React from "react";
import { PaginationButton } from "./PaginationButton";

export const Pagination = () => {
  return (
    <div className="flex gap-[24px]">
      <PaginationButton>
        <img src="./previcon.svg" alt="previcon" className="w-[7px] h-[14px]" />
      </PaginationButton>
      <PaginationButton active>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>
        <img src="./nexticon.svg" alt="nexticon" className="w-[7px] h-[14px]" />
      </PaginationButton>
    </div>
  );
};
