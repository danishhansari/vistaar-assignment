import impressionGif from "../assets/impression.gif";
import engagementGif from "../assets/engagement.gif";
import socialMediaFollowerGif from "../assets/social-media-follower.gif";
import leadsAndSalesGif from "../assets/leads-and-sales.gif";
import brandAwarenessGif from "../assets/brand-awareness.gif";
import analyticsLeaderBoardGif from "../assets/analytics-leaderboard.gif";
import { useState } from "react";

const data = [
  {
    gif: impressionGif,
    heading: "Impression",
    text: "The number of people who have seen your campaign.",
  },
  {
    gif: engagementGif,
    heading: "Engagement",
    text: "The level of interaction your campaign has received, such as clicks, likes, shares, and comments.",
  },
  {
    gif: socialMediaFollowerGif,
    heading: "Social Media Follower",
    text: " The increase in social media followers your campaign has generated.",
  },
  {
    gif: leadsAndSalesGif,
    heading: "Leads and Sales",
    text: "The number of leads and sales your campaign has generated.",
  },
  {
    gif: brandAwarenessGif,
    heading: "Brand Awareness",
    text: "The impact your campaign has had on increasing brand recognition and awareness.",
  },
  {
    gif: analyticsLeaderBoardGif,
    heading: "Analytics + Leaderboard",
    text: "Get detailed analytics of campaign performance with leaderboard based on customer engagement",
  },
];

const MetricMeasure = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="flex justify-between px-8 md:px-24 pt-8 md:py-24 bg-[#f2dafb]">
        <div className="text flex-1 flex gap-0 items-center justify-center">
          <h1 className="rotate-[-90deg] text-sm md:text-6xl uppercase text-[#9e04c5] add-shadow-2 rubik font-bold text-center ">
            metric
            <br />
            measures
          </h1>
        </div>

        <div>
          <div className="flex flex-2 gap-8 h-[50vh] md:h-[80vh]">
            {currentIndex > 0 && (
              <div className="bg-[#9E04C5] p-6 rounded-3xl ">
                <div
                  className={
                    currentIndex - 1 === 4
                      ? "unique-border-2 flex items-center justify-center"
                      : currentIndex - 1 === 1 ||
                        currentIndex - 1 === 3 ||
                        currentIndex - 1 === 5
                      ? "unique-border flex items-center justify-center"
                      : "flex items-center justify-center"
                  }
                >
                  <img
                    src={data[currentIndex - 1].gif}
                    className="max-w-[180px] w-full"
                    alt="Paragraph"
                  />
                </div>
                <h1 className="rotate-[-90deg] text-sm md:text-2xl text-white translate-x-0 translate-y-[100px] md:translate-y-[180px] kanik font-bold text-center">
                  {data[currentIndex - 1].heading}
                </h1>
              </div>
            )}
            <div className="bg-[#9E04C5] p-6 rounded-3xl flex flex-col justify-center items-center h-full">
              <div
                className={
                  currentIndex === 4
                    ? "unique-border-2 flex items-center justify-center max-w-[380px]"
                    : currentIndex === 1 ||
                      currentIndex === 5 ||
                      currentIndex === 3
                    ? "unique-border flex items-center justify-center max-w-[380px]"
                    : "flex items-center justify-center"
                }
              >
                <img src={data[currentIndex].gif} alt="Paragraph" />
              </div>
              <h1 className="kanik text-4xl font-bold text-white my-4">
                {data[currentIndex].heading}
              </h1>
              <p className="max-w-[400px] w-full text-center kanik text-xl font-bold text-white">
                {data[currentIndex].text}
              </p>
            </div>

            {currentIndex < data.length - 1 && (
              <div className="bg-[#9E04C5] p-6 rounded-3xl">
                <div
                  className={
                    currentIndex + 1 === 4
                      ? "unique-border-2 flex items-center justify-center"
                      : currentIndex + 1 === 1 ||
                        currentIndex + 1 === 3 ||
                        currentIndex + 1 === 5
                      ? "unique-border flex items-center justify-center"
                      : "flex items-center justify-center"
                  }
                >
                  <img
                    src={data[currentIndex + 1].gif}
                    className="max-w-[180px] w-full"
                    alt="Paragraph"
                  />
                </div>
                <h1 className="rotate-[-90deg] text-sm md:text-2xl text-white translate-x-0 translate-y-[100px] md:translate-y-[200px] kanik font-bold text-center">
                  {data[currentIndex + 1].heading}
                </h1>
              </div>
            )}

            {currentIndex === 0 && (
              <div className="bg-[#9E04C5] p-6 rounded-3xl">
                <div
                  className={
                    currentIndex + 1 === 1 ||
                    currentIndex + 1 === 4 ||
                    currentIndex + 1 === 3 ||
                    currentIndex + 1 === 5
                      ? "unique-border flex items-center justify-center"
                      : "flex items-center justify-center"
                  }
                >
                  <img
                    src={data[currentIndex + 2].gif}
                    className="max-w-[180px] w-full"
                    alt="Paragraph"
                  />
                </div>
                <h1 className="rotate-[-90deg] text-sm md:text-2xl text-white translate-x-0 translate-y-[100px] md:translate-y-[200px] kanik font-bold text-center">
                  {data[currentIndex + 2].heading}
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end bg-[#f2dafb] px-8 md:px-24 pb-12">
        {data.map((_item, i) => {
          return (
            <div
              key={i}
              className={`w-[20px] h-[20px] rounded-full m-1 inline-block ${
                currentIndex === i ? "bg-[#9e04c5]" : "bg-[#9f8dcf]"
              } `}
            ></div>
          );
        })}
        {currentIndex === data.length - 1 && (
          <button
            onClick={() => setCurrentIndex(0)}
            className="underline text-[#9e04c5]  underline-[#9e04c5] text-xl ml-8 py-2 px-3"
          >
            Go Back
          </button>
        )}
        {currentIndex < data.length - 1 && (
          <button
            className="ml-8 text-4xl bg-black text-white py-2 px-3 rounded-full hover:bg-gray-900 inline-flex items-center justify-center"
            onClick={() =>
              setCurrentIndex((prev) => {
                return prev === data.length - 1 ? 1 : prev + 1;
              })
            }
          >
            &rarr;
          </button>
        )}
      </div>
    </>
  );
};

export default MetricMeasure;
