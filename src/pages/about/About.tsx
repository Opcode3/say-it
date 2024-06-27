import Faqs from "../../components/Faqs";
import Layout from "../../components/layout/Layout";
import MetaHead from "../../components/ui/MetaHead";
import MorphingCircle from "../../components/ui/MorphinCycle";

export const About = () => {
  return (
    <Layout>
      <MetaHead title="About us - SayIt" />
      <div>
        <div className="relative bg-purple-100 px-[10%] py-20 overflow-hidden">
          <div className=" absolute w-[500px] h-[500px] top-[calc(50%-250px)] left-[calc(50%-250px)] z-0">
            <MorphingCircle />
          </div>
          <div className="flex flex-col capitalize gap-0 relative z-10">
            <span className=" font-reckless w-full text-[100px]">
              We&apos;re revolutionizing
            </span>
            <div className=" flex  justify-end ">
              <span className="font-reckless text-purple-500 shadow-xl px-10 rounded-full py-0 w-fit flex justify-end text-[100px]">
                survey experiment
              </span>
            </div>
            <span className="font-reckless w-full text-[100px]">
              <sup className="font-reckless w-full text-[60px] px-0 lowercase">
                with
              </sup>{" "}
              auditory interaction.
            </span>
          </div>
        </div>
        <div className="relative px-[10%] py-20 overflow-hidden">
          <p className="font-reckless text-[2.45em] text-center">
            At <span className=" font-reckless  text-purple-500">SayIt</span>,
            we're on a mission to revolutionize the way survey experiments are
            conducted. We believe that every voice deserves to be heard, and
            we&apos;re passionate about using auditory interaction to make that
            happen.
          </p>
        </div>
        <div className="relative px-[10%] bg-yellow-50 py-20 overflow-hidden">
          <h4 className=" font-reckless text-[9.45em] ">Our Story</h4>
          <div className=" columns-2 gap-20 py-10">
            <p className=" text-2xl  leading-[1.75] text-justify">
              <span className="text-purple-500">SayIt</span> was born out of a
              desire to create a more engaging and inclusive survey experience.
              Traditional surveys often feel impersonal and disconnected,
              leading to low response rates and limited insights. We knew there
              had to be a better way.
            </p>
            <p className=" text-2xl leading-[1.75] text-justify">
              Drawing on our expertise in technology and human-centered design,
              we set out to harness the power of audio to transform the survey
              process. By incorporating auditory interaction, we aim to break
              down barriers and provide a more natural and intuitive way for
              people to share their thoughts and opinions.
            </p>
          </div>
        </div>

        <div className="relative px-[10%] bg-gray-50 py-20 grid items-start grid-cols-2 gap-10">
            <div className="sticky top-0">
            <strong className="font-reckless text-[7em] leading-none">
                Our Mindset
              </strong>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl leading-[1.8]">
                At <span className="text-purple-500 font-semibold">SayIt</span>,
                we're not just another survey platform. We're pioneers in the
                field of auditory interaction, constantly pushing the boundaries
                of what's possible. Our team of experts is dedicated to staying
                at the forefront of technology and innovation, ensuring that our
                platform delivers unparalleled results for researchers and
                respondents alike.
              </p>
              <strong className="text-3xl font-reckless pt-6 leading-relaxed">
                Our Values
              </strong>
              <p className="text-xl leading-[1.8]">
                Transparency, integrity, and inclusivity are at the heart of
                everything we do. We believe in empowering individuals to
                express themselves freely and providing researchers with the
                tools they need to uncover meaningful insights. Whether you're a
                seasoned researcher or someone looking to make their voice
                heard,{" "}
                <span className="text-purple-500 font-semibold">SayIt</span> is
                here to support you every step of the way.
              </p>
            </div>
          
        </div>

        <Faqs />
      </div>
    </Layout>
  );
};
