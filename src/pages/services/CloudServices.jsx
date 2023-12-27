import React, { useEffect, useRef, useState } from "react";
import ServisesOtherSections from "../../components/serviceUpdated/servisesHeros/ServisesOtherSections";
import ServisesDataMap from "../../components/serviceUpdated/servisesHeros/ServisesDataMap";
import ServisesHero from "../../components/serviceUpdated/servisesHeros/ServisesHero";
import { cloudServiseDatas } from "../../data/data";
import imge from "../../assets/serv2.png";

const CloudServices = () => {
  return (
    <div className="h-screen w-full">
      {/* change industry hero to services hero to make all things align  and also add specific componnet degain */}
      <ServisesHero
        isAiml={false}
        title={"Secure and Reliable Cloud Services"}
        discriptions={`"Powering Your Business with Cloud Confidence"`}
        background={imge}
        button={"Get in touch"}
      />

      <ServisesDataMap datas={cloudServiseDatas} />

      <ServisesOtherSections />
    </div>
  );
};

export default CloudServices;
