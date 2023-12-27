import React, { Suspense, useEffect, useRef, useState } from "react";
import Hero from "../components/aboutpage/Hero";
import Abouts from "../components/aboutpage/Abouts";
import Ourself from "../components/aboutpage/Ourself";
import Partners from "../components/aboutpage/Partners";
import Footer from "../components/footer/Footer";
import AboutCards from "../components/aboutpage/AboutCards";
import Swiperpartners from "../components/aboutpage/Swiperpartners";
import Navbar from "../components/navbar/Navbar";

const sectionIds = [
  "section-1",
  "section-2",
  "section-3",
  "section-4",
  "section-5",
];

const About = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Hero />

      <Abouts />

      <AboutCards />

      <Ourself />

      {isMobile() ? <Swiperpartners /> : <Partners />}

      <Footer />
    </div>
  );
};

export default About;
