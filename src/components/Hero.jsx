import { useState } from "react";
import logo from "../assets/logo-invert.png";
import heroImg from "../assets/heroImg.png";
import soundGif from "../assets/sound.gif";
import strokeImg from "../assets/stroke.png";
import HamMenus from "./HamMenus";
import curlLine from "../assets/curl-line.png";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible ? <HamMenus fn={setVisible} /> : ""}

      <div className="bg-[#5bd7e8]">
        <div className="flex border-b-4 border-black">
          <div className="content flex-1">
            <img src={logo} className="max-w-[200px] w-full" alt="Logo" />

            <div className="flex justify-between px-4">
              <div className="text tilt ml-28">
                <h1 className="text-[#4700FF] uppercase font-bold rubik text-2xl md:text-8xl tracking-0 leading-none text-right">
                  make your
                </h1>

                <div className="relative">
                  <h2 className="uppercase rubik text-[11rem] text-white add-shadow text-right leading-none">
                    brand
                  </h2>

                  <img
                    src={soundGif}
                    className="w-64 absolute bottom-[2rem] right-[-9rem]"
                    alt=""
                  />
                </div>

                <h3 className="uppercase text-8xl text-[#ff007f] rubik text-right">
                  standout
                </h3>
              </div>

              <div className="img">
                <img src={heroImg} className="w-full max-w-full" alt="" />
              </div>
            </div>

            <div className="relative h-[150px] flex justify-between items-center">
              <h1 className="text-[#4A0292] kanit text-5xl mx-auto font-semibold text-center italic relative z-20">
                Unleast your Brand Power
              </h1>
              <img
                src={strokeImg}
                className="max-w-[300px] w-full stroke-img"
                alt=""
              />
              <img src={curlLine} className="w-48 curl-line" alt="line" />
            </div>
          </div>

          <div className="border-l-4 border-[#FF007F] flex items-center justify-center px-8">
            <button
              className="text-4xl text-[#FF007F]"
              onClick={() => setVisible((prev) => !prev)}
            >
              &#9776;
            </button>
          </div>
        </div>

        <div className="headings flex justify-around text-3xl uppercase rubik tracking-wider py-6 border-b-4 border-black italic">
          <h1 className="text-[#9E04C5] move">drive sales</h1>
          <h1 className="text-[#4700FF] move">grab attention</h1>
          <h1 className="text-[#FF018F] move">ignite buzz</h1>
          <h1 className="text-[#9E04C5] move">drive sales</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
