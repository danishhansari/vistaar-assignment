import createCampaign1 from "../assets/createCampaign1.png";
import selectImg1 from "../assets/campaign.png";
import selectImg2 from "../assets/marketing.png";
import selectImg3 from "../assets/hourglass.png";
import selectImg4 from "../assets/communicate.png";
import selectImg5 from "../assets/flag.png";
import SelectCampaignType from "../components/SelectCampaignType";
import DataFields from "./DataFields";
import CampaignDuration from "./CampaignDuration";
import ContactDetails from "./ContactDetails";
import Done from "./Done";
import { useState } from "react";

const selectionData = [
  { img: selectImg1, text: "Select campaign types" },
  { img: selectImg2, text: "Select data fields to be collected" },
  { img: selectImg3, text: "Select Duration of campaign" },
  { img: selectImg4, text: "Contact details" },
  { img: selectImg5, text: "Completed" },
];

const HandlePageChange = ({ indexval, fn }) => {
  if (indexval === 0) {
    return <SelectCampaignType fn={fn} />;
  }
  if (indexval === 1) {
    return <DataFields fn={fn} />;
  }
  if (indexval === 2) {
    return <CampaignDuration fn={fn} />;
  }
  if (indexval === 3) {
    return <ContactDetails fn={fn} />;
  }
  if (indexval === 4) {
    return <Done fn={fn} />;
  }
};

const SelectCampaign = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-[#4700FF] py-4 px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full">
            <img src={createCampaign1} className="w-[250px] ml-36" alt="img" />
            <ul className="ml-24">
              {selectionData.map((select, i) => {
                return (
                  <li
                    key={i}
                    className={`my-12 flex gap-4 items-center kanik text-3xl font-semibold ${
                      count === i ? "text-white" : "text-gray-400"
                    }`}
                  >
                    <img className={`w-16`} src={select.img} />
                    {select.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full">
            <HandlePageChange indexval={count} fn={setCount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCampaign;
