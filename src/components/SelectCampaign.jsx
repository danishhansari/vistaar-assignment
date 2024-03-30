import createCampaign1 from "../assets/createCampaign1.png";
import selectImg1 from "../assets/campaign.png";
import selectImg2 from "../assets/marketing.png";
import selectImg3 from "../assets/hourglass.png";
import selectImg4 from "../assets/communicate.png";
import selectImg5 from "../assets/flag.png";
import SelectCampaignType from "../components/SelectCampaignType";

const selectionData = [
  { img: selectImg1, text: "Select campaign types" },
  { img: selectImg2, text: "Select data fields to be collected" },
  { img: selectImg3, text: "Select Duration of campaign" },
  { img: selectImg4, text: "Contact details" },
  { img: selectImg5, text: "Completed" },
];

const SelectCampaign = () => {
  return (
    <>
      <div className="bg-[#4700FF] h-auto md:min-h-screen px-8">
        <div className="flex items-center">
          <div className="w-full">
            <img src={createCampaign1} className="w-[250px] ml-36" alt="img" />
            <ul className="ml-24">
              {selectionData.map((select, i) => {
                return (
                  <li
                    key={i}
                    className="my-12 flex gap-4 items-center text-gray-200 kanik text-3xl font-semibold"
                  >
                    <img className={`w-16`} src={select.img} />
                    {select.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full">
            <SelectCampaignType />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCampaign;
