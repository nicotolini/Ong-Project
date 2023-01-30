import React from "react";
import Footer from "../component/Footer";
import PopularCategories from "../component/PopularCategories";
import TopCompanies from "../component/TopCompanies";
import { Loking } from "./Loking";
import { Testimonial } from "./Testimonial";

const Home = () => {
  return (
    <>
      <PopularCategories />
      <TopCompanies />
      <Loking />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
