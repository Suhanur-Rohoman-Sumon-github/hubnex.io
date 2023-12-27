import React, { useEffect, useRef, useState } from "react";
import ServisesOtherSections from "../../components/serviceUpdated/servisesHeros/ServisesOtherSections";
import ServisesDataMap from "../../components/serviceUpdated/servisesHeros/ServisesDataMap";
import ServisesHero from "../../components/serviceUpdated/servisesHeros/ServisesHero";
import { softwarTestingDatas } from "../../data/data";
import imge from "../../assets/serv3.png";
const sectionIds = ["section-1", "section-2", "section-3"];

const SoftwareTesting = () => {
  return (
    <div className="h-screen w-full">
      {/* change industry hero to services hero to make all things align and also add specific componnet degain */}
      <ServisesHero
        isAiml={false}
        title={"Ensuring High-Quality Software Delivery"}
        discriptions={`"Maximizing Your Software Potential with Advanced Testing Solutions"`}
        background={imge}
        button={"Get in touch"}
      />

      <ServisesDataMap datas={softwarTestingDatas} />

      <ServisesOtherSections />
    </div>
  );
};

export default SoftwareTesting;
