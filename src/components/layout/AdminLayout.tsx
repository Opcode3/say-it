import { Link } from "react-router-dom";
import Logo from "../../../public/logo.png";
import contriveLogo from "../../assets/contrive_logo_black.png";

// import { useAppContext } from "../../services/hooks/useAppContext";

interface LayoutInterface {
  children: React.ReactNode;
}

function AdminLayout({ children }: LayoutInterface) {
  // const { state } = useAppContext();

  return (
    <div className="grid grid-cols-[auto_400px] h-screen relative overflow-hidden bg-white ">
      <main className="flex flex-col h-screen overflow-hidden relative z-10">
        <header className="py-3 px-[4%] border-b flex justify-between items-center">
          <Link to={"/admin"} className=" w-[120px]">
            <img src={Logo} className=" h-full" alt="" />
          </Link>
          <ul className="flex">
            <li>
              <Link
                className={`font-light cursor-pointer bg-red-500 hover:bg-red-300 text-base font-raleway text-white  px-6 py-2 transition-all rounded-lg block`}
                to={"/logout"}
              >
                Logout
              </Link>
            </li>
          </ul>
        </header>
        <section className=" text-[#f7f0fe] h-full w-full block px-[4%] py-3">
          {children}
        </section>
      </main>
      <aside className="bg-purple-500 h-screen flex flex-col justify-between">
        <p className="font-reckless text-2xl px-4 pt-[80px]">
          At <span className=" font-reckless text-white">SayIt</span>, we're on
          a mission to revolutionize the way survey experiments are conducted.{" "}
          <br /> <br />
          We believe that every voice deserves to be heard, and we&apos;re
          passionate about using auditory interaction to make that happen.
        </p>
        <div className=" w-[200px] mx-auto pb-7 mt-32">
          <h3 className=" font-montez font-semibold text-2xl">Powered By</h3>
          <img src={contriveLogo} className=" w-full" alt="" />
        </div>
      </aside>
    </div>
  );
}

export default AdminLayout;
