import React, { useEffect, useRef, useState } from "react";
import IndustryHeros from "../../components/industrypage/industryHeros/IndustryHeros";
import IndustryOthersPage from "../../components/industrypage/industryHeros/IndustryOthersPage";
const sectionIds = ["section-1", "section-2"];
import imge from "../../assets/ind3.png";

const Retail = () => {
  return (
    <div className="h-screen w-full">
      <IndustryHeros
        title={"Retail and Customer Goods"}
        discriptions={
          "Delivering with Care Sustainable Solutions for a Healthier Planet"
        }
        background={imge}
        button={"Let's talk"}
      />

      <IndustryOthersPage />
    </div>
  );
};

export default Retail;
