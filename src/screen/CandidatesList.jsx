import React, { useState } from "react";
import { CandidateCard } from "../component/CandidateCard";
import { Pagination } from "../component/Pagination";
import { candidates } from "../constants";
import { getPaginationData } from "../utils";

export const CandidatesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagination = getPaginationData(8, candidates);

  const handleOnPageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="bg-violet-100 pl-[78px] pr-[108px] pt-[68px] pb-[129px]">
      <div className="grid_candidates min-h-[764px]">
        {pagination.pages[currentPage].map((candidate, index) => (
          <CandidateCard key={index} image={candidate.image} name={candidate.name} position={candidate.job} />
        ))}
      </div>

      <Pagination pages={pagination.quantity} onPageChange={handleOnPageChange} />
    </div>
  );
};
