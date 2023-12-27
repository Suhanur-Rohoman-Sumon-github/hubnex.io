import React, { useEffect, useRef, useState } from "react";
import ServisesOtherSections from "../../components/serviceUpdated/servisesHeros/ServisesOtherSections";
import ServisesDataMap from "../../components/serviceUpdated/servisesHeros/ServisesDataMap";
import ServisesHero from "../../components/serviceUpdated/servisesHeros/ServisesHero";
import { aimldatas } from "../../data/data";
import imge from "../../assets/serv1.png";
const sectionIds = ["section-1", "section-2", "section-3"];

const AIML = () => {
  return (
    <div className="h-screen w-full">
      {/* change industry hero to aiml hero make aiml hero align */}
      <ServisesHero
        title={"Smarter Business Decisions with AI/ML"}
        discriptions={`"Empowering Smarter Business Decisions with this"`}
        background={imge}
        isAiml={true}
      />

      <ServisesDataMap datas={aimldatas} />

      <ServisesOtherSections />
    </div>
  );
};

export default AIML;
