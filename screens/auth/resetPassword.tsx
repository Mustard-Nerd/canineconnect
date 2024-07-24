import Button from "@/components/button/button";
import Input from "@/components/Input/Input";
import { LoginLayout } from "@/components/layout";
import { useState } from "react";
import LoginModal from "./loginModal";





const ResetPasswordModal = () => {

  const [login, setLogin] = useState(false)

  return (
    <>
      {login ?
        <LoginModal />
        :
        <LoginLayout
          Title="Reset Password"
        >
          <div className=" font-quicksand">


            <div className=" pb-5 grid gap-5 grid-cols-1">

              <Input
                placeholder="Email Address"
                className="col-span-2"
              // value={message}
              // onChange={handleInputChange}
              />

            </div>

            <Button text={"Send me reset link"} disabled />

            <div
              className="flex items-center gap-1 small-text pt-4 text-[#6E7680]"
            >
              Remember password now ?   {" "}
              <span
                onClick={() => setLogin(true)}
                className=" font-[500] text-primary text-[12px] cursor-pointer"
              >
                Log in
              </span>
            </div>

          </div>
        </LoginLayout>
      }
    </>
  );
};

export default ResetPasswordModal;