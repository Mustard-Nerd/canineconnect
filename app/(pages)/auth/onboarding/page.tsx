"use client";
import Image from "next/image";
import Link from "next/link";


const Onboarding = () => {

  return (
    <>
      <div className=" w-full grid-cols-1  lg:grid lg:grid-cols-2 relative z-0 dark:bg-[#121212]">
        <div className=" hidden lg:flexcol-span-1 relative">
          <Image
            src={"/boarding.svg"}
            className="w-full h-full object-cover"
            width={40}
            height={40}
            alt=""
          />
          <div className="bg-[#11224059] w-[80%] xl:w-[60%] absolute bottom-0 right-0 py-[64px] pr-[45px] pl-[30px] rounded-tl-[15px] rounded-bl-[15px]">
            <p className="text-[20px] font-[400] font-quicksand leading-[24px] text-right text-white">
              Canine Connect is designed with our users in mind and is very easy
              to navigate
            </p>
          </div>
        </div>
        <div className="col-span-1 pt-[84px] pb-[72px] flex flex-col items-center overflow-y-auto px-[30px]">
          <h1 className="lg:text-[64px] text-[30px] text-center lg:leading-[96px] pb-[10px]">
            Welcome to the Pack!{" "}
          </h1>
          <p className="font-quicksand lg:text-[32px] text-[18px] text-[#121212] dark:text-white text-center font-[700] mb-[50px]">
            Help us serve you better by telling us who you are
          </p>

          <div className="flex flex-col items-center gap-[88px]">
            <Link
              href={"/"}
              className="border-[#0087FF] border-[2px] rounded-[16px] w-[320px] h-[112px] flex justify-between items-center p-[12px] gap-[32px]"
            >
              <Image
                src={"/money.svg"}
                className="w-[92px] h-[92px]"
                width={40}
                height={40}
                alt=""
              />
              <p className="text-[#121212] dark:text-white text-[14px] font-[600] font-quicksand">
                I&apos;m in search of a furry friend/Dog feed /Accessories
              </p>
            </Link>
            <Link
              href={"/"}
              className="border-[#0087FF] border-[2px] rounded-[16px] w-[320px] h-[112px] flex justify-between items-center p-[12px] gap-[32px]"
            >
              <Image
                src={"/pet.svg"}
                className="w-[92px] h-[92px]"
                width={40}
                height={40}
                alt=""
              />
              <p className="text-[#121212] dark:text-white text-[14px] font-[600] font-quicksand">
                I sell Dogs/Dog Feed / Dog Accessories
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
