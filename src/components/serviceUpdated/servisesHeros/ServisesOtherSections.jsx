import { useEffect, useRef, useState } from "react";
import Chooses from "./Chooses";
import Swiperpartners from "../../aboutpage/Swiperpartners";
import Partners from "../../aboutpage/Partners";
import Footer from "../../footer/Footer";
import Aboutus from "./Aboutus";
const sectionIds = ["section-1", "section-2", "section-3"];
const ServisesOtherSections = () => {
  const isMobile = () => {
    const match = window.matchMedia("(max-width:912px)");
    return match && match.matches;
  };
  return (
    <div className="h-screen w-full">
      <Chooses
        hederTitle={
          "Hubnex Lab employs industry best practices to help businesses globally scale, transform, and gain competitive advantage through innovative software solutions."
        }
        header={"why choose us?"}
        firsTitle={"Your Next-Gen Technology Partner"}
        secondTitle={"Team-Oriented"}
        thirdTitle={"Client-Focused"}
        firstDescriptions={
          "Adherence to agile and CI/CD principles throughout the product development lifecycle gain competitive advantage through innovative software solutions."
        }
        secondDescriptions={
          "Efficient & transparent development, communication, and reporting Our domain knowledge, expertise, and proven methodologies enable us to create"
        }
        thirdDescriptions={
          "Guaranteed maintenance and after-sales support smart digital experiences that add value to diverse businesses."
        }
        isOurself={false}
      />

      <Aboutus />

      {isMobile() ? <Swiperpartners /> : <Partners />}

      <Footer />
    </div>
  );
};

export default ServisesOtherSections;
