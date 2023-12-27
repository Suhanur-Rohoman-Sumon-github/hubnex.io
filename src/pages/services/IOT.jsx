import React, { useEffect, useRef, useState } from "react";
import ServisesOtherSections from "../../components/serviceUpdated/servisesHeros/ServisesOtherSections";
import ServisesDataMap from "../../components/serviceUpdated/servisesHeros/ServisesDataMap";
import ServisesHero from "../../components/serviceUpdated/servisesHeros/ServisesHero";
import { iotDatas } from "../../data/data";
import imge from "../../assets/serv4.png";
const sectionIds = ["section-1", "section-2", "section-3"];

const IOT = () => {
  return (
    <div className="h-screen w-full">
      {/* change industry hero to services hero to make all things align and also add specific componnet degain  */}
      <ServisesHero
        isAiml={false}
        title={"Efficient and Effective  Integration Services"}
        discriptions={`"Tailored IoT Solutions for Your Business Success"`}
        background={imge}
        button={"Get in touch"}
      />

      <ServisesDataMap datas={iotDatas} />

      <ServisesOtherSections />
    </div>
  );
};

export default IOT;
