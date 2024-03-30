import impressionImg from "../assets/impression.png";
import engagementImg from "../assets/engagement.png";
import socialMediaFollowerImg from "../assets/social-media-follower.png";
import leadsAndSalesImg from "../assets/leads-and-sales.png";
import brandAwarenessImg from "../assets/brand-awareness.png";
import analyticsImg from "../assets/analytics.png";
const DataFields = ({fn}) => {
  return (
    <div className="bg-white rounded-[3rem] relative pb-24">
      <h1 className="py-4 text-center kanik w-[50%] mx-auto uppercase text-4xl text-[#3D159F] font-semibold ">
        Select Data Fields to be collected
      </h1>

      <div className="campaign-grid grid gap-y-8 gap-x-[4rem] grid-cols-9">
        <div className="first-cols">
          <div className="w-[100px] flex relative items-center justify-center">
            <div className="h-[100px] border-[#3d159f70]">
              <img
                src={impressionImg}
                className="object-fit absolute left-1/2"
                alt=""
              />
            </div>
          </div>
          <p className="text-center text-2xl font-bold">Impression</p>
        </div>

        <div className="second-cols">
          <div className="w-[100px] flex relative items-center justify-center">
            <div className="h-[100px] border-[#3d159f70]">
              <img
                src={engagementImg}
                className="object-fit absolute left-1/2"
                alt=""
              />
            </div>
          </div>
          <p className="text-center text-2xl font-bold">Engagement</p>
        </div>

        <div className="third-cols">
          <div className="w-[100px] flex relative items-center justify-center">
            <div className="h-[100px] border-[#3d159f70]">
              <img
                src={socialMediaFollowerImg}
                className="object-fit absolute left-6"
                alt=""
              />
            </div>
          </div>
          <p className="text-center text-2xl font-bold">
            Social Media Followers
          </p>
        </div>

        <div className="first-cols">
          <div className="w-[100px] flex relative items-center justify-center">
            <div className="h-[100px] border-[#3d159f70]">
              <img
                src={leadsAndSalesImg}
                className="object-fit absolute left-1/2"
                alt=""
              />
            </div>
          </div>
          <p className="text-center text-2xl font-bold">Leads And Sales</p>
        </div>

        <div className="second-cols">
          <div className="w-[100px] flex relative items-center justify-center">
            <div className="h-[100px] border-[#3d159f70]">
              <img
                src={brandAwarenessImg}
                className="object-fit absolute left-1/2"
                alt=""
              />
            </div>
          </div>
          <p className="text-center text-2xl font-bold">Brand Awareness</p>
        </div>

        <div className="third-cols">
          <div className="w-[100px] flex relative items-center justify-center">
            <div className="h-[100px] border-[#3d159f70]">
              <img
                src={analyticsImg}
                className="object-fit absolute left-1/2"
                alt=""
              />
            </div>
          </div>
          <p className="text-center text-2xl font-bold">
            Analytics + Leaderboard
          </p>
        </div>
      </div>

      <div className=" absolute bottom-0 left-2/3">
        <button className="mr-4 text-2xl text-[#4700ff] font-semibold underline" onClick={() => fn(prev => prev-1)}>Go Back</button>
        <button className="text-center text-white bg-[#4700FF] text-2xl font-bold py-2 px-8 my-2 mx-auto" onClick={() => fn(prev => prev+1)} >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataFields;
