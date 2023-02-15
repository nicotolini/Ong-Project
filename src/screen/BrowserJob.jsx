import Input from "../component/Input";
import React, { useState } from "react";
import { SubHeading } from "../component/SubHeading";
import Footer from "../component/Footer";
import TarjetFilterJob from "../component/TarjetFilterJob";
import jobs from "../constants/jobs";
import { CardJob } from "../component/CardJob";
const BrowserJob = () => {
  const [company, setCompany] = useState("");
  const [country, setLocation] = useState("");
  const [filter, setFilter] = useState([
    { company: "" },
    { country: "" },
    { job: "" },
    { experience: "" },
    { modality: "" },
  ]);
  const handleKeyUp = (index, property, e, setState) => {
     const updatedFilter = [...filter];
      updatedFilter[index][property] = e.target.value;
      setFilter(updatedFilter);
      setState ? setState("") : null    };
  const categorys =
    jobs.length > 0
      ? jobs.flatMap((tags) => tags.job).filter((v, i, a) => a.indexOf(v) === i)
      : ["error"];
  const sortedCategorys = [...categorys].sort((a, b) => b.length - a.length);
  const JobTypes =
    jobs.length > 0
      ? jobs
          .flatMap((tags) => tags.modality)
          .filter((v, i, a) => a.indexOf(v) === i)
      : ["error"];
  const sortedJobTypes = [...JobTypes].sort();
  const filteredJobs = jobs.filter(
    (job) =>
      (filter[0].company === "" || job.company === filter[0].company) &&
      (filter[1].country === "" || job.country.toLowerCase() === filter[1].country.toLowerCase()) &&
      (filter[2].job === "" || job.job === filter[2].job) &&
      (filter[3].experience === "" || job.experience === filter[3].experience) &&
      (filter[4].modality === "" || job.modality === filter[4].modality)
  );

  return (
    <>
      <SubHeading subTitle="7457+ Job List" title="Job List" />
      <div className=" bg-white-200 pb-[10rem] h-full flex flex-col gap-10">
        <div className="flex flex-col   w-full container mx-auto rounded-md box-shadow bg-white-100">
          <h3 className="pt-8 pl-10 text-2xl font-extrabold uppercase">
            Filter Job
          </h3>
          <div className="flex  justify-center gap-5 px-4 py-4 border-b-[1px] items-end">
            <Input
              className="w-full max-w-[200px] border  block  px-3 py-3 bg-transparent font-semibold border-sky-500 rounded-md text-sm shadow-sm  focus:outline-none  text-center"
              placeholder={"Search company"}
              type="text"
              value={company}
              handleOnChange={(e) => {
                setCompany(e.target.value);
              }}
             handleOnKeyUp={(e) => {
               if (e.key === "Enter" && company){
                 handleKeyUp(0, "company", e, setCompany)}
             }}
             
            />
            <Input
              className="w-full max-w-[200px] border  block  px-3 py-3 bg-transparent font-semibold border-sky-500 rounded-md text-sm shadow-sm  focus:outline-none  text-center"
              placeholder={"country"}
              w
              type="text"
              value={country}
              handleOnChange={(e) => {
                setLocation(e.target.value);
              }}
              handleOnKeyUp={(e) => {
                if (e.key === "Enter" && country) {
                  handleKeyUp(1, "country", e, setLocation)  }
              }}
            />
            <select
              value={filter[2].job}
              onChange={(e) => {
                handleKeyUp(2, "job", e)
              }}
              id="job"
              className="w-full max-w-[200px] h-[46px] border   block  px-3  bg-transparent font-semibold border-sky-500 rounded-md text-sm shadow-sm  focus:outline-none  text-center"
            >
              <option hidden>job</option>
              {categorys.length > 0
                ? sortedCategorys.map((tag, index) => {
                    return (
                      <option key={index} value={tag}>
                        {tag}
                      </option>
                    );
                  })
                : null}
            </select>
            <select
              value={filter[2].experience}
              onChange={(e) => {
                handleKeyUp(3, "experience", e)
              }}
              id="experience"
              className="w-full max-w-[200px] h-[46px] border   block  px-3  bg-transparent font-semibold  border-sky-500 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none  text-center"
            >
              <option hidden>Select Experience</option>
              <option value="1">1 Year</option>
              <option value="2">+2 Year</option>
              <option value="3">+3 Year</option>
              <option value="4">+4 Year</option>
            </select>
            <select
              value={filter[4].modality}
              onChange={(e) => {
                handleKeyUp(4, "modality", e)
              }}
              id="modality"
              className="w-full max-w-[200px] h-[46px] border   block  px-3  bg-transparent font-semibold  border-sky-500 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none  text-center"
            >
              <option hidden>Job Type</option>
              {categorys.length > 0
                ? sortedJobTypes.map((tag, index) => {
                    return (
                      <option key={index} value={tag}>
                        {tag}
                      </option>
                    );
                  })
                : null}
            </select>

            <button
              className="px-8 py-[13px] rounded-md text-sm shadow-sm text-white-100 bg-violet-500"
            >
              Find Job
            </button>
          </div>
          <div className="flex justify-center gap-5 px-4 py-4">
            {filter[0].company.length > 0 ? (
              <TarjetFilterJob
                onClick={() => {
                  const updatedTarjetKeyword = [...filter];
                  updatedTarjetKeyword[0].company = "";
                  setFilter(updatedTarjetKeyword);
                }}
                text={filter[0].company}
              />
            ) : null}

            {filter[1].country.length > 0 ? (
              <TarjetFilterJob
                onClick={() => {
                  const updatedTarjetKeyword = [...filter];
                  updatedTarjetKeyword[1].country = "";
                  setFilter(updatedTarjetKeyword);
                }}
                text={filter[1].country}
              />
            ) : null}
            {filter[2].job.length > 0 ? (
              <TarjetFilterJob
                onClick={() => {
                  const updatedTarjetKeyword = [...filter];
                  updatedTarjetKeyword[2].job = "";
                  setFilter(updatedTarjetKeyword);
                }}
                text={filter[2].job}
              />
            ) : null}
            {filter[3].experience.length > 0 ? (
              <TarjetFilterJob
                onClick={() => {
                  const updatedTarjetKeyword = [...filter];
                  updatedTarjetKeyword[3].experience = "";
                  setFilter(updatedTarjetKeyword);
                }}
                text={filter[3].experience}
              />
            ) : null}
            {filter[4].modality.length > 0 ? (
              <TarjetFilterJob
                onClick={() => {
                  const updatedTarjetKeyword = [...filter];
                  updatedTarjetKeyword[4].modality = "";
                  setFilter(updatedTarjetKeyword);
                }}
                text={filter[4].modality}
              />
            ) : null}

            {}
          </div>
        </div>
        <div className="container px-[8rem] mx-auto">
          {filter.some((obj) => {
            return Object.values(obj).some((value) => value !== "");
          })
            ? filteredJobs
                .slice(0, 4)
                .map((job, index) => (
                  <CardJob
                    key={index}
                    modality={job.modality}
                    image={job.image}
                    jobTitle={job.company}
                    country={job.country}
                    date={job.published.substring(0, 10)}
                  />
                ))
            : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowserJob;
