import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <div className=" homeHeroFirstDiv">
      <div className="homeHeroSecondDiv">
        <div className="homeHeroThirdDiv">
          {/* Note: text and button capitalize */}
          <h1>scale your business</h1>
          <h1>lead the market.</h1>
        </div>
        <div className=" homeHeroFourthDiv">
          <p className=" homeHeroP">let our team, help you reach your dream</p>

          <Link to="/contact" className="btn-primary">
            get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
