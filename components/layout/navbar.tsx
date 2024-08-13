"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);


  const pathname = usePathname();

  const isActive = (href: any) => pathname === href;

  const nav = [
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Services",
      href: "/service",
    },
    {
      name: "Vets and care",
      href: "#",
    },
  ];

  return (
    <div className="font-quicksand w-full sticky top-0 z-50 bg-white dark:bg-primary">
      <div
        className="
          flex justify-between p-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] 
          lg:py-8 items-center relative  dropshadow 
        "
      >
        <div className="hidden lg:flex items-center  gap-[13px] font-normal text-[15px] leading-[36px] cursor-pointer">
          {nav.map((nav: any) => (
            <Link
              onClick={() => isActive(nav.href)}
              key={nav.name}
              href={nav.href}
              className={` hover:text-secondary 
                ${
                  isActive(nav.href)
                    ? " border-b  "
                    : ""
                }
              `}
            >
              {nav.name}
            </Link>
          ))}

          
        </div>

        <div className="  flex flex-col gap-[4px] lg:hidden group " 
          onClick={() => setIsSliderOpen(!isSliderOpen)}
        >
          <div
            className={`w-6 h-[2px] bg-primary dark:bg-white  transition-transform duration-300 ${isSliderOpen ? 'transform rotate-45 translate-y-[6px]' : ''}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-primary dark:bg-white  transition-opacity duration-300 ${isSliderOpen ? 'opacity-0' : ''}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-primary dark:bg-white  transition-transform duration-300 ${isSliderOpen ? 'transform -rotate-45 -translate-y-[6px]' : ''}`}
          ></div>
        </div>

        <div
          className={` 
            gap-5 xs:absolute xs:top-1/2 xs:left-1/2 xs:transform 
            xs:-translate-x-1/2 xs:-translate-y-1/2 
          `}
        >
          <Logo />
        </div>
        <div className=" flex gap-[16px] items-center medium-text">
          <div className="flex  gap-2 xs:gap-1 lg:gap-[16px] items-center ">
            <IoPersonSharp className="lg:w-[30px] lg:h-[20px] xs:w-[30px] xs:h-[20px] w-[15px] h-[15px]" />
            <FaHeart className="lg:w-[30px] lg:h-[20px] xs:w-[30px] xs:h-[20px] w-[15px] h-[15px]" />
            <IoMdCart className="lg:w-[30px] lg:h-[20px] xs:w-[30px] xs:h-[20px] w-[15px] h-[15px] " />
          </div>

          
        </div>
      </div>


      <div className={`fixed top-16  left-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSliderOpen ? "-translate-x-0" : "-translate-x-full"}`}>
        {/* <div className="flex mt-4 justify-end p-4 text-primary ">
          <IoClose className="text-2xl cursor-pointer" onClick={() => setIsSliderOpen(false)} />
        </div> */}
        <div className="flex flex-col items-start pl-6 pr-9">
          {nav.map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.href}
              className={`py-2 text-[15px] ${
                isActive(navItem.href) ? "text-secondary" : "text-primary"
              }`}
              onClick={() => setIsSliderOpen(false)}
            >
              {navItem.name}
            </Link>
          ))}

          
        </div>
      </div>
    </div>
  );
}
