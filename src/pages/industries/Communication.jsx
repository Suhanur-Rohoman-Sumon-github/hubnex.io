import React, { useEffect, useRef, useState } from "react";
import IndustryHeros from "../../components/industrypage/industryHeros/IndustryHeros";
import IndustryOthersPage from "../../components/industrypage/industryHeros/IndustryOthersPage";
import imge from "../../assets/ind1.png";

const Communication = () => {
  return (
    <div className="h-screen w-full">
      {/* Bug Fix: change button text */}

      <IndustryHeros
        title={"Revolutionizing the way we connect"}
        discriptions={
          "Digitalizing Communication Empowering Businesses to Thrive in the Future"
        }
        background={imge}
        button={"Let's talk"}
      />
      <IndustryOthersPage />
    </div>
  );
};

export default Communication;
