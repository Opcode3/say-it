import { Mic } from "lucide-react";

const HeroSectionOne = () => {
  return (
    <div className="grid grid-cols-9 pb-16 items-center gap-4 px-[10%]">
      <div className=" col-span-5">
        <div className=" mb-10">
          <div className="flex items-center  w-[320px]  mx-auto justify-center bg-purple-300 rounded-md py-1 px-3">
            <Mic className="w-4 mr-2" />
            <p className=" line-clamp-1 w-fit p-0 m-0 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laudantium nisi quidem provident sequi placeat, quasi repellendus
              ipsam quisquam ullam accusamus sunt fuga, officia, explicabo quis
              rem exercitationem deleniti consectetur!
            </p>
          </div>
        </div>
        <h1 className="text-4xl  leading-[120%] font-bold">
          We are revolutionizing the survey-taking experience through auditory
          interaction.
        </h1>
        <p></p>
      </div>
      <div className="col-span-4 h-[400px]">
        <div className="  bg-purple-200 bg-opacity-25 mt-[6%] rounded-2xl h-[80%] block"></div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
