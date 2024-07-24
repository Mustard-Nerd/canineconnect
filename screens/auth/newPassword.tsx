import Button from "@/components/button/button";
import Input from "@/components/Input/Input";
import { LoginLayout } from "@/components/layout";
import { useState } from "react";




const NewPasswordModal = () => {

  const [show, setShow] = useState(false)

  return (
    <LoginLayout
      Title="Create New Password"
    >
      <div className=" font-quicksand">
        <div className=" pb-6 grid gap-5 grid-cols-2">
          <div className="relative col-span-2">
            <Input
              type={show ? "text" : "password"}
              className=" col-span-2"
              placeholder="Password"
            />
            <div
              className="
                absolute right-2 top-2 text-[12px]
                text-[#1F323F] cursor-pointer bg-[#F6F7F9] px-2 py-1 text-opacity-50 rounded-[100px] 
              "
              onClick={() => setShow(!show)}
            >
              {show ? "Hide" : "Reveal"}
            </div>
          </div>
          <div className="relative col-span-2">
            <Input
              type={show ? "text" : "password"}
              className=" col-span-2"
              placeholder="Confirm Password"
            />
            <div
              className="
                absolute right-2 top-2 text-[12px]
                text-[#1F323F] cursor-pointer bg-[#F6F7F9] px-2 py-1 text-opacity-50 rounded-[100px] 
              "
              onClick={() => setShow(!show)}
            >
              {show ? "Hide" : "Reveal"}
            </div>
          </div>
        </div>

        <Button text={"Save new password"} disabled />

      </div>
    </LoginLayout>
  );
};

export default NewPasswordModal;