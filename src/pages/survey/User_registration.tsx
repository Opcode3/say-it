import { useRef, useState } from "react";
import Button from "../../components/form/Button";
import InputWLabel from "../../components/form/inputWLabel";
import SurveyLayout from "../../components/layout/SurveyLayout";
import { useNavigate } from "react-router-dom";
import Select from "../../components/form/Select";

const SurveyUserRegistration = () => {
  const codeRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSurveyCodeValidation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const code = codeRef.current?.value;
    if (code != null && code == "123456") {
      navigate("/survey-response");
    }
    console.log(`Survey Code: ${code}`);
  };

  const [contact, setContact] = useState<"email" | "phone">("email");
  return (
    <SurveyLayout>
      <div className=" flex flex-col justify-between h-full">
        <div className=" h-full flex flex-col justify-center items-center">
          <h1 className=" font-raleway mb-10 text-2xl font-semibold">
            Survey User Registration
          </h1>
          <div className="w-2/4 flex flex-col  gap-3 max-w-[600px]">
            <InputWLabel
              label="Name"
              type="text"
              minLength={5}
              maxLength={8}
              ref={codeRef}
              placeholder="Enter survey code"
            />

            <Select label="School">
              <option value="">Ebonyi State University - EBSU</option>
              <option value=""> Borno State University - BOSU</option>
              <option value="">Ramat Polytechnic, Maiduguri</option>
            </Select>
            <InputWLabel
              label="Academic Level"
              type="text"
              minLength={5}
              maxLength={8}
              ref={codeRef}
              placeholder="Enter student level"
            />

            {contact == "email" ? (
              <InputWLabel
                label="Email address"
                type="text"
                minLength={5}
                maxLength={8}
                ref={codeRef}
                placeholder="Enter email address"
              />
            ) : (
              <InputWLabel
                label="Phone number"
                type="text"
                minLength={5}
                maxLength={8}
                ref={codeRef}
                placeholder="Enter phone number"
              />
            )}
            <div className="flex justify-end -mt-2 mr-2">
              <span
                onClick={() =>
                  setContact(contact == "email" ? "phone" : "email")
                }
                className=" cursor-pointer text-purple-400 hover:text-purple-500 text-[15px] "
              >
                Switch to{" "}
                {contact == "email" ? "phone number" : "email address"}
              </span>
            </div>

            <Button onClick={handleSurveyCodeValidation}>Submit</Button>
          </div>
        </div>
      </div>
    </SurveyLayout>
  );
};

export default SurveyUserRegistration;
