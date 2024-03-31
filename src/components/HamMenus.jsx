const HamMenus = ({ fn }) => {
  return (
    <>
      <div className="h-auto w-full bg-[#FF007F]  fixed top-0 left-0 add-overflow z-50">
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <ul className="text-[4rem] text-white  kanik ml-16 ">
              <li
                className="border-b-4 inline-block cursor-pointer my-4"
                onClick={() => fn((prev) => !prev)}
              >
                Home
              </li>
              <li
                onClick={() => fn((prev) => !prev)}
                className="cursor-pointer my-4"
              >
                Campaign Ideas
              </li>
              <li
                onClick={() => fn((prev) => !prev)}
                className="cursor-pointer my-4"
              >
                Metric Measures
              </li>
              <li
                onClick={() => fn((prev) => !prev)}
                className="cursor-pointer my-4"
              >
                Create Campaign
              </li>
            </ul>
          </div>
          <div className="border-l-4 px-6 border-white h-auto md:h-[100vh] flex items-center justify-center">
            <button
              className="text-6xl text-white"
              onClick={() => fn((prev) => !prev)}
            >
              &times;
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default HamMenus;
