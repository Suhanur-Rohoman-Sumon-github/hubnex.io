import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import iphone from "@assets/iphoneTransparent.png";
import service1 from "@assets/service1.png";
import service2 from "@assets/service2.png";
import service3 from "@assets/service3.png";
import service4 from "@assets/service4.png";
import { Link } from "react-router-dom";

const Services = () => {
  const images = [
    {
      id: 1,
      url: service1,
    },
    {
      id: 2,
      url: service2,
      bg: "bg-[#F54D57]",
    },
    {
      id: 3,
      url: service3,
      bg: "bg-[#F9DE54]",
    },
    {
      id: 4,
      url: service4,
      bg: "bg-[#A45DBD]",
    },
  ];

  const [slide, setSlide] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlide((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );
    return () => {
      resetTimeout();
    };
  }, [slide]);

  return (
    <div className="homeServicesFirstDiv">
      <div className="homeServicesSecondDiv">
        <div className=" homeServicesThirdDiv">
          <h2 className=" homeServicesH1">let us build it for you.</h2>
          <div className=" homeServicesForthDiv">
            <div className=" homeServicesFifthDiv">
              <Link to="service" className="mb-10 z-10 w-full h-full">
                <img src={iphone} />
              </Link>
              <div
                style={{ transform: `translate3d(${-slide * 100}%, 0, 0)` }}
                className=" h-full w-full whitespace-nowrap absolute transition ease-in-out duration-1000"
              >
                {images.map((image) => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt="services"
                    className={` ${image.bg} w-full h-full inline-block object-contain`}
                  />
                ))}
              </div>
            </div>
            <div className=" h-3 rounded-full w-32 mt-5  bg-gray-300 overflow-hidden">
              {images.map((image) => (
                <div
                  key={image.id}
                  style={{ transform: `translate3d(${slide * 132}%, 0, 0)` }}
                  className="h-full rounded-full w-[20%] bg-slate-500 transition ease-linear duration-1000"
                ></div>
              ))}
            </div>
          </div>

          <div className=" homeServicesSixDiv">
            <p className=" homeServicesSecondP">
              providing you industry level
              <br /> solutions to cater your needs and <br /> help you become
              the next big
              <br /> thing
            </p>
            <Link
              to="/contact"
              className="w-max bg-black text-xs md:text-[20px] text-white py-2 md:py-[15px] px-5 rounded-full"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="homeServicesSevenDiv  ">
          <div className="homeServicesEightDiv">
            <Link to="service" className=" z-10 w-full h-full">
              <img src={iphone} />
            </Link>
            <div
              style={{ transform: `translate3d(${-slide * 100}%, 0, 0)` }}
              className=" h-full md:w-[300px] xl:w-[250px] whitespace-nowrap absolute transition ease-in-out duration-1000"
            >
              {images.map((image) => (
                <img
                  src={image.url}
                  alt="services"
                  className={` ${image.bg} w-full h-full inline-block object-contain `}
                />
              ))}
            </div>
          </div>
          <div className="homeServicesNineDiv">
            {images.map((image) => (
              <div
                style={{ transform: `translate3d(${slide * 132}%, 0, 0)` }}
                className="h-full rounded-full w-[53px] bg-slate-500 transition ease-linear duration-1000"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
