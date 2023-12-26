import about from "@assets/shakehand.png";

const About = () => {
  return (
    <>
      <div className=" homeAboutFirstDiv ">
        <div className="homeAboutSecondDiv ">
          <div className="homeAboutThirdDiv ">
            <h1 className=" homeAboutH1">we are believers,</h1>
            <h2 className=" homeAboutH2">
              of the human{" "}
              <span className="font-gilroy-light  italic">touch</span>.
            </h2>
          </div>
          <div className=" lg:hidden">
            <img src={about} width={700} />
          </div>
          <p className="homeAboutP">
            That’s why, we at hubnex create solutions that matters. We are not
            the beasts hungry for every bit of market, but we value time,
            efforts and emotions as well. We create with the intention of
            sustaining the product in the market for longer than imagined. We
            are believers. We believe in you and your potential to break the
            trend.
          </p>
        </div>
        <div className="w-[1079px]  h-full hidden lg:flex">
          <img
            src={about}
            alt="about"
            className="h-full lg:ml-10 xl:ml-20 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default About;
