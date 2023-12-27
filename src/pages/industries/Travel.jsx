import React, { useEffect, useRef, useState } from "react";
import IndustryHeros from "../../components/industrypage/industryHeros/IndustryHeros";
import IndustryOthersPage from "../../components/industrypage/industryHeros/IndustryOthersPage";
import imge from "../../assets/ind5.png";
const Travel = () => {
  return (
    <div className="h-screen w-full">
      <IndustryHeros
        title={"Public Sector Solutions"}
        discriptions={
          "Your Voice, Your Government Bridging the Gap for Better Governance"
        }
        background={imge}
        button={"Let's talk"}
      />

      <IndustryOthersPage />
    </div>
  );
};

export default Travel;
