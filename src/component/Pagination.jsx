import React, { useState, useEffect } from "react";
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({ pages = 1, onPageChange }) => {
  const [isActive, setIsActive] = useState(1);

  useEffect(() => {
    onPageChange(isActive);
  }, [isActive]);

  return (
    <div className="flex_center gap-[24px] pt-[44px]">
      <PaginationButton onClick={() => setIsActive((prev) => (prev - 1 === 0 ? prev : prev - 1))}>
        <img src="./previcon.svg" alt="previcon" className="w-[7px] h-[14px]" />
      </PaginationButton>

      {Array.from({ length: pages }, (_, index) => (
        <PaginationButton active={index + 1 === isActive} onClick={() => setIsActive(index + 1)}>
          {index + 1}
        </PaginationButton>
      ))}

      <PaginationButton onClick={() => setIsActive((prev) => (prev === pages ? prev : prev + 1))}>
        <img src="./nexticon.svg" alt="nexticon" className="w-[7px] h-[14px]" />
      </PaginationButton>
    </div>
  );
};
