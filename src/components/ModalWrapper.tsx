import { X } from "lucide-react";
import { useAppContext } from "../services/hooks/useAppContext";

interface ModalWrapperInterface {
  children: React.ReactNode;
}
const ModalWrapper = ({ children }: ModalWrapperInterface) => {
  const { dispatch } = useAppContext();

  return (
    <div className=" fixed top-0 left-0 w-screen min-h-screen z-30 bg-gray-900 bg-opacity-80 bg-blend-color-burn flex items-center justify-center">
      <div className=" w-[500px] mx-auto">
        <div className="w-full flex justify-end h-fit rounded-3xl">
          <button className="bg-purple-50 transition-all delay-150 hover:animate-wiggle-slow hover:bg-purple-300  group  p-2 rounded-2xl">
            <X
              size={24}
              onClick={() => dispatch({ type: "MODAL_TOGGLE" })}
              className=" group-hover:stroke-purple-50 transition-all delay-150 "
            />
          </button>
        </div>
        <div className=" bg-white w-[95%] h-[500px] flex flex-col rounded-[30px] border-8 border-purple-50 shadow-2xl shadow-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
