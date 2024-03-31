import formGif from "../assets/form.gif";
import bulbGif from "../assets/bulb.gif";
import wheelGif from "../assets/wheel.gif";

const CreateCompaign = () => {
  return (
    <>
      <div className="bg-[#F3CB3B] min-h-[75vh] py-12">
        <h1 className="font-semibold text-6xl text-center uppercase font-rubik">
          Create Compaign
        </h1>
        <div className="relative">
          <div className="absolute left-[48%] top-[10%] translate-x-[-50%] z-30">
            <img src={bulbGif} className="max-w-[220px]" alt="Buld" />
          </div>
          <div className="absolute z-20 left-[55%] translate-x-[-50%] mt-[10%]">
            <img src={formGif} className="max-w-[400px]" alt="form gif" />
          </div>
          <div className="absolute z-20 left-[40%] mt-[14%] translate-x-[-50%]">
            <img src={wheelGif} className="max-w-[210px]" alt="wheel gif" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompaign;
