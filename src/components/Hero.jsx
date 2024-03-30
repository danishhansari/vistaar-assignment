import { useState } from "react";
import logo from "../assets/footer-logo.png";
import heroImg from "../assets/heroImg.png";
import soundGif from "../assets/sound.gif";
import strokeImg from "../assets/stroke.png";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        className={`h-auto w-full md:h-[100vh] bg-[#FF007F] ${
          !visible
            ? "hidden sticky top-0 left-0 overflow-x-hidden overflow-y-hidden"
            : ""
        }`}
      >
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <ul className="text-[4rem] text-white  kanik ml-16 ">
              <li
                className="border-b-4 inline-block cursor-pointer my-4"
                onClick={() => setVisible((prev) => !prev)}
              >
                Home
              </li>
              <li onClick={() => setVisible((prev) => !prev)} className="cursor-pointer my-4">
                Campaign Ideas
              </li>
              <li onClick={() => setVisible((prev) => !prev)} className="cursor-pointer my-4">
                Metric Measures
              </li>
              <li onClick={() => setVisible((prev) => !prev)} className="cursor-pointer my-4">
                Create Campaign
              </li>
            </ul>
          </div>
          <div className="border-l-4 px-6 border-white h-auto md:h-[100vh] flex items-center justify-center">
            <button
              className="text-6xl text-white"
              onClick={() => setVisible((prev) => !prev)}
            >
              &times;
            </button>
          </div>
        </div>
      </div>

      <div className="h-auto md:h-[95vh] bg-[#5BD7E8] border-bottom">
        <div className="flex">
          <div className="flex-1">
            <img src={logo} className="w-[220px] ml-[6rem]" alt="" />

            <div>
              <div className="flex flex-col md:flex-row items-center justify-center max-w-[1800px] mx-auto">
                <div className="text relative tilt">
                  <h1 className="text-[#4700FF] uppercase font-bold rubik text-2xl md:text-8xl tracking-0 my-4">
                    make your
                  </h1>
                  <h2 className="uppercase rubik text-8xl text-white add-shadow my-2 ml-40">
                    brand
                    <img
                      src={soundGif}
                      className="absolute right-[20%] top-12 w-40"
                      alt=""
                    />
                  </h2>
                  <h3 className="ml-32 uppercase text-7xl text-[#ff007f] rubik">
                    standout
                  </h3>
                </div>
                <div>
                  <img src={heroImg} className="w-full md:w-[800px]" alt="" />
                </div>
              </div>
              <div className="relative">
                <h1 className="text-[#4A0292] kanit text-4xl font-semibold text-center relative z-20">
                  Unleast your Brand Power
                </h1>
                <img
                  src={strokeImg}
                  className="absolute top-[-150%] left-[50%] w-[300px] z-10"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="border-l-4   px-8 border-[#FF007F] h-auto md:h-[95vh] flex items-center justify-center">
            <button
              className="text-4xl text-[#FF007F]"
              onClick={() => setVisible((prev) => !prev)}
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
