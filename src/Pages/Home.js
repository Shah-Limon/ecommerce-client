import React from "react";
import Banner from "../components/Banner";
import HomeSectionOne from "../components/Shared/HomeSectionOne";
import HomeSectionTwo from "../components/Shared/HomeSectionTwo";
import HomeSectionThree from "../components/Shared/HomeSectionThree";
import BannerImageOne from "./BannerImageOne";
import BannerImageTwo from "./BannerImageTwo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerImageOne></BannerImageOne>
      <HomeSectionOne></HomeSectionOne>
      <BannerImageTwo></BannerImageTwo>
      <HomeSectionTwo></HomeSectionTwo>
      <HomeSectionThree></HomeSectionThree>
    </div>
  );
};

export default Home;
