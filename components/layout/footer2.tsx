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



export function Footer2() {
  const [modal, setModal] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);


  const handleModalClose = () => {
    setModal(false);
  };

  // const router = useRouter()
  const pathname = usePathname()

  const isActive = (href: any) => pathname === href;

  const nav = [
    {
      name: "Home",
      href: "#"
    },
    {
      name: "About us",
      href: "#"
    },
    {
      name: "Blog",
      href: "#"
    }
  ]

  return (
    <div className="font-quicksand w-full my-10 lg:my-20 sm:px-[30px] xl:px-[150px] 2xl:px-[200px]">
      <div className=" relative">
        <Image
          src="/blackdog.png"
          alt="blackdog"
          className="rounded-[10px] hidden sm:flex w-full"
          width={1000}
          height={370}
        />
        <Image
          src="/blackdog1.png"
          alt="blackdog"
          className="rounded-[10px] flex  sm:hidden w-full"
          width={1000}
          height={370}
        />
        <div className="sm:hidden absolute inset-0 bg-gradient-to-r from-[#242325] to-[#87838B] opacity-50 z-0"></div>
        <div className=" absolute inset-0 ml-8 lg:ml-28 top-10 lg:top-16 xl:top-24 text-white">
          <div className=" font-benz text-[20px] sm:text-[30px] font-bold pb-4">Download canine connect</div>
          <div className=" font-quicksand font-normal lg:text-[15px] pr-3 xs:text-[13px] text-[10px] max-w-[500px]">
            By signing up, you consent to receiving marketing by email and/or SMS and acknowledge you have read our privacy policy. Unsubscribe anytime at the bottom of our emails or by replying STOP to any of our SMS.
          </div>
          <div className="mt-6 flex gap-3 items-center ">
            <Image
              src="/google.png"
              alt="blackdog"
              className="rounded-[10px] "
              width={90}
              height={30}
            />
            <Image
              src="/apple.png"
              alt="blackdog"
              className="rounded-[10px] "
              width={90}
              height={30}
            />
          </div>
        </div>
      </div>  

      <div className="px-4 my-9">
        <div className=" flex flex-col sm:items-center">
          <div className=" font-benz text-[20px] sm:text-center sm:text-[30px] font-bold pb-4 mt-10">
            Stay Ahead of the Pack;
          </div>
          <div className=" font-quicksand sm:py-4 font-normal lg:text-[15px] text-[13px] ">
            Sign up to our newsletter to get updates on exclusive deals, tips, and updates for dog Lovers!
          </div>
          <div className=" font-quicksand py-4 max-w-[670px] sm:text-center font-normal lg:text-[15px] text-[13px] " >
            By signing up, you consent to receiving marketing emails and acknowledge you have read our privacy policy. Unsubscribe anytime at the bottom of our emails.
          </div>
          <div className="mt-5 sm:mt-10 lg:w-[180px]">
            <Button2 text="Sign Up" href="/" />
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-between gap-10 sm:gap-5 items-bottom mt-12">
          <div className="pl-9 pr-3 py-[36px]   w-full border sm:border-0 rounded-[10px] border-secondary sm:rounded-b-[10px] dropshadow3 flex flex-col justify-center ">
            <div className=" font-benz font-bold text-secondary lg:text-[32px] text-[22px] ">FAQs</div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">Answers to all your questions.</div>
          </div>
          <div className="pl-9 pr-3 py-[36px]   w-full border sm:border-0 rounded-[10px] border-secondary sm:rounded-b-[10px] dropshadow3 flex flex-col justify-center">
            <div className=" font-benz font-bold text-secondary lg:text-[32px] text-[22px] ">Testimonials</div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">Users don’t lie, check our revews here.</div>
          </div>
          <div className="pl-9 pr-3 py-[36px]   w-full border sm:border-0 rounded-[10px] border-secondary sm:rounded-b-[10px] dropshadow3 ">
            <div className=" font-benz font-bold text-secondary lg:text-[32px] text-[22px] ">Need help ?</div>
            <div className=" font-quicksand font-normal lg:text-[16px] text-[14px] ">Contact us</div>
          </div>
        </div>
      </div>
    </div>
  );
}
