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
  const [modal, setModal] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const { theme } = useTheme();


  const handleModalClose = () => {
    setModal(false);
  };

  // const router = useRouter()
  const pathname = usePathname()

  const isActive = (href: any) => pathname === href;

  const nav = [
    {
      name: "Products",
      href: "#"
    },
    {
      name: "Services",
      href: "#"
    },
    {
      name: "Vets and care",
      href: "#"
    }
  ]

  return (
    <div className="font-quicksand w-full fixed z-50 bg-white dark:bg-primary">
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
              className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                ${isActive(nav.href) ? "text-primary border-b border-primary pb-6 -mb-6" : ""}
              `}
            >
              {nav.name}
            </Link>
          ))}

          
        </div>

        <div
          className={` 
            gap-5 xl:absolute xl:top-1/2 xl:left-1/2 xl:transform 
            xl:-translate-x-1/2 xl:-translate-y-1/2 -ml-7 lg:ml-0
          `}
        >
          <Logo />
        </div>
        <div className=" flex gap-[16px] items-center medium-text">
          <div className="hidden sm:flex gap-[16px] items-center ">
            <IoPersonSharp  className="w-[30px] h-[30px]"/>
            <FaHeart  className="w-[30px] h-[30px]" />
            <IoMdCart className="w-[30px] h-[30px]" />
          </div>

          <div className="flex flex-col gap-[4px] lg:hidden group " onClick={() => setIsSliderOpen(true)}>
            <div className="w-6 h-[2px] bg-primary dark:bg-white group-hover:bg-secondary"></div>
            <div className="w-5 h-[2px] bg-primary dark:bg-white group-hover:bg-secondary"></div>
            <div className="w-3 h-[2px] bg-primary dark:bg-white group-hover:bg-secondary"></div>
          </div>
        </div>
      </div>


      <div className={`fixed top-0  right-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSliderOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex mt-4 justify-end p-4 text-primary ">
          <IoClose className="text-2xl cursor-pointer" onClick={() => setIsSliderOpen(false)} />
        </div>
        <div className="flex flex-col items-start pl-6 pr-9">
          {nav.map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.href}
              className={`py-2 text-[15px] ${isActive(navItem.href) ? "text-secondary" : "text-primary"}`}
              onClick={() => setIsSliderOpen(false)}
            >
              {navItem.name}
            </Link>
          ))}

          <div className=" sm:hidden flex pt-4 gap-[16px] items-center text-primary  ">
            <IoPersonSharp  className="w-[20px] h-[20px]"/>
            <FaHeart  className="w-[20px] h-[20px]" />
            <IoMdCart className="w-[20px] h-[20px]" />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
