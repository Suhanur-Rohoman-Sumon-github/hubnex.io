import React, { useEffect, useRef, useState } from "react";
import ServisesOtherSections from "../../components/serviceUpdated/servisesHeros/ServisesOtherSections";
import ServisesDataMap from "../../components/serviceUpdated/servisesHeros/ServisesDataMap";
import ServisesHero from "../../components/serviceUpdated/servisesHeros/ServisesHero";
import { digitalMarketingDatas } from "../../data/data";
import imge from "../../assets/serv5.png";

const DigitalMarketing = () => {
  return (
    <div className="h-screen w-full">
      {/* change industry hero to services hero to make all things align and also add specific componnet degain  */}
      <ServisesHero
        isAiml={false}
        title={"Mastering SEO for Digital Marketing Success"}
        discriptions={`"Enhancing Your Site's Performance and User Experience"`}
        background={imge}
        button={"Get in touch"}
      />

      <ServisesDataMap datas={digitalMarketingDatas} />

      <ServisesOtherSections />
    </div>
  );
};

export default DigitalMarketing;
