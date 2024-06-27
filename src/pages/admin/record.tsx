import { ArrowRight } from "lucide-react";
import TextAreaWLabel from "../../components/form/TextareaWLabel";
import AudioRecord from "../../components/ui/AudioRecord";
import AdminLayout from "../../components/layout/AdminLayout";

const RecordSurvey = () => {

  return (
    <AdminLayout>
      <div className=" flex flex-col justify-between h-full">
        <h1 className=" font-raleway text-2xl font-semibold">Survey Title</h1>
        <div className=" h-full overflow-hidden flex flex-col justify-center items-center w-2/4 mx-auto max-w-[500px]">
          <div className=" flex items-center mb-10 w-10 h-10 overflow-hidden rounded-[30px] bg-purple-200 justify-center">
            <span className="leading-none pt-1 font-extrabold text-gray-800 text-[30px] font-montez">
              1
            </span>
          </div>
          <div className=" w-full flex flex-col  gap-3">
            <div className=" px-2 flex flex-col max-h-[200px] overflow-hidden overflow-y-auto">
              <label className="font-raleway font-semibold leading-[1.6] max-w-[85%] capitalize text-lg">
                Audio
              </label>
              <AudioRecord />
            </div>
            <div className="px-2 pb-3">
              <TextAreaWLabel
                label="Textual"
                height={400}
                placeholder="Enter your response to the question above"
              />
            </div>
            <div className=" flex justify-end">
              <div className=" flex w-fit gap-[2px] bg-blue-500 py-2 mx-2 min-w-[130px] justify-center text-lg font-extralight cursor-pointer items-center px-4 rounded ">
                <span className=" text-white">Add Question</span>
                <ArrowRight strokeWidth={1.2} className=" stroke-white" />
              </div>
              <div className=" flex w-fit gap-[2px] bg-purple-500 py-2 mx-2 min-w-[130px] justify-center text-lg font-extralight cursor-pointer items-center px-4 rounded ">
                <span className=" text-white">Finish</span>
                <ArrowRight strokeWidth={1.2} className=" stroke-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default RecordSurvey;
