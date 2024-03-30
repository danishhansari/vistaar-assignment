import logoLight from "../assets/logo-light.jpg";
import campaignIdeas1 from "../assets/campaignIdeas1.png";
const CampaignIdeasPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex gap-[25rem]">
          <img className="w-[250px]" src={logoLight} alt="" />
          <h1 className="text-6xl mt-12 text-[#FF018F] rubik font-normal">
            Campaign Ideas
          </h1>
        </div>

        <div className="flex px-4 w-full items-center justify-between">

          <div>
            <h1 className="kanik mt-4 text-6xl font-semibold text-[#4700FF]">Photo Activity (Pictivatr)</h1>
            <p className="text-xl w-[50%] tracking-wide leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore{" "}
            </p>
          </div>

          <div>
            <img className="w-[1850px] mr-[-12rem]" src={campaignIdeas1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignIdeasPage;
