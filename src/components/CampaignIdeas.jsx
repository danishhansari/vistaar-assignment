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
      <div className="min-h-[95vh] bg-[#FF007F] py-12 relative">
        <h1 className="font-semibold text-6xl text-center uppercase font-rubik-inverse">
          Compaign Ideas
        </h1>

        <div className="relative ">
          <img
            src={imgArr[count]}
            className="w-[550px] absolute left-[50%] translate-x-[-50%] transition-all animation"
            alt=""
          />
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] bottom-16">
          <button
            onClick={redirectPage}
            className="bg-[#F3CB3B] text-black text-4xl px-12 py-3 font-semibold rounded-lg"
          >
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default CampaignIdeas;
