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
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <>
      <div className="flex gap-4">
        {currentIndex > 0 && (
          <div>
            <img src={data[currentIndex - 1].gif} alt="Paragraph" />
            <h1>{data[currentIndex - 1].heading}</h1>
            <p>{data[currentIndex - 1].text}</p>
          </div>
        )}
        <div className="bg-red-400">
          <img src={data[currentIndex].gif} alt="Paragraph" />
          <h1>{data[currentIndex].heading}</h1>
          <p>{data[currentIndex].text}</p>
        </div>
        {currentIndex < data.length - 1 && (
          <div>
            <img src={data[currentIndex + 1].gif} alt="Paragraph" />
            <h1>{data[currentIndex + 1].heading}</h1>
            <p>{data[currentIndex + 1].text}</p>
          </div>
        )}
      </div>
      {currentIndex === data.length - 1 && (
        <button onClick={() => setCurrentIndex(1)}>Go Back</button>
      )}
      {currentIndex < data.length - 1 && (
        <button
          onClick={() =>
            setCurrentIndex((prev) => {
              return prev === data.length - 1 ? 1 : prev + 1;
            })
          }
        >
          Next
        </button>
      )}
    </>
  );
};

export default MetricMeasure;
