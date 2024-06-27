import { EggIcon, InspectIcon, Mic, PlaySquare, Speaker, TrendingDown, TrendingUp, Voicemail } from "lucide-react";
import HeroSectionTwo from "../../components/hero/HeroSectionTwo";
import Layout from "../../components/layout/Layout";
import Faqs from "../../components/Faqs";

import appComingSoonImg from "/app_coming_soon.svg";
import { Link } from "react-router-dom";
import MetaHead from "../../components/ui/MetaHead";

export const Home = () => {
  const essenceList = [
    {
      caption: "Empower Your Voice",
      desc: "SayIt is redefining the survey experience with cutting-edge auditory interaction. Say goodbye to traditional surveys and embrace a new way to express yourself. With SayIt, your voice matters more than ever.",
      img: <Voicemail strokeWidth={1} className=" animate-wiggle-slow h-20 w-20" />,
    },
    {
      caption: "Engage Naturally",
      desc: "Our platform offers a seamless and intuitive way to interact with surveys using audio. Simply listen and respond, no typing required. Experience a more natural and engaging survey process that captures your thoughts with precision.",
      img: <EggIcon strokeWidth={1} className=" animate-bounce-slow h-20 w-20" />,
    },
    {
      caption: "Inclusive & Accessible",
      desc: " We believe everyone should have the opportunity to participate in surveys. That's why SayIt is designed to be accessible to all, including those with visual impairments or literacy challenges. Our commitment to inclusivity ensures that everyone's voice is heard.",
      img: <TrendingUp strokeWidth={1} className="animate-wiggle-slow h-20 w-20" />,
    },
    {
      caption: "Uncover Insights",
      desc: "Researchers, SayIt is your ultimate tool for unlocking deeper insights. Analyze spoken responses with advanced natural language processing (NLP) technology. Gain valuable insights into sentiment, tone, and language nuances to inform your research like never before.",
      img: <InspectIcon strokeWidth={1} className=" animate-bounce-slow h-20 w-20" />,
    },
  ];
  const colors = ["bg-green-100", "bg-white", "bg-yellow-100", "bg-green-100"];
  return (
    <Layout>
      <MetaHead title="Welcome to SayIt: Transforming Surveys with Auditory Interaction" />
      <HeroSectionTwo />
      <div className="min-h-[350px] bg-[#f6edff] flex flex-col py-[80px] ">
        <div className=" columns-3 gap-2 mx-auto pt-[50px] w-[80%]">
          {essenceList.map((item, index) => {
            return (
              <div
                key={index}
                className={` cursor-pointer group px-[14px] mt-10 w-full `}
              >
                <div
                  className={` ${colors[index]} shadow-inner flex flex-col gap-10 justify-between px-[10%] py-[10%] group-hover:shadow-lg rounded-[45px] min-h-[300px] w-full`}
                >
                  <div className=" flex flex-col gap-2">
                    <h4 className="font-extrabold text-2xl">{item.caption}</h4>
                    <p className="font-light text-lg leading-[150%]">
                      {item.desc}
                    </p>
                  </div>
                  <div className=" flex justify-end">{item.img}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" overflow-hidden bg-gray-100 relative py-[80px] px-[10%]">
        <span className=" absolute -top-20 right-[10%] z-0 -rotate-[10deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-[900px] animate-wiggle-slow fill-purple-100"
            viewBox="0 0 122.88 113.8"
          >
            <path
              fillRule="evenodd"
              d="M0,67.6c-.06-5.83,2.16-11,7.37-12.69l.13-.22a2.91,2.91,0,0,1,.6-.8,3.1,3.1,0,0,1,1.05-.5l.29-.11C34.7,44,46.09,30.07,52.64,20.61c0,9.29,2.33,21.4,6.43,33.12,4.21,12,10.29,23.71,17.71,31.76h0c-7.73-2.2-17.43-5-33.21-2.85a15.17,15.17,0,0,0-1.12,5.06,3.9,3.9,0,0,0,1,3l.24.22c1,.91,1.49,1.36,1.71,2.17a9.17,9.17,0,0,1-.13,3.22l-.09.67c-.37,2.93,1.05,3.53,2.46,4.13s2.51,1.08,3.08,2.69a.68.68,0,0,1,0,.4c-.58,3-2.5,4.64-4.43,6.29-.47.41-.95.82-1.36,1.21l-.06,0c-3.92,3.14-6.57,2.3-8.58-.22-1.58-2-2.68-5-3.7-7.81l-.44-1.22a122.88,122.88,0,0,1-4-15.09l-.34-1.5c-.87.24-1.78.51-2.73.79h0c-1.2.35-2.4.73-3.59,1.11l-.38.14a1.21,1.21,0,0,1-1.33,0C13.47,90,8.2,87,4.68,82a25,25,0,0,1-3.41-6.9A25.74,25.74,0,0,1,0,67.6ZM87.81,16.16a3,3,0,0,1-4.23-.6l-.07-.09a3.05,3.05,0,0,1,.63-4.19C89,7.69,93.84,4.07,98.7.56A3.09,3.09,0,0,1,100.92,0a3.06,3.06,0,0,1,2,1.21l0,.05a3,3,0,0,1,.52,2.23,3,3,0,0,1-1.21,2L87.81,16.16Zm15.79,57.7h0a3,3,0,0,1-2.11-.93,3,3,0,0,1-.85-2.14v-.07a3,3,0,0,1,3.07-3c5.37,0,10.83.2,16.2.3a3.07,3.07,0,0,1,3,3.1,3.09,3.09,0,0,1-.93,2.15,3,3,0,0,1-2.16.86l-16.19-.31Zm.47-15.71a3,3,0,0,1-3.25-2.78V55.3a3.07,3.07,0,0,1,2.77-3.23c5-.4,10.09-.83,15.1-1.15a3.06,3.06,0,0,1,3.24,2.81h0a3,3,0,0,1-.73,2.21A3.08,3.08,0,0,1,119.12,57c-4.85.48-10.18.88-15.05,1.14Zm-2.16-14.59a3.06,3.06,0,0,1-3.78-2.11v0a3,3,0,0,1,.27-2.3,3.1,3.1,0,0,1,1.83-1.46c5.21-1.37,10.4-3.05,15.61-4.45a3,3,0,0,1,2.3.27,3.08,3.08,0,0,1,1.45,1.8v0a3.07,3.07,0,0,1-2.1,3.78l-15.59,4.45Zm-6.3-14.32a3.05,3.05,0,0,1-4.09-1.37,3,3,0,0,1-.17-2.33,3.09,3.09,0,0,1,1.53-1.77l15-7.49a3,3,0,0,1,4.09,1.37,3,3,0,0,1,.16,2.33,3.07,3.07,0,0,1-1.53,1.76l-15,7.5ZM58.75,12c.13-.15.27-.29.4-.42a4.46,4.46,0,0,1,1.48-1.11h0a3.58,3.58,0,0,1,2-.08c2.25.36,4.66,2,7.11,4.51,6,6.19,12.32,18,16.82,30.41s7.2,25.36,5.85,33.77c-.51,3.13-1.57,5.66-3.31,7.33l-.09.07a5.64,5.64,0,0,1-2.47,1,2.43,2.43,0,0,0-.25-.2C80.3,83,75,75.9,70.54,67.55c1.14.22,2.6-.63,4-2.08,7-7.38,3.56-20.28-5.17-23.27C65.81,41,62.27,41,60.87,41.69l-.15.08C57.52,29.42,56.61,18,58.75,12Z"
            />
          </svg>
        </span>
        <div className="relative z-10 grid items-center grid-cols-2 gap-20">
          <div className="">
            <img src={appComingSoonImg} alt="" />
          </div>
          <div className="flex h-full justify-center flex-col gap-6">
            <p className=" font-reckless leading-[1.5] font-light text-2xl">
              <span className=" text-4xl font-reckless block mb-3">
                Exciting news: We&apos;re launching soon!{" "}
              </span>
              Get ready for a revolutionary survey experience with innovative
              auditory interaction. Stay tuned for the future of surveying!
            </p>
            <Link
              to={"/contact"}
              className="gap-2 mt-2 w-fit justify-center pb-2 rounded-lg border-b-4 delay-150 px-2 transition-all border-gray-500 hover:border-purple-500 flex items-center"
            >
              <span className="font-reckless text-4xl">Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-5"
                viewBox="0 0 73.029 73.029"
              >
                <path
                  d="M-1933.343,1827.021l-3.891-3.889c-.285.112-28.926,11.043-59.905-5.877l-2.876,5.265a82.575,82.575,0,0,0,54,9.044l-54.478,54.478,4.242,4.242,54.475-54.475a82.589,82.589,0,0,0,9.047,54l5.266-2.876C-1944.324,1856.059-1933.454,1827.305-1933.343,1827.021Z"
                  transform="translate(2000.492 -1817.255)"
                  fill="#1e1e20"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Faqs />
    </Layout>
  );
};
