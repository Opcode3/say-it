import { SendIcon } from "lucide-react";
import Layout from "../../components/layout/Layout";
import MetaHead from "../../components/ui/MetaHead";

const Contact = () => {
  return (
    <Layout>
      <MetaHead title="Contact Us - SayIt"/>
      <div className="relative block py-16 min-h-[400px] overflow-hidden">
        <div className=" w-3/5 mx-auto relative z-10">
          <div className=" grid grid-cols-6 items-center">
            <div className=" col-span-2">
              <h1 className="  pb-1 font-extralight text-3xl">Get In Touch</h1>
              <p className=" text-purple-500 text-base  font-light">
                usecontrivelab@gmail.com
              </p>
            </div>
            <p className="col-span-4 text-base leading-[160%]  font-light">
              Like what you see? Curious about what we do? Ask us anything. Tell
              us what you need. We&apos;ll get back to you with 48 hours.
            </p>
          </div>

          

          <div className=" py-10">
            <InputElement text="Hi, I'm " placeholder="Name*" />
            <InputElement text="and I work with" placeholder="Company" />
            <InputElement text="You can reach me at " placeholder="Phone*" />
            <InputElement text="or at " placeholder="Email*" />
            <InputElement text="" placeholder="Message*" />

            <button className=" flex bg-purple-500 hover:bg-purple-400 transition-all text-white font-light py-4 px-8 rounded-2xl mt-12  gap-3 items-center text-6xl  justify-center">
              Send Message <SendIcon stroke="#fff" size={50} />
            </button>
          </div>
        </div>
        <div className=" bg-shape2 bg-contain bg-no-repeat animate-bounce-slow w-24 h-24 block absolute top-[20%] left-14 z-0"></div>
        <div className=" bg-shape3 bg-contain bg-no-repeat animate-wiggle-slow w-44 h-44 block absolute bottom-[35%] right-20 z-0"></div>
      </div>
    </Layout>
  );
};

const InputElement = ({
  text,
  placeholder,
}: {
  text: string;
  placeholder: string;
}) => {
  return (
    <label
      htmlFor={placeholder}
      className="flex text-[40px] items-center text-nowrap mb-1 py-3 "
    >
      {text}
      <input
        className={` ${
          text.length > 2 ? "ml-2" : ""
        }  w-full outline-none focus:pl-3 transition-all border-b-2 rounded-sm border-purple-500 focus:border-[#414141] bg-transparent placeholder-purple-500`}
        placeholder={placeholder}
        type="text"
        name=""
        id={placeholder}
      />
    </label>
  );
};

export default Contact;
