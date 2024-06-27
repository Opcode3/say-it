import { useState } from "react";
import SurveyLayout from "../../components/layout/SurveyLayout";
import { ArrowLeft, ArrowRight, Mic, PlayIcon } from "lucide-react";
import AudioResponse from "../../components/ui/AudioResponse";
import TextAreaWLabel from "../../components/form/TextareaWLabel";

const ResponseSurvey = () => {
  const presentationItem = ["Audio", "Textual"];

  const [presentationStatus, setPresentationStatus] = useState<number>(0);

  return (
    <SurveyLayout>
      <div className=" flex flex-col justify-between h-full">
        <h1 className=" font-raleway text-2xl font-semibold">Survey Title</h1>
        <div className=" h-full overflow-hidden flex flex-col justify-center items-center">
          <ul className="flex mb-10 bg-gray-200 border-gray-200 border overflow-hidden rounded-lg">
            {presentationItem.map((item, index) => (
              <li
                key={index}
                onClick={() => setPresentationStatus(index)}
                className={`py-2 px-4 text-sm transition-all cursor-pointer ${
                  presentationStatus == index ? " bg-gray-50" : ""
                } `}
              >
                {item}
              </li>
            ))}
          </ul>

          {presentationStatus == 0 ? (
            <div className=" w-fit flex flex-col  gap-3">
              <div className=" grid grid-cols-2 bg-white border  rounded-lg">
                <div className=" relative flex flex-col border-r w-[120px] pb-6 pt-9 justify-center items-center gap-2">
                  <span className=" absolute top-0 left-0 bg-gray-100 text-[10px] py-[2px] px-[6px] rounded-r">
                    Question
                  </span>
                  <div className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-purple-200">
                    <PlayIcon
                      fill="#1e1e20"
                      stroke="#1e1e20"
                      strokeWidth={1}
                      size={20}
                    />
                  </div>
                  <span className="text-xs text-gray-500">00:11:20</span>
                </div>

                <div className=" flex flex-col w-[120px] justify-center pb-6 pt-9 items-center gap-2 relative">
                  <span className=" absolute top-0 left-0 bg-gray-100 text-[10px] py-[2px] px-[6px] rounded-r">
                    Response
                  </span>
                  <div className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-purple-400">
                    <Mic stroke="#fff" strokeWidth={1} size={20} />
                  </div>
                  <span className="text-xs text-gray-500">00:11:20</span>
                </div>
              </div>
              <div className=" bg-white border  rounded-lg">
                <h3 className=" text-sm py-2 px-3 font-medium font-raleway">
                  Response List
                </h3>

                <div className=" px-2 pb-3 flex flex-col gap-2 max-h-[200px] overflow-hidden overflow-y-auto">
                  <AudioResponse />
                </div>
              </div>
            </div>
          ) : (
            <div className=" h-[350px] w-2/4 max-w-[550px]">
              <q className=" mb-6 font-raleway text-lg text-center block">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                ipsa ea itaque magnam quidem molestiae voluptatum illo
                doloremque quas. Dolorum, enim ratione corporis quis ipsam fuga
                facilis aut numquam commodi!
              </q>
              <TextAreaWLabel
                label="Response"
                height={400}
                placeholder="Enter your response to the question above"
              />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center border-t py-6 mb-2">
          {/* Footer */}
          <div className=" flex gap-[2px] py-2 text-lg font-extralight  items-center px-4 rounded cursor-pointer">
            <ArrowLeft strokeWidth={1.2} />
            <span>Back</span>
          </div>

          <h5 className=" font-dm font-light text-lg">2/4</h5>
          <div className=" flex gap-[2px] bg-blue-500 py-2 text-lg font-extralight cursor-pointer items-center px-4 rounded ">
            <span className=" text-white">Next</span>
            <ArrowRight strokeWidth={1.2} className=" stroke-white" />
          </div>
        </div>
      </div>
    </SurveyLayout>
  );
};

export default ResponseSurvey;
