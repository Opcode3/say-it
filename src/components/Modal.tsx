import InputWLabel from "./form/inputWLabel";

import ContriveLogo from "../assets/contrive_logo_black.png";
import ModalWrapper from "./ModalWrapper";

const Modal = () => {
  return (
    <ModalWrapper>
      <h3 className="text-2xl pt-6 pl-4 pb-4">Student Survey</h3>
      <section className=" h-full flex flex-col justify-center">
        {/* <InputWLabel label="Enter the survey code" /> */}
      </section>
      <div className=" w-fit flex flex-col my-2 mx-auto items-center">
        <span className=" font-raleway font-medium">Powered By</span>
        <div className=" w-32 h-fit">
          <img src={ContriveLogo} className=" w-full" alt="" />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
