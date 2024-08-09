"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaHeart } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Logo2 } from "../Logo/Logo2";
import Image from "next/image";
import Button2 from "../button/button2";
import Button from "../button/button";

export function Footer3() {
  const [modal, setModal] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleModalClose = () => {
    setModal(false);
  };

  // const router = useRouter()
  const pathname = usePathname();

  const isActive = (href: any) => pathname === href;

  const nav = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About us",
      href: "#",
    },
    {
      name: "Blog",
      href: "#",
    },
  ];

  return (
    <div className="relative font-quicksand overflow-hidden w-full py-10 lg:py-20 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] z-10 dark:bg-primary">
      <div className="grid grid-cols-2 h-full relative">
        <div className="col-span-1">
          <Image
            src="/foot3.svg"
            alt="blackdog"
            className="w-full"
            width={1000}
            height={370}
          />
        </div>
        <div className="col-span-1 bg-[#FFB900] dark:bg-[#B38100] rounded-tr-[20px] rounded-br-[20px] flex justify-center items-center flex-col">
          <div className="text-center font-benz text-[20px] sm:text-[30px] min-[1724px]:text-[48px] font-bold pb-4">
            Fill up your feed with some of this cuteness
          </div>

          <div className="mt-6 flex gap-10 items-center ">
            <Image
              src="/insta.png"
              alt="blackdog"
              className="rounded-[10px] "
              width={90}
              height={30}
            />
            <Image
              src="/twitter.png"
              alt="blackdog"
              className="rounded-[10px] "
              width={90}
              height={30}
            />
          </div>
        </div>
      </div>

      {/* <div className="px-4 py-9">
        <div className="flex flex-col sm:items-center">
          <div className="font-benz text-[20px] sm:text-center sm:text-[45px] text-center font-[850] pb-4 mt-10 min-[1724px]:text-[64px]">
            Stay Ahead of the Pack;
          </div>
          <div className="w-[45%] font-quicksand sm:py-4 font-[700] text-center text-[24px] min-[1724px]:text-[32px] ">
            Sign up to our newsletter to get updates on exclusive deals, tips,
            and updates for dog Lovers!
          </div>
          <div className="mt-5 sm:mt-10 lg:w-[40%] flex flex-col items-start gap-10">
            <input
              type="text"
              placeholder="ENTER EMAIL ADDRESS"
              className="border-[2px] rounded-[18px] bg-white border-[#121212] dark:border-[#FFFFFF] dark:bg-primary h-[50px] w-full font-bold px-5"
            />
            <fieldset className="flex justify-start items-start gap-1">
              <input type="checkbox" name="" id="check" />
              <label
                htmlFor="check"
                className="font-quicksand sm:text-left font-normal lg:text-[15px] text-[13px]"
              >
                By signing up, you consent to receiving marketing emails and
                acknowledge you have read our privacy policy. Unsubscribe
                anytime at the bottom of our emails.
              </label>
            </fieldset>
            <div className="flex justify-center items-center w-full">
              <div>
                <Button text="Sign Up" href="/auth/sign-up" />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-between gap-10 sm:gap-5 items-bottom mt-12">
          <div className="pl-9 pr-3 py-[36px] w-full border border-[#121212] dark:border-[#FFFFFF] rounded-[10px] sm:rounded-b-[10px] flex flex-col justify-center ">
            <div className=" font-benz font-bold lg:text-[32px] text-[22px] ">
              FAQs
            </div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">
              Answers to all your questions.
            </div>
          </div>
          <div className="pl-9 pr-3 py-[36px] w-full border border-[#121212] dark:border-[#FFFFFF] rounded-[10px] sm:rounded-b-[10px] flex flex-col justify-center">
            <div className=" font-benz font-bold lg:text-[32px] text-[22px] ">
              Testimonials
            </div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">
              Users don&apos;t lie, check our reviews here.
            </div>
          </div>
          <div className="pl-9 pr-3 py-[36px] w-full border border-[#121212] dark:border-[#FFFFFF] rounded-[10px] sm:rounded-b-[10px] ">
            <div className=" font-benz font-bold lg:text-[32px] text-[22px] ">
              Need help ?
            </div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">
              Contact us
            </div>
          </div>
        </div>
      </div> */}

      <div className="px-4 py-9">
        <div className=" flex flex-col sm:items-center">
          <div className="font-benz text-[20px] sm:text-center sm:text-[45px] text-center font-[850] pb-4 mt-10 min-[1724px]:text-[64px]">
            Stay Ahead of the Pack;
          </div>
          <div className=" font-quicksand sm:py-4 font-normal lg:text-[15px] text-[13px] ">
            Sign up to our newsletter to get updates on exclusive deals, tips, and updates for dog Lovers!
          </div>
          <div className=" max-w-[500px] w-full py-3">
            <input
              type="text"
              placeholder="ENTER EMAIL ADDRESS"
              className="border-[2px] rounded-[15px] bg-white border-[#121212] dark:border-[#FFFFFF] dark:bg-primary h-[60px] w-full font-bold px-5"
            />
          </div>
          <div className=" font-quicksand py-4 max-w-[670px] sm:text-center font-normal lg:text-[15px] text-[13px] " >
            By signing up, you consent to receiving marketing emails and acknowledge you have read our privacy policy. Unsubscribe anytime at the bottom of our emails.
          </div>
          <div className="mt-5 sm:mt-10 lg:w-[180px]  justify-self-center flex justify-center">
            <Button2 text="Sign Up" href="/auth/sign-up" />
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-between gap-10 sm:gap-5 items-bottom mt-12">
          <div className="pl-9 pr-3 py-[36px] w-full border border-[#121212] dark:border-[#FFFFFF] rounded-[10px] sm:rounded-b-[10px] flex flex-col justify-center ">
            <div className=" font-benz font-bold lg:text-[32px] text-[22px] ">
              FAQs
            </div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">
              Answers to all your questions.
            </div>
          </div>
          <div className="pl-9 pr-3 py-[36px] w-full border border-[#121212] dark:border-[#FFFFFF] rounded-[10px] sm:rounded-b-[10px] flex flex-col justify-center">
            <div className=" font-benz font-bold lg:text-[32px] text-[22px] ">
              Testimonials
            </div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">
              Users don&apos;t lie, check our reviews here.
            </div>
          </div>
          <div className="pl-9 pr-3 py-[36px] w-full border border-[#121212] dark:border-[#FFFFFF] rounded-[10px] sm:rounded-b-[10px] ">
            <div className=" font-benz font-bold lg:text-[32px] text-[22px] ">
              Need help ?
            </div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">
              Contact us
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/doodles/arrow-down.png"
        alt="doodles"
        className="hidden xl:flex absolute  top-[350px] left-32"
        width={100}
        height={100}
      />
      <Image
        src="/doodles/arrow-top.png"
        alt="doodles"
        className="absolute hidden xl:flex  -bottom-10 right-0"
        width={100}
        height={100}
      />
      <Image
        src="/doodles/arrow-top.png"
        alt="doodles"
        className="absolute flex xl:hidden  -bottom-10 right-0"
        width={70}
        height={70}
      />
      <Image
        src="/doodles/flower.png"
        alt="doodles"
        className="absolute z-10 hidden xl:flex  bottom-[360px] left-[330px]"
        width={70}
        height={70}
      />
      <Image
        src="/doodles/flower.png"
        alt="doodles"
        className="absolute hidden  xl:flex bottom-[360px] right-40"
        width={70}
        height={70}
      />
      <Image
        src="/doodles/flower.png"
        alt="doodles"
        className="absolute top-[380px] hidden sm:flex xl:hidden  right-40"
        width={50}
        height={50}
      />
      <Image
        src="/doodles/paw.png"
        alt="doodles"
        className="absolute hidden xl:flex  bottom-[190px] left-20"
        width={70}
        height={70}
      />
      <Image
        src="/doodles/paw.png"
        alt="doodles"
        className="absolute  bottom-[190px] -right-10"
        width={70}
        height={70}
      />
      <Image
        src="/doodles/paw.png"
        alt="doodles"
        className="absolute xl:hidden flex  bottom-[190px] -left-10"
        width={70}
        height={70}
      />
      <Image
        src="/doodles/star.png"
        alt="doodles"
        className="absolute hidden xl:flex top-[400px] right-80"
        width={70}
        height={70}
      />
      <Image
        src="/doodles/star.png"
        alt="doodles"
        className="absolute   -bottom-10 left-0"
        width={70}
        height={70}
      />
    </div>
  );
}
