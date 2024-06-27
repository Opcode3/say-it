import { useRef } from "react";
import Button from "../../components/form/Button";
import InputWLabel from "../../components/form/inputWLabel";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout";

const IndexAdmin = () => {
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
  return (
    <AdminLayout>
      <div className=" h-full flex flex-col justify-center items-center">
        <div className="w-2/4 flex flex-col  gap-3 max-w-[600px]">
          <InputWLabel
            label="Survey Title"
            type="text"
            minLength={5}
            maxLength={8}
            ref={codeRef}
            placeholder="Enter survey title"
          />
          <Button onClick={handleSurveyCodeValidation}>Continue</Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default IndexAdmin;
