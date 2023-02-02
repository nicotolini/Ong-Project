import React from "react";
import Footer from "../component/Footer";
import { Navbar } from "../component/Navbar";
import PopularCategories from "../component/PopularCategories";
import TopCompanies from "../component/TopCompanies";
import { Loking } from "./Loking";
import { Testimonial } from "./Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      
      <PopularCategories />
      <TopCompanies />
      <Loking />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
