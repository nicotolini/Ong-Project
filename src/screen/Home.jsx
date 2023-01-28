import React from "react";
import Footer from "../component/Footer";
import TopCompanies from "../component/TopCompanies";
import { Loking } from "./Loking";
import { Testimonial } from "./Testimonial";

const Home = () => {
  return(
    <>
    <TopCompanies/>
    <Loking/>
    <Testimonial/>
    <Footer/>
    </>
  );
};

export default Home;
