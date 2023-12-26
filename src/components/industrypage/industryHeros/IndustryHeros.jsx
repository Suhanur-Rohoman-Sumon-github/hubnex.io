import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

const IndustryHeros = ({ title, discriptions, background, button }) => {
  // use custom background to handle background error
  const imgeStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  console.log(background);
  return (
    // add xl:h-[838px] h-screen to handle the background  and also removed extra div
    <div style={imgeStyle} className={`industryFirstDiv`}>
      <Navbar />
      <div className="industrySecondDiv">
        <div className=" industryThirdDiv">
          <div className="industryFourthDiv">
            <h1 className="industryH1">{title}</h1>
            <p className=" text-paragraph ">{discriptions}</p>
            {/* change the btn primary to btn servise to handle both mobile view and pc view */}
            <Link to="/contact" className="btn-service">
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryHeros;
