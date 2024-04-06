import formGif from "../assets/form.gif";
import bulbGif from "../assets/bulb.gif";
import wheelGif from "../assets/wheel.gif";

const CreateCompaign = () => {
  return (
    <>
      <div className="bg-[#F3CB3B] h-auto md:min-h-[75vh] py-12 flex flex-col items-center">
        <h1 className="font-semibold text-6xl text-center uppercase font-rubik">
          Create Compaign
        </h1>

        <div className="relative h-full">
          <img
            src={bulbGif}
            className="max-w-[250px] w-full mx-auto"
            alt="Buld"
          />
          <div className="flex gap-0 items-center justify-center">
            <img
              src={wheelGif}
              className="max-w-[200px] w-full"
              alt="wheel gif"
            />
            <img
              src={formGif}
              className="max-w-[380px] w-full"
              alt="form gif"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompaign;
