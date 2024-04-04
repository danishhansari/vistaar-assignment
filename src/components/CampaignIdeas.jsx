import { useState, useEffect } from "react";
import campaign1 from "../assets/campaign1.png";
import campaign2 from "../assets/campaign2.png";
import campaign3 from "../assets/campaign3.png";
import campaign4 from "../assets/campaign4.png";
import campaign5 from "../assets/campaign5.png";
import campaign6 from "../assets/campaign6.png";
import campaign7 from "../assets/campaign7.png";
import { useNavigate } from "react-router-dom";

const imgArr = [
  campaign1,
  campaign2,
  campaign3,
  campaign4,
  campaign5,
  campaign6,
  campaign7,
];

const CampaignIdeas = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === imgArr.length - 1) {
        setCount(0);
      } else {
        setCount((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [count]);

  const redirectPage = () => {
    navigate("/campaign-ideas");
  };

  return (
    <>
      <div className="h-auto md:min-h-[95vh]  bg-[#FF007F] py-12 relative">
        <h1 className="font-semibold text-6xl text-center uppercase font-rubik-inverse">
          Compaign Ideas
        </h1>

        <div className="relative flex flex-col">
          <img
            src={imgArr[count]}
            className="max-w-[550px] mx-auto transition-all animation w-full"
            alt=""
          />
          <div className="self-center">
            <button
              onClick={redirectPage}
              className="bg-[#F3CB3B] text-black text-4xl px-12 py-3 font-semibold rounded-lg"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignIdeas;
