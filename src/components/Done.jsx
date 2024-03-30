import doneImg from "../assets/done.png";
const Done = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden bg-[#4700FF] fixed top-0 left-0 z-30 flex items-center flex-col justify-center">
        <h1 className="uppercase text-5xl kanik font-bold text-white">
          activatr team will reachout soon
        </h1>
        <img src={doneImg} alt="Done" />
        <button className="text-[#4700FF] bg-white text-3xl font-semibold py-2 px-16 rounded-lg mt-8">
          Done
        </button>
      </div>
    </>
  );
};

export default Done;
