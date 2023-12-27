import React, { useEffect, useRef, useState } from "react";
import IndustryHeros from "../../components/industrypage/industryHeros/IndustryHeros";
import IndustryOthersPage from "../../components/industrypage/industryHeros/IndustryOthersPage";
const sectionIds = ["section-1", "section-2"];
import imge from "../../assets/ind4.png";
const PublicSector = () => {
  return (
    <div className="h-screen w-full">
      {/* in this lines ind5 image is not working so i use ind5  */}
      <IndustryHeros
        title={"Empowering Your Financial Future"}
        discriptions={
          "Banking, Financial Services, and Insurance Solutions for Every Stage of Life"
        }
        background={imge}
        button={"Let's talk"}
      />

      <IndustryOthersPage />
    </div>
  );
};

export default PublicSector;
