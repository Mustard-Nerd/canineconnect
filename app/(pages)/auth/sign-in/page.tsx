"use client";
import Image from "next/image";
import Link from "next/link";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Icon } from "react-icons-kit";
import { useState } from "react";

const SignIn = () => {
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
      <div className="flex min-h-screen w-full justify-between items-start relative z-0">
        <div className="w-1/2 h-screen relative">
          <Image
            src={"/onboard.svg"}
            className="w-full h-full object-cover"
            width={40}
            height={40}
            alt=""
          />
          <div className="bg-[#11224059] w-[60%] absolute bottom-0 right-0 py-[42px] pr-[45px] pl-[30px] rounded-tl-[15px] rounded-bl-[15px]">
            <p className="text-[20px] font-[400] font-quicksand leading-[24px] text-right text-white">
              Did you know that Canine Connect is for everyone? Whether
              you&apos;re a dog lover, dog seller or dog enthusiasts, we&apos;ve
              got something for you..
            </p>
          </div>
        </div>
        <div className="w-1/2 pt-[84px] pb-[72px] h-screen overflow-y-auto pl-[120px] pr-[200px]">
          <h1 className="text-[64px] leading-[96px] pb-[15px]">
            Welcome Back!
          </h1>
          <p className="font-quicksand text-[24px] text-[#121212] font-[400] mb-[84px]">
            Don&apos;t have an account?{" "}
            <span>
              <Link href={"/auth/sign-up"} className="underline font-[700]">
                Sign up
              </Link>
            </span>
          </p>

          <form
            action=""
            className="flex flex-col items-start w-full gap-10 font-quicksand"
          >
            <fieldset className="flex flex-col w-full items-start gap-2">
              <label htmlFor="username" className="text-[24px] leading-[36px]">
                Username <span className="text-[#C3061A]">*</span>
              </label>
              <input
                id="username"
                type="text"
                className="shadow-custom h-[60px] w-full border-none outline-none rounded-[8px] px-[45px] text-[20px] font-[300] text-[#121212]"
                placeholder="Username"
              />
            </fieldset>
            <fieldset className="relative flex flex-col w-full items-start gap-2">
              <label htmlFor="password" className="text-[24px] leading-[36px]">
                Password <span className="text-[#C3061A]">*</span>
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-custom h-[60px] w-full border-none outline-none rounded-[8px] px-[45px] text-[20px] font-[300] text-[#121212]"
                  placeholder="Password"
                />
                <Icon
                  className="absolute right-2 top-5 cursor-pointer"
                  icon={icon}
                  size={28}
                  onClick={handleToggle}
                />
              </div>
              <Link
                href={"/forgot-password"}
                className="text-right w-full text-[20px] font-[300] text-[#5683D2] underline"
              >
                Forgot Password?
              </Link>
            </fieldset>

            <fieldset className="flex justify-start items-center gap-[16px] w-full">
              <input type="checkbox" id="check" className="h-[30px] w-[30px]" />
              <label
                htmlFor="check"
                className="text-[20px] font-[300] leading-[36px] "
              >
                Remember me
              </label>
            </fieldset>
          </form>

          <button className="font-quicksand  bg-[#0046FF] mt-2 text-[24px] font-[600]  w-full rounded-[100px] px-[18px] py-[16px] text-white leading-[21px] hover:bg-primaryD transform hover:translate-y-[-2px] transition-transform">
            Login
          </button>

          <div className="flex justify-between items-center w-full gap-[32px] pt-[30px] pb-[50px]">
            <div className="bg-[#121212] h-[1px] w-full"></div>
            <p className="font-quicksand text-[18px] font-[700]">or</p>
            <div className="bg-[#121212] h-[1px] w-full"></div>
          </div>

          <button className="font-quicksand bg-white border-[1px] border-[#0046FF] mt-2 text-[24px] font-[600]  w-full rounded-[100px] px-[18px] py-[16px] text-[#0A0A0B] leading-[21px] hover:bg-primaryD transform hover:translate-y-[-2px] transition-transform">
            Continue with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
