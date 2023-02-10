import React from "react";

import Footer from "../component/Footer";
import { Navbar } from "../component/Navbar";
import PopularCategories from "../component/PopularCategories";
import PopularSearch from "../component/PopularSearch";
import TopCompanies from "../component/TopCompanies";
import { Loking } from "./Loking";
import { Testimonial } from "./Testimonial";
import { SubHeading } from "../component/SubHeading";

const Home = () => {
  return (
    <>

      
      <SubHeading subTitle="7457+ Job Listed" title="Find Your Dream Job" p="Wre provide online instant cash loans with quick approval that suit your term length"/>
      <PopularSearch/>
      <PopularCategories/>
      <TopCompanies/>
      <Loking/>
      <Testimonial/>
      <Footer/>
    </>
  );
};

export default Home;
