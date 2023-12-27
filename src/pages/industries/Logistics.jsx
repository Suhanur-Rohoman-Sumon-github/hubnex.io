import React, { useEffect, useRef, useState } from "react";
import IndustryHeros from "../../components/industrypage/industryHeros/IndustryHeros";
import IndustryOthersPage from "../../components/industrypage/industryHeros/IndustryOthersPage";
import imge from "../../assets/ind2.png";
const Logistic = () => {
  return (
    <div className="h-screen w-full">
      <IndustryHeros
        title={"Efficient Logistics for Your Supply Chain"}
        discriptions={"Travel, Transportation, Logistics and Hospitality"}
        background={imge}
        button={"Let's talk"}
      />

      <IndustryOthersPage />
    </div>
  );
};

export default Logistic;
