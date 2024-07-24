import Button from "@/components/button/button";
import Input from "@/components/Input/Input";
import { LoginLayout } from "@/components/layout";
import { SetStateAction, useState } from "react";




const OnboardingModal = () => {

  const [selectedPill, setSelectedPill] = useState(null);

  const pills = ["Novice", "Proficient", "Expert"];

  const pills2 = ["Improve presentation skill", "Share recordings with others"];

  const pills3 = ["Student", "Educator", "Executive / Manager", "Sales / Marketing", "Employee", "Contractor / Freelancer", "Others"];

  const handlePillClick = (pill: any) => {
    setSelectedPill(pill);
  };


  return (
    <>
      <LoginLayout
        Title="Let’s get you all set up! 😍 "
      >
        <div className=" font-quicksand">

          <div className="pb-6">
            <div className=" text-left normal-text pb-4 -mt-[8px] ">
              What is your experience with presentation?
            </div>
            <div className="flex items-center gap-2">
              {pills.map((pill) => (
                <button
                  key={pill}
                  onClick={() => handlePillClick(pill)}
                  className={`
                    lg:px-[14px] lg:py-[12px] px-2 py-2
                    rounded-[100px] font-[400] lg:text-[14px] text-[12px] border border-[#E1E0E6]  
                    ${selectedPill === pill ? "bg-secondary text-primary border border-primary" : "bg-[#EDF0F2]  text-[#1F323F] bg-opacity-50"
                    }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          <div className="pb-6">
            <div className=" text-left normal-text pb-4 -mt-[8px] ">
              What is your goal with this tool?
            </div>
            <div className="flex items-center gap-2">
              {pills2.map((pill) => (
                <button
                  key={pill}
                  onClick={() => handlePillClick(pill)}
                  className={`
                    lg:px-[14px] lg:py-[12px] px-2 py-2
                    rounded-[100px] font-[400] lg:text-[14px] text-[12px] border border-[#E1E0E6]  
                    ${selectedPill === pill ? "bg-secondary text-primary border border-primary" : "bg-[#EDF0F2]  text-[#1F323F] bg-opacity-50"
                    }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          <div className="pb-6">
            <div className=" text-left normal-text pb-4 -mt-[8px] ">
              What best describes your current role?
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {pills3.map((pill) => (
                <button
                  key={pill}
                  onClick={() => handlePillClick(pill)}
                  className={`
                    lg:px-[14px] lg:py-[12px] px-2 py-2
                    rounded-[100px] font-[400] lg:text-[14px] text-[12px] border border-[#E1E0E6]  
                    ${selectedPill === pill ? "bg-secondary text-primary border border-primary" : "bg-[#EDF0F2]  text-[#1F323F] bg-opacity-50"
                    }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>


          <Button text={"Complete Setup"} disabled />

          <div
            className="flex items-center justify-center gap-1 small-text pt-4 text-[#060419]"
          >
            Skip  {" "}
          </div>

        </div>
      </LoginLayout>

    </>
  );
};

export default OnboardingModal;