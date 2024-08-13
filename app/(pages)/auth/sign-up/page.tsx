"use client";
import Image from "next/image";
import Link from "next/link";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Icon } from "react-icons-kit";
import { useState } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/button/button";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <>
      <div className="  w-full flex relative z-0 dark:bg-[#121212]">
        <div className=" hidden lg:flex w-1/2 relative">
          <Image
            src={"/signUp.svg"}
            className="w-full h-full object-cover"
            width={870}
            height={1000}
            alt=""
          />
          <div className="bg-[#11224059] w-[80%] xl:w-[60%] absolute bottom-0 right-0 py-[42px] pr-[45px] pl-[30px] rounded-tl-[15px] rounded-bl-[15px]">
            <p className="text-[20px] font-[400] font-quicksand leading-[24px] text-right text-white">
              We prioritize the safety of our users by integrating secure
              payment gateways and providing robust support throughout the
              buying and selling process.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full pt-[40px] pb-[72px] overflow-y-auto px-4 sm:px-10 xl:px-[120px]">
          <h1 className="text-[40px] leading-[48px] pb-[15px]">
            Create Account
          </h1>
          <p className="font-quicksand text-[16px] lg:text-[20px] text-[#121212] dark:text-white font-normal mb-[48px]">
            Already have an account?{" "}
            <span>
              <Link href={"/auth/sign-in"} className="underline font-[700]">
                Login
              </Link>
            </span>
          </p>

          <form
            action=""
            className="flex flex-col items-start w-full  gap-5 lg:gap-10 font-quicksand"
          >
            <div className="flex flex-col w-full items-start gap-2">
              <Input
                id="Username"
                label="Username"
                placeholder="Enter your Username"
              />
              <p className=" text-[14px] lg:text-[16px] font-[300]">
                No use of special characters or spaces is allowed
              </p>
            </div>
            <Input
              id="Email Address"
              label="Email Address"
              placeholder="Enter your email address"
            />
            <Input
              id="phone"
              type="number"
              label="Phone Number"
              placeholder="Phone Number"
            />
            <fieldset className="relative flex flex-col w-full items-start gap-2">
              
              <div className="relative w-full">
                <Input
                  id="password"
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="Password"
                />
                <Icon
                  className="absolute right-2 top-14 cursor-pointer"
                  icon={icon}
                  size={28}
                  onClick={handleToggle}
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[10px]">
                <div className="flex justify-between items-center w-full">
                  <p className="text-[16px] font-[300] text-[#121212] w-1/2">
                    x 8 characters minimum
                  </p>
                  <p className="text-[16px] font-[300] text-[#121212] w-1/2">
                    x 1 uppercase character{" "}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-[16px] font-[300] text-[#121212] w-1/2">
                    x 1 number{" "}
                  </p>
                  <p className="text-[16px] font-[300] text-[#121212] w-1/2">
                    x 1 special character{" "}
                  </p>
                </div>
              </div>
            </fieldset>

            <fieldset className="flex justify-start items-center gap-[16px] pb-2 w-full pl-[18px]">
              <input
                type="checkbox"
                id="check"
                className="h-[30px] w-[30px] bg-white text-white"
              />
              <label
                htmlFor="check"
                className="lg:text-[18px] text-[14px] font-[300] leading-[36px]"
              >
                I agree to all{" "}
                <span className="text-[#0046FF]">privacy policies</span> and{" "}
                <span className="text-[#0046FF]">terms of use</span>
              </label>
            </fieldset>
          </form>

          <div>
            <Button text="Sign Up"  />
          </div>

          <div className="flex justify-between items-center w-full gap-[32px] pt-[30px] pb-[30px]">
            <div className="bg-[#121212] h-[1px] w-full"></div>
            <p className="font-quicksand text-[18px] font-[700]">or</p>
            <div className="bg-[#121212] h-[1px] w-full"></div>
          </div>

          <button className="font-quicksand bg-white border-[2px] border-[#0046FF] mt-2 text-[24px] font-[600]  w-full rounded-[8px] px-[18px] py-[16px] text-[#0A0A0B] leading-[21px] hover:bg-primaryD transform hover:translate-y-[-2px] transition-transform">
            Continue with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
