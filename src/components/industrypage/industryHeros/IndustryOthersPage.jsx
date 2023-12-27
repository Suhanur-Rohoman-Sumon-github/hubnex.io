import React, { useEffect, useRef, useState } from "react";
import Innovation from "./Innovation";
import Works from "./Works";
import Aboutus from "../../serviceUpdated/servisesHeros/Aboutus";
import Swiperpartners from "../../aboutpage/Swiperpartners";
import Partners from "../../aboutpage/Partners";
import Footer from "../../footer/Footer";

const IndustryOthersPage = () => {
  const isMobile = () => {
    const match = window.matchMedia("(max-width:912px)");
    return match && match.matches;
  };
  return (
    <div className="h-screen w-full">
      <Innovation />

      <Works />

      <Aboutus />

      {isMobile() ? <Swiperpartners /> : <Partners />}

      <Footer />
    </div>
  );
};

export default IndustryOthersPage;
