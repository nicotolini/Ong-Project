import React from "react";
import { Navbar } from "../component/Navbar";
import { SubHeading } from "../component/SubHeading";
import Form from "../component/Form/Form";
import JobDescription from "../component/JobDescription";
import Footer from "../component/Footer";
import { jobs } from "../constants";

const DetailJob = () => {
  return (
    <div className="bg-violet-100">
      <Navbar />
      <SubHeading subTitle="" title="Titulo job" />
      <JobDescription
        country={jobs[9].country}
        jobTitle={jobs[5].job}
        image={jobs[4].image}
        modality={jobs[5].modality}
      />
      <Form />
      <Footer />
    </div>
  );
};

export default DetailJob;
