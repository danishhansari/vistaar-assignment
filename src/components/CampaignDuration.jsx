import downArrow from "../assets/down-arrow.png";
import calender from "../assets/calender.png";

const CampaignDuration = ({fn}) => {
  return (
    <>
      <div className="bg-white rounded-[3rem] relative pb-24">
        <h1 className="py-4 text-center kanik w-[50%] mx-auto uppercase text-4xl text-[#3D159F] font-semibold ">
          Select Data Fields to be collected
        </h1>

        <div className="relative">
          <h1 className="text-center text-black text-3xl kanik">Pick a time</h1>
          <div className="flex items-center mx-auto px-4 my-2 text-center bg-[#3D159F69] w-[130px]">
            <h1 className="text-center">12:00</h1>
            <img src={downArrow} alt="down Arrow" />
          </div>
          <img src={calender} alt="calender" className="mx-auto my-12" />
        </div>

        <div className=" absolute bottom-0 left-2/3">
        <button className="mr-4 text-2xl text-[#4700ff] font-semibold underline" onClick={() => fn(prev => prev-1)}>Go Back</button>
        <button className="text-center text-white bg-[#4700FF] text-2xl font-bold py-2 px-8 my-2 mx-auto" onClick={() => fn(prev => prev+1)} >
          Next
        </button>
          
        </div>
      </div>
    </>
  );
};

export default CampaignDuration;
