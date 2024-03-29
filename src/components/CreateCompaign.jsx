import formGif from "../assets/form.gif";
import bulbGif from "../assets/bulb.gif";
import wheelGif from "../assets/wheel.gif";

const CreateCompaign = () => {
  return (
    <>
      <div className="bg-[#F3CB3B] h-[80vh] py-12">
        <h1 className="font-semibold text-6xl text-center uppercase font-rubik">
          Create Compaign
        </h1>
        <div className="relative">
          <div className="absolute left-[48%] top-[40px] translate-x-[-50%] z-30">
            <img src={bulbGif} className="w-[220px]" alt="Buld" />
          </div>
          <div className="absolute z-30 left-[55%] translate-x-[-50%] top-[220px]">
            <img src={formGif} className="w-[400px]" alt="form gif" />
          </div>
          <div className="absolute z-30 left-[33%] top-[300px] translate-x-[50%]">
            <img src={wheelGif} className="w-[210px]" alt="wheel gif" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompaign;
