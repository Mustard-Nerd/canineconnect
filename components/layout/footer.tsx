"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { FaFacebookF, FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Logo2 } from "../Logo/Logo2";

export function Footer() {
  const [modal, setModal] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleModalClose = () => {
    setModal(false);
  };

  // const router = useRouter()
  const pathname = usePathname();

  const isActive = (href: any) => pathname === href;

  const nav1 = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Dogs",
      href: "/dog",
    },
    {
      name: "Dog feed",
      href: "/feeds",
    },
  ];

  const nav2 = [
    {
      name: "Blog",
      href: "#",
    },
    {
      name: "Services",
      href: "/service",
    },
    {
      name: "Accessories",
      href: "/accessories",
    },
  ];

  const nav3 = [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Download the Mobile app",
      href: "#",
    },
  ];

  const nav4 = [
    {
      name: "FAQ'S",
      href: "#",
    },
    {
      name: "Refunds Policy",
      href: "#",
    },
    {
      name: "Shipping and Delivery",
      href: "#",
    },
  ];

  return (
    <div className=" relative z-10 dark:bg-primary bg-white overflow-hidden">
      <div className="font-quicksand  text-black dark:text-white">
        <div
          className=" hidden
            lg:flex  gap-20   justify-between p-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] 
            py-16 sm:items-center relative border-t-[1px] shadow-md 
          "
        >
          <div className=" flex w-full lg:w-fit lg:gap-40  justify-between">
            <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
              {nav1.map((nav: any) => (
                <Link
                  onClick={() => isActive(nav.href)}
                  key={nav.name}
                  href={nav.href}
                  className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
              {nav2.map((nav: any) => (
                <Link
                  onClick={() => isActive(nav.href)}
                  key={nav.name}
                  href={nav.href}
                  className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`hidden  lg:flex flex-col items-center
              gap-5 absolute top-1/2 left-1/2 transform 
              -translate-x-1/2 -translate-y-1/2 
            `}
          >
            <Logo2 />
            <div className="flex gap-[25px] items-center ">
              <RiInstagramFill className="w-[30px] h-[30px]" />
              <FaFacebookF className="w-[30px] h-[30px]" />
              <RiTwitterXFill className="w-[30px] h-[30px]" />
            </div>
          </div>

          <div className=" flex w-full lg:w-fit lg:gap-10  justify-between">
            <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
              {nav3.map((nav: any) => (
                <Link
                  onClick={() => isActive(nav.href)}
                  key={nav.name}
                  href={nav.href}
                  className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
              {nav4.map((nav: any) => (
                <Link
                  onClick={() => isActive(nav.href)}
                  key={nav.name}
                  href={nav.href}
                  className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="lg:hidden
            flex  sm:flex-row flex-col gap-10  sm:gap-10   justify-between p-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] 
            py-9 sm:items-center relative border-t-[1px] shadow-md 
          "
        >
          <div className="md:hidden flex -ml-4">
            <Logo2 />
          </div>

          <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
            {nav1.map((nav: any) => (
              <Link
                onClick={() => isActive(nav.href)}
                key={nav.name}
                href={nav.href}
                className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
            {nav2.map((nav: any) => (
              <Link
                onClick={() => isActive(nav.href)}
                key={nav.name}
                href={nav.href}
                className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div
            className={`hidden  lg:flex flex-col items-center
              gap-5 absolute top-1/2 left-1/2 transform 
              -translate-x-1/2 -translate-y-1/2 
            `}
          >
            <Logo2 />
            <div className="flex gap-[25px] items-center ">
              <RiInstagramFill className="w-[30px] h-[30px]" />
              <FaFacebookF className="w-[30px] h-[30px]" />
              <RiTwitterXFill className="w-[30px] h-[30px]" />
            </div>
          </div>

          <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
            {nav3.map((nav: any) => (
              <Link
                onClick={() => isActive(nav.href)}
                key={nav.name}
                href={nav.href}
                className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col  items-start  gap-3 font-normal text-[15px] cursor-pointer">
            {nav4.map((nav: any) => (
              <Link
                onClick={() => isActive(nav.href)}
                key={nav.name}
                href={nav.href}
                className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                    ${isActive(nav.href) ? "text-secondary " : ""}
                    `}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="font-quicksand  text-black dark:text-white">
        <div
          className="
            flex flex-col sm:flex-row  justify-between p-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] 
            lg:py-8 items-center relative border-t-[1px] shadow-md 
          "
        >
          <div className="flex flex-col gap-5">
            <div className="font-normal text-[15px]">
              2024 Canine connect. All rights reserved
            </div>
          </div>
          <div className=" flex gap-[16px] mt-5 sm:mt-0 font-quicksand items-center medium-text">
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Legal</div>
          </div>
        </div>
      </div>
    </div>
  );
}
