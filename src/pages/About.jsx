import React, { Suspense, useEffect, useRef, useState } from "react";
import Hero from "../components/aboutpage/Hero";
import Abouts from "../components/aboutpage/Abouts";
import Ourself from "../components/aboutpage/Ourself";
import Partners from "../components/aboutpage/Partners";
import Footer from "../components/footer/Footer";
import AboutCards from "../components/aboutpage/AboutCards";
import Swiperpartners from "../components/aboutpage/Swiperpartners";
import Navbar from "../components/navbar/Navbar";

const About = () => {
  const isMobile = () => {
    const match = window.matchMedia("(max-width:912px)");
    return match && match.matches;
  };
  return (
    <div className="h-screen w-full">
      <div className="h-full w-full ">
        <section className="snap-start h-screen lg:h-[982px] w-full bg-black ">
          <Navbar />
          <Hero />
        </section>
        <section className="snap-start">
          <Abouts />
        </section>
        <section className="snap-start">
          <AboutCards />
        </section>
        <section className="snap-start">
          <Ourself />
        </section>
        <section className="snap-start">
          {isMobile() ? <Swiperpartners /> : <Partners />}
        </section>
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default About;
