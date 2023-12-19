import Banner from "@/Components/Banner";
import DemandingCategory from "@/Components/DemandingCategory";
import Footer from "@/Components/Footer";
import FooterBanner from "@/Components/FooterBanner";
import Header from "@/Components/Header";
import HowItWorks from "@/Components/HowItWorks";
import JobListing from "@/Components/JobListing";
import TrustedBy from "@/Components/TrustedBy";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <Banner />
      <DemandingCategory />
      <HowItWorks />
      <JobListing />
      <TrustedBy />
      <FooterBanner />
      <Footer />
    </>
  );
};

export default index;
