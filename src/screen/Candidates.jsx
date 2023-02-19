import React from "react";
import Footer from "../component/Footer";
import { SubHeading } from "../component/SubHeading";
import { CandidatesList } from "./CandidatesList";

const Candidates = () => {
  return (
    <div className="bg-violet-100">

      <SubHeading title="Candidates" subTitle="7457+ Cadidates List" />

      <CandidatesList />

      <Footer />
    </div>
  );
};

export default Candidates;
