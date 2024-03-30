import pictivatrImg from "../assets/pictivatr.jpeg";
import pledgeImg from "../assets/pledge.png";
import surveyImg from "../assets/survey.png";
import quizImg from "../assets/quiz.png";
import videoBasedQuizImg from "../assets/video-based-quiz.png";
import glamificationImg from "../assets/gamification.png";
import educationIdeasImg from "../assets/education-ideas.jpeg";

const SelectCampaignType = () => {
  return (
    <>
      <div className="bg-white rounded-[3rem] relative">
        <h1 className="py-2 text-center kanik uppercase text-4xl text-[#3D159F] font-semibold ">
          Select Campaign Type
        </h1>

        <div className="campaign-grid grid gap-y-8 gap-x-[4rem] grid-cols-9">
          <div className="first-cols">
            <div className="w-[100px] flex relative items-center justify-center">
              <div className="h-[100px] border-[#3d159f70]">
                <img
                  src={pictivatrImg}
                  className="object-fit absolute left-1/2"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-2xl font-bold">Picitivatr</p>
          </div>

          <div className="second-cols">
            <div className="w-[100px] flex relative items-center justify-center">
              <div className="h-[100px] border-[#3d159f70]">
                <img
                  src={pledgeImg}
                  className="object-fit absolute left-1/2"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-2xl font-bold">Pledge</p>
          </div>

          <div className="third-cols">
            <div className="w-[150px] flex relative items-center justify-center">
              <div className="h-[100px] border-[#3d159f70]">
                <img
                  src={surveyImg}
                  className="object-fit absolute left-6"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-2xl font-bold">Survey</p>
          </div>

          <div className="first-cols">
            <div className="w-[100px] flex relative items-center justify-center">
              <div className="h-[100px] border-[#3d159f70]">
                <img
                  src={quizImg}
                  className="object-fit absolute left-1/2"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-2xl font-bold">Quiz</p>
          </div>

          <div className="second-cols">
            <div className="w-[100px] flex relative items-center justify-center">
              <div className="h-[100px] border-[#3d159f70]">
                <img
                  src={videoBasedQuizImg}
                  className="object-fit absolute left-1/2"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-2xl font-bold">Video Based Quiz</p>
          </div>

          <div className="third-cols">
            <div className="w-[100px] flex relative items-center justify-center">
              <div className="h-[100px] border-[#3d159f70]">
                <img
                  src={glamificationImg}
                  className="object-fit absolute left-1/2"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-2xl font-bold">Glamification</p>
          </div>

          <div className="first-cols">
            <div className="w-[100px] flex relative items-center justify-center">
              <div className="h-[100px] border-[#3d159f70]">
                <img
                  src={educationIdeasImg}
                  className="object-fit absolute left-1/2"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-2xl font-bold">Education Ideas</p>
          </div>
        </div>

        <button className="text-center text-white bg-[#4700FF] text-2xl font-bold py-2 px-8 my-2 mx-auto absolute bottom-0 left-1/2">Next</button>
      </div>
    </>
  );
};

export default SelectCampaignType;
