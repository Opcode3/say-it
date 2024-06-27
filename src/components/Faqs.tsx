import { useState } from "react";

const Faqs = () => {
  const faqItems = [
    {
      question: "What is SayIt's Student Developer Incubation Program?",
      response:
        "SayIt's Student Developer Incubation Program is an initiative designed to provide aspiring student developers with hands-on experience, mentorship, and opportunities to contribute to the SayIt platform. It offers a supportive environment for students interested in technology to learn, grow, and make a meaningful impact.",
    },
    {
      question: "Who is eligible to apply?",
      response:
        "The program is open to students who are passionate about technology and interested in gaining real-world experience in software development. While specific eligibility criteria may vary, we welcome applications from students pursuing degrees or certifications in computer science, engineering, information technology, or related fields.",
    },
    {
      question: "What support and resources will I receive?",
      response:
        "Participants in the program will receive mentorship and support from experienced developers who are dedicated to helping you succeed. You'll have access to resources such as coding workshops, technical training sessions, networking events, and career development resources to enhance your skills and knowledge.",
    },
    {
      question: "How do I apply for the program?",
      response:
        "To apply for SayIt's Student Developer Incubation Program, please contact the program coordinator at [program coordinator's contact email or phone number] for inquiries and application instructions. Due to limited space availability (limited to 8 persons), we encourage you to reach out as soon as possible to secure your spot.",
    },
    {
      question: "Can I participate in the program remotely?",
      response:
        "No, remote participation is not available for SayIt's Student Developer Incubation Program. Participants are required to be physically present for the duration of the program to fully engage in hands-on learning and collaboration opportunities.",
    },
    {
      question: "Who can I contact if I have additional questions?",
      response:
        "If you have any additional questions or require further clarification about the program, please feel free to reach out to our team at [contact email or phone number]. We're here to help and support you throughout your journey in the SayIt Student Developer Incubation Program.",
    },
  ];

  const [active, setActive] = useState<number>(-1);
  return (
    <div className="py-[100px] px-[14%] grid grid-cols-7 gap-6">
      <div className="col-span-3 w-full">
        <h3 className=" font-reckless text-[9.45em] p-0 m-0 ">FAQ</h3>
      </div>
      <div className=" col-span-4">
        <ul className=" flex flex-col gap-0 ">
          {faqItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                if (index == active) {
                  setActive(-1);
                } else {
                  setActive(index);
                }
              }}
              className={`${
                index == active
                  ? " border-b-2 border-purple-200 bg-purple-50 "
                  : " border-b "
              } py-6 px-6 hover:bg-gray-50 group transition-all cursor-pointer rounded-md`}
            >
              <h5
                style={{ userSelect: "none" }}
                className={`${
                  index == active ? "" : "group-hover:text-gray-500"
                }  font-semibold  text-xl leading-[1.8]`}
              >
                {item.question}
              </h5>
              <p
                className={`${
                  index == active ? " h-fit pt-4" : " h-0"
                } transition-all text-[17px] font-light leading-[1.5] overflow-hidden`}
              >
                {item.response}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
