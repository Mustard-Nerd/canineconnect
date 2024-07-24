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
    <div className="font-quicksand">
      <div
        className="
          flex flex-col sm:flex-row  justify-between p-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] 
          lg:py-8 sm:items-center relative border-t-[1px] shadow-md 
        "
      >
            <div className="lg:hidden  flex -ml-4">
                  <Logo2 />
            </div>

            <div className="flex flex-col gap-5">
                  <div className="flex  items-center  gap-[13px] font-normal text-[15px] leading-[36px] cursor-pointer">
                        {nav.map((nav: any) => (
                              <Link
                              onClick={() => isActive(nav.href)}
                              key={nav.href}
                              href={nav.href}
                              className={` hover:text-secondary  hover:pb-6 hover:-mb-6 
                              ${isActive(nav.href) ? "text-primary border-b border-primary pb-6 -mb-6" : ""}
                              `}
                              >
                              {nav.name}
                              </Link>
                        ))}
                  </div>
                  <div className="font-normal text-[15px]">
                        2024 Canine connect. All rights reserved
                  </div>
            </div>

            <div
            className={` hidden lg:flex 
                  gap-5 xl:absolute xl:top-1/2 xl:left-1/2 xl:transform 
                  xl:-translate-x-1/2 xl:-translate-y-1/2 
            `}
            >
                  <Logo2 />
            </div>
            <div className=" flex gap-[16px] mt-5 sm:mt-0 items-center medium-text">
                  <div className="flex gap-[16px] items-center ">
                        <RiInstagramFill  className="w-[30px] h-[30px]"/>
                        <FaFacebookF  className="w-[30px] h-[30px]" />
                        <RiTwitterXFill className="w-[30px] h-[30px]" />
                  </div> 
            </div>
      </div>


      
    </div>
  );
}
