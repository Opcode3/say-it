import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import MorphingCircle from "../../components/ui/MorphinCycle";
import { SendIcon } from "lucide-react";
import MetaHead from "../../components/ui/MetaHead";
import Faqs from "../../components/Faqs";

const Incubation = () => {
  const firstItem = [
    {
      title: "Meaningful Projects",
      paragraph:
        "Engage in real-world development projects aimed at enhancing the SayIt platform. Whether you're crafting intuitive user interfaces, implementing cutting-edge features, or optimizing performance, you'll play a crucial role in shaping the next generation of survey interaction.",
    },
    {
      title: "Expert Guidance:",
      paragraph:
        "Benefit from mentorship and support provided by seasoned developers who are dedicated to helping you succeed. Receive technical guidance, career advice, and valuable insights to accelerate your growth in the tech industry.",
    },
    {
      title: "Skill Development",
      paragraph:
        "Expand your technical skills and knowledge through immersive learning experiences and practical challenges. From mastering coding languages to honing problem-solving abilities, our program equips you with the tools you need to thrive in a tech-driven world.",
    },
    {
      title: "Networking Opportunities",
      paragraph:
        "Connect with like-minded peers, industry professionals, and potential employers through networking events, workshops, and guest lectures. Build meaningful relationships and explore future career pathways within the vibrant tech community.",
    },
    {
      title: "Job Placement",
      paragraph:
        "Exceptional interns may have the opportunity for job placement within SayIt or our esteemed partner companies. Terms and conditions apply.",
    },
  ];

  const secondItem = [
    {
      title: "Innovative Platform",
      paragraph:
        "oin a dynamic team at the forefront of survey technology innovation. Contribute to groundbreaking projects that revolutionize how people interact with surveys and make a tangible impact on the world around you.",
    },
    {
      title: "Student-Centric Approach",
      paragraph:
        "Our program is tailored to support your growth and aspirations. Whether you're a tech enthusiast eager to explore new challenges or a budding developer seeking practical experience, SayIt provides a nurturing environment for you to thrive.",
    },
    {
      title: "Pathway to Success",
      paragraph:
        "Launch your tech career with confidence and purpose. Gain valuable experience, build a standout portfolio, and unlock exciting opportunities that propel you toward a fulfilling and rewarding career in the tech industry.",
    },
  ];
  return (
    <Layout>
      <MetaHead title="Incubation Program - SayIt" />
      <div>
        <div className="relative px-[10%] py-20 bg-gray-50 overflow-hidden">
          <div className=" absolute inset-0 flex items-center py-10 justify-center">
            <MorphingCircle />
          </div>
          <div className=" relative z-10 flex gap-6 flex-col ">
            <p className="font-reckless text-[2.45em] text-center">
              Are you a student about to embark on your IT journey and
              passionate about technology?{" "}
            </p>
            <p className="font-reckless text-[1.65em] text-center">
              <span className=" font-reckless  text-purple-500">
                SayIt&apos;s
              </span>{" "}
              Student Developer Incubation Program offers a unique opportunity
              for aspiring developers like you to dive into the world of tech,
              gain hands-on experience, and contribute to the future of survey
              technology.
            </p>
          </div>
        </div>
        <div className="relative px-[10%] py-20 overflow-hidden">
          <div className=" flex flex-col gap-14">
            <h3 className=" font-reckless text-[7.45em] leading-none relative before:contents-[''] before:absolute before:rounded-sm before:w-[35%] before:h-1 before:-bottom-2 before:left-3 before:bg-purple-300 ">
              What We Offer
            </h3>
            <ul className="p-0 m-0 columns-2 gap-14 px-10">
              {firstItem.map((item, index) => (
                <li key={index} className="p-0 m-0 mb-3 flex">
                  {/* <Numbering num={item.num} /> */}
                  <div className="flex flex-col">
                    <strong className=" text-2xl font-reckless leading-[1.8]">
                      {item.title}
                    </strong>
                    <p className="leading-[1.8] font-reckless text-lg">
                      {item.paragraph}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative px-[10%] bg-purple-100 py-20 overflow-hidden">
          <div className=" grid grid-cols-7 items-center gap-14">
            <h3 className=" font-reckless col-span-3 text-[6.45em] leading-[1.2]">
              Why Choose Us
            </h3>
            <ul className="p-0 m-0 col-span-4 columns-2 gap-14 px-10">
              {secondItem.map((item, index) => (
                <li key={index} className="p-0 m-0 mb-3 flex">
                  <div className="flex flex-col">
                    <strong className=" text-2xl font-reckless leading-[1.8]">
                      {item.title}
                    </strong>
                    <p className="leading-[1.8] font-reckless text-lg">
                      {item.paragraph}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative px-[14%] bg-purple-100 pb-20 overflow-hidden">
          <p className="font-reckless text-[1.65em] text-center">
            Ready to embark on your IT journey and join SayIt's student
            developer incubation program? Apply now to unlock a world of
            opportunities and shape the future of survey technology.
          </p>
          {/* <Link to={""}>Message Us Now</Link> */}
          <Link
            to={""}
            target="_blank"
            className=" flex cursor-pointer hover:border-b-4 delay-150 rounded-sm border-b-purple-400 w-fit mx-auto transition-all font-light py-4 px-8 mt-8  gap-3 items-center text-6xl  justify-center"
          >
            Reserve A Spot Now <SendIcon stroke="#1e1e20" size={50} />
          </Link>
        </div>
        <Faqs />
      </div>
    </Layout>
  );
};

export default Incubation;
