import contactImg from "../assets/contact.png";
const ContactDetails = ({fn}) => {
  return (
    <>
      <div className="bg-white rounded-[3rem] relative pb-24">
        <h1 className="py-4 text-center kanik w-[50%] mx-auto uppercase text-4xl text-[#3D159F] font-semibold ">
          Select Data Fields to be collected
        </h1>

        <div className="flex items-center justify-center">
          <div className="form">
            <div className="flex flex-col w-full ">
              <label
                htmlFor="name"
                className="text-[#3D159F] kanik text-lg font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                className="border-2 outline-none resize-none w-[70%] border-[#3D159F] pl-1 py-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full my-2">
              <label
                htmlFor="name"
                className="text-[#3D159F] kanik text-lg font-semibold"
              >
                Contact No
              </label>
              <input
                type="text"
                className="border-2 outline-none resize-none w-[70%] border-[#3D159F] pl-1 py-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="text-[#3D159F] kanik text-lg font-semibold"
              >
                Purpose of campaign
              </label>
              <textarea
                type="text"
                className="border-2 w-[90%] outline-none resize-none border-[#3D159F] rounded-lg p-2"
                rows={4}
              />
            </div>
          </div>
          <div className="img">
            <img src={contactImg} className="max-w-[500px]" alt="" />
          </div>
        </div>

        <div className=" absolute bottom-0 left-2/3">
          <button className="mr-4 text-2xl text-[#4700ff] font-semibold underline" onClick={() => fn(prev => prev-1)}>
            Go Back
          </button>
          <button className="text-center text-white bg-[#4700FF] text-2xl font-bold py-2 px-8 my-2 mx-auto uppercase" onClick={() => fn(prev => prev+1)}>
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
