import React from "react";
import { SubHeading } from "../component/SubHeading";
import Form from "../component/Form/Form";
import JobDescription from "../component/JobDescription";
import Footer from "../component/Footer";
import { jobs } from "../constants";
import { useParams } from "react-router-dom";

const DetailJob = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job._id === id);

  return (
    <div className="bg-violet-100">
      <SubHeading subTitle="" title="Titulo job" />
      {job ? (
        <>
          <JobDescription country={job.country} jobTitle={job.job} image={job.image} modality={job.modality} />
          <Form />
        </>
      ) : (
        <div className="flex_center">
          <h4>No se encontro el trabajo</h4>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DetailJob;
