import { Mic, PlayCircle, PlaySquare } from "lucide-react";

import heroImage from "/hero.png";
import { useAppContext } from "../../services/hooks/useAppContext";

const HeroSectionTwo = () => {
  const { dispatch } = useAppContext();
  const users = [
    {
      name: "student",
      form: 1,
    },
    {
      name: "lecturer",
      form: 2,
    },
  ];
  return (
    <div className="flex flex-col py-12 items-center gap-4 px-[10%] overflow-hidden relative">
      <div className=" relative z-10 w-[80%]">
        <h1 className=" capitalize text-7xl mb-2 mt-5 font-reckless py-0 my-0 mx-auto text-center leading-[1.3] font-extrabold">
          We&apos;re revolutionizing the survey experiment with
          <span className="text-purple-500 font-reckless">
            {" "}
            auditory interaction.
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <img
            src={heroImage}
            alt=""
            className="h-[220px] rounded-3xl bg-opacity-15 blur-0"
          />
        </div>
        <div className=" flex justify-center mt-4 mb-4">
          <h3 className=" font-montez text-4xl">I am a: </h3>
          <div className="">
            {users.map((item, index) => (
              <button
                key={index}
                onClick={() => dispatch({ type: "MODAL_TOGGLE" })}
                className="bg-purple-500 hover:bg-purple-700 transition-all font-light px-4 py-2 rounded-md mx-2 text-white text-lg capitalize "
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}

      <div className="absolute right-24">
        <div className="relative">
          <div className=" bg-shape1 bg-contain bg-no-repeat animate-bounce-slow py-6 px-6 flex items-center justify-center ">
            <PlaySquare className="h-10 w-10 stroke-purple-300" />
          </div>
          {/* <PlayIcon className=" bg-shape1 bg-contain bg-no-repeat w-[300px] h-[300px] " /> */}
        </div>
      </div>

      <div className="absolute bottom-16 left-1/3 z-10">
        <div className="relative">
          <PlayCircle className="h-5 w-5 m-3 animate-bounce stroke-purple-300" />
        </div>
      </div>

      <div className="absolute top-20 left-[17%] z-0">
        <div className="relative ">
          <div className=" animate-wiggle flex items-center justify-center ">
            <Mic className="h-12 w-12 m-3 stroke-purple-300" />
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-1/2 z-0">
        <div className="relative">
          <div className=" bg-shape3 h-8 w-8  bg-contain bg-no-repeat animate-bounce-slow flex items-center justify-center "></div>
        </div>
      </div>

      <div className="absolute -bottom-[500px] rotate-180 z-0">
        <div className="relative ">
          <div className=" bg-shape2 h-[1200px] w-[1200px] max-w-full  bg-contain bg-no-repeat flex items-center justify-center "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
