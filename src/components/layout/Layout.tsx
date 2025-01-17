import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Modal from "../Modal";
import Logo from "../../../public/logo.png";
import DarkLogo from "../../../public/dark-logo.png";
import { useAppContext } from "../../services/hooks/useAppContext";

interface LayoutInterface {
  children: React.ReactNode;
}

function Layout({ children }: LayoutInterface) {
  const { state } = useAppContext();

  const navItem: { name: string; url: string }[] = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Incubator", url: "/incubation-program" },
    { name: "Contact", url: "/contact" },
  ];

  const socialItem = [
    {
      icon: (
        <TwitterIcon className="w-[24px] stroke-1 stroke-purple-100 transition-all group-hover:stroke-purple-500" />
      ),
      url: "http://",
    },
    {
      icon: (
        <LinkedinIcon className=" w-[24px] stroke-1 stroke-purple-100 transition-all group-hover:stroke-purple-500" />
      ),
      url: "http://",
    },
  ];
  return (
    <div className="mx-auto">
      <header className="py-3 px-[10%] border-b flex justify-between items-center">
        <Link to={"/"} className=" w-[120px]">
          <img src={Logo} className=" h-full" alt="" />
        </Link>
        <ul className="flex">
          {navItem.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => {
                  const addStyle =
                    "font-light cursor-pointer text-base  px-4 py-2 transition-all rounded-xl block";
                  return isActive
                    ? ` bg-purple-500 text-purple-50 ${addStyle}`
                    : `${addStyle}`;
                }}
                to={item.url}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main className="min-h-[calc(100vh-500px)]">{children}</main>
      {state.modal ? <Modal /> : <></>}

      <footer className="bg-[#2a252e] py-24 relative overflow-hidden">
        <div className="absolute z-0 animate-pulse -bottom-10 -left-8 -rotate-[5deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-[600px] fill-[#3a3241]"
            viewBox="0 0 122.88 113.8"
          >
            <path
              fillRule="evenodd"
              d="M0,67.6c-.06-5.83,2.16-11,7.37-12.69l.13-.22a2.91,2.91,0,0,1,.6-.8,3.1,3.1,0,0,1,1.05-.5l.29-.11C34.7,44,46.09,30.07,52.64,20.61c0,9.29,2.33,21.4,6.43,33.12,4.21,12,10.29,23.71,17.71,31.76h0c-7.73-2.2-17.43-5-33.21-2.85a15.17,15.17,0,0,0-1.12,5.06,3.9,3.9,0,0,0,1,3l.24.22c1,.91,1.49,1.36,1.71,2.17a9.17,9.17,0,0,1-.13,3.22l-.09.67c-.37,2.93,1.05,3.53,2.46,4.13s2.51,1.08,3.08,2.69a.68.68,0,0,1,0,.4c-.58,3-2.5,4.64-4.43,6.29-.47.41-.95.82-1.36,1.21l-.06,0c-3.92,3.14-6.57,2.3-8.58-.22-1.58-2-2.68-5-3.7-7.81l-.44-1.22a122.88,122.88,0,0,1-4-15.09l-.34-1.5c-.87.24-1.78.51-2.73.79h0c-1.2.35-2.4.73-3.59,1.11l-.38.14a1.21,1.21,0,0,1-1.33,0C13.47,90,8.2,87,4.68,82a25,25,0,0,1-3.41-6.9A25.74,25.74,0,0,1,0,67.6ZM87.81,16.16a3,3,0,0,1-4.23-.6l-.07-.09a3.05,3.05,0,0,1,.63-4.19C89,7.69,93.84,4.07,98.7.56A3.09,3.09,0,0,1,100.92,0a3.06,3.06,0,0,1,2,1.21l0,.05a3,3,0,0,1,.52,2.23,3,3,0,0,1-1.21,2L87.81,16.16Zm15.79,57.7h0a3,3,0,0,1-2.11-.93,3,3,0,0,1-.85-2.14v-.07a3,3,0,0,1,3.07-3c5.37,0,10.83.2,16.2.3a3.07,3.07,0,0,1,3,3.1,3.09,3.09,0,0,1-.93,2.15,3,3,0,0,1-2.16.86l-16.19-.31Zm.47-15.71a3,3,0,0,1-3.25-2.78V55.3a3.07,3.07,0,0,1,2.77-3.23c5-.4,10.09-.83,15.1-1.15a3.06,3.06,0,0,1,3.24,2.81h0a3,3,0,0,1-.73,2.21A3.08,3.08,0,0,1,119.12,57c-4.85.48-10.18.88-15.05,1.14Zm-2.16-14.59a3.06,3.06,0,0,1-3.78-2.11v0a3,3,0,0,1,.27-2.3,3.1,3.1,0,0,1,1.83-1.46c5.21-1.37,10.4-3.05,15.61-4.45a3,3,0,0,1,2.3.27,3.08,3.08,0,0,1,1.45,1.8v0a3.07,3.07,0,0,1-2.1,3.78l-15.59,4.45Zm-6.3-14.32a3.05,3.05,0,0,1-4.09-1.37,3,3,0,0,1-.17-2.33,3.09,3.09,0,0,1,1.53-1.77l15-7.49a3,3,0,0,1,4.09,1.37,3,3,0,0,1,.16,2.33,3.07,3.07,0,0,1-1.53,1.76l-15,7.5ZM58.75,12c.13-.15.27-.29.4-.42a4.46,4.46,0,0,1,1.48-1.11h0a3.58,3.58,0,0,1,2-.08c2.25.36,4.66,2,7.11,4.51,6,6.19,12.32,18,16.82,30.41s7.2,25.36,5.85,33.77c-.51,3.13-1.57,5.66-3.31,7.33l-.09.07a5.64,5.64,0,0,1-2.47,1,2.43,2.43,0,0,0-.25-.2C80.3,83,75,75.9,70.54,67.55c1.14.22,2.6-.63,4-2.08,7-7.38,3.56-20.28-5.17-23.27C65.81,41,62.27,41,60.87,41.69l-.15.08C57.52,29.42,56.61,18,58.75,12Z"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-4 z-10 relative">
          <div className=" w-[200px]">
            <img src={DarkLogo} className=" h-full" alt="" />
          </div>
          <p className=" w-3/6 text-lg leading-loose font-light text-white text-center">
            Ready to join the{" "}
            <span className="text-purple-400">auditory revolution?</span> We'd
            love to hear from you!{" "}
            <Link
              to="/contact"
              className=" text-purple-50 underline underline-offset-8 italic"
            >
              Contact us
            </Link>{" "}
            today to learn more about how{" "}
            <span className=" font-medium text-purple-500">SayIt</span> can
            transform your survey experiments.
          </p>
          <ul className=" w-full justify-center my-3 flex gap-4">
            {socialItem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="group transition-all delay-150 block p-3  rounded-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
