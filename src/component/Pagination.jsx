import React, { useEffect } from "react";
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({ pages = 1, onPageChange, active = 1, setActive }) => {
  useEffect(() => {
    onPageChange(active);
  }, [active]);

  return (
    <div className="flex_center gap-[24px] pt-[44px]">
      <PaginationButton onClick={() => setActive((prev) => (prev - 1 === 0 ? prev : prev - 1))}>
        <img src="./previcon.svg" alt="previcon" className="w-[7px] h-[14px]" />
      </PaginationButton>

      {Array.from({ length: pages }, (_, index) => (
        <PaginationButton key={index} active={index + 1 === active} onClick={() => setActive(index + 1)}>
          {index + 1}
        </PaginationButton>
      ))}

      <PaginationButton onClick={() => setActive((prev) => (prev === pages ? prev : prev + 1))}>
        <img src="./nexticon.svg" alt="nexticon" className="w-[7px] h-[14px]" />
      </PaginationButton>
    </div>
  );
};
