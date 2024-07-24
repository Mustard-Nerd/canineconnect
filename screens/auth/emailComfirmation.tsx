import Button from "@/components/button/button";
import { Logo } from "@/components/Logo";





const EmailConfirmationModal = () => {
  return (
    <div className="font-quicksand ">
      <div className="flex items-center gap-1 font-[500] text-[28px] leading-[36px]">
        <Logo />
        <div>Aton</div>
      </div>

      <div className=" text-left font-medium text-[18px] pt-5 pb-2 ">
        Please check your inbox to confirm your email 😊
      </div>

      <div className=" text-left font-normal text-[14px] text-textcolorgrey pb-7">
        We sent a confirmation link to you: {" "}
        <span className=" text-primary font-medium">myemailhere@example.com</span>
      </div>

      <div className="px-5 py-4 rounded-[12px] bg-[#F7F8FC] flex gap-2 flex-col items-start">
        <div className=" font-medium text-[16px] ">
          Didn’t receive an email?
        </div>
        <div className="text-left font-normal text-[14px] text-textcolorgrey ">
          If you didn’t find the email in your inbox or spam folder, please click the button below and we will send you a new link, or contact us at {" "}
          <span className=" text-primary font-medium">hello@aton.ai</span>
        </div>
        <div>
          <Button text={"Resend Link"} className="px-3 py-[8px] " />
        </div>
      </div>

    </div>
  );
};

export default EmailConfirmationModal;