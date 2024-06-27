import { useRef } from "react";
import Button from "../../components/form/Button";
import InputWLabel from "../../components/form/inputWLabel";
import SurveyLayout from "../../components/layout/SurveyLayout";
import { useNavigate } from "react-router-dom";

const IndexSurvey = () => {
  const codeRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSurveyCodeValidation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const code = codeRef.current?.value;
    if(code != null && code == "123456"){
        navigate("/survey-response")
    }
    console.log(`Survey Code: ${code}`);
  };
  return (
    <SurveyLayout>
      <div className=" flex flex-col justify-between h-full">
        <h1 className=" font-raleway text-2xl font-semibold">Survey Title</h1>
        <div className=" h-full flex flex-col justify-center items-center">
          <div className="w-2/4 flex flex-col  gap-3 max-w-[600px]">
            <InputWLabel
              label="Survey Code"
              type="text"
              minLength={5}
              maxLength={8}
              ref={codeRef}
              placeholder="Enter survey code"
            />
            <Button onClick={handleSurveyCodeValidation}>Continue</Button>
          </div>
        </div>
      </div>
    </SurveyLayout>
  );
};

export default IndexSurvey;
