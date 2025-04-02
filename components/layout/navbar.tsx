"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { FaHeart, FaShopify } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useTheme } from "next-themes";
import Image from "next/image";

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

  const menuItems1 = [
    { src: "/menu/dog.svg", alt: "dog", label: "Dogs", href: "/dog" },
    {
      src: "/menu/feed.svg",
      alt: "dog feed",
      label: "Dog Feed",
      href: "/feed",
    },
    {
      src: "/menu/accessories.svg",
      alt: "accessories",
      label: "Accessories",
      href: "/accessories",
    },
  ];

  const menuItems = [
    { icon: FaShopify, label: "Shop", image: null, href: "/shop" },
    { icon: null, label: "Orders", image: "/menu/shop.svg", href: "/orders" },
    { icon: null, label: "Inbox", image: "/menu/mail.svg", href: "/messages" },
    {
      icon: null,
      label: "Voucher",
      image: "/menu/coupon.svg",
      href: "/coupon",
    },
    {
      icon: null,
      label: "Wishlist",
      image: "/menu/wishlist.svg",
      href: "/wishlist",
    },
    {
      icon: null,
      label: "Pending Reviews",
      image: "/menu/review.svg",
      href: "/reviews",
    },
  ];

  return (
    <div className="font-quicksand w-full h-full sticky top-0 z-50 bg-white dark:bg-primary">
      <div
        className="
          flex justify-between p-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] 
          lg:py-8 items-center relative  drop-shadow z-40 
        "
      >
        <div className="hidden lg:flex items-center  gap-[13px] font-normal text-[15px] leading-[36px] cursor-pointer">
          {nav.map((nav: any) => (
            <Link
              onClick={() => isActive(nav.href)}
              key={nav.name}
              href={nav.href}
              className={` hover:text-secondary 
                ${isActive(nav.href) ? " border-b  " : ""}
              `}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div
          className="  flex flex-col gap-[4px] lg:hidden group "
          onClick={() => setIsSliderOpen(!isSliderOpen)}
        >
          <div
            className={`w-6 h-[2px] bg-primary dark:bg-white  transition-transform duration-300 ${
              isSliderOpen ? "transform rotate-45 translate-y-[6px]" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-primary dark:bg-white  transition-opacity duration-300 ${
              isSliderOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-primary dark:bg-white  transition-transform duration-300 ${
              isSliderOpen ? "transform -rotate-45 -translate-y-[6px]" : ""
            }`}
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

      <div
        className={`fixed  w-[300px]  left-0 h-screen  bg-blue dark:bg-darkbg z-10 transform  pt-1 transition-transform  duration-300 ease-in-out ${
          isSliderOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <div className="flex mt-4 justify-end p-4 text-primary ">
          <IoClose className="text-2xl cursor-pointer" onClick={() => setIsSliderOpen(false)} />
        </div> */}

        <div className=" pl-[21px] pr-2 pb-8 w-full h-full overflow-auto">
          <div className=" border-y border-primary py-2 mt-5  w-full  text-[16px] font-[500]">
            NEED HELP?
          </div>

          <div className=" border-b py-4 w-full border-primary">
            <div className="text-[16px] pb-4 font-[500]">MY CANINE ACCOUNT</div>
            <div className="flex flex-col gap-4 text-[14px]">
              {menuItems.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`flex items-center px-3 py-2 rounded-[3px] gap-6 w-full group ${
                    isActive(item.href) ? "bg-orange" : ""
                  }`}
                  onClick={() => setIsSliderOpen(false)}
                >
                  <div className="flex items-center gap-4 flex-grow">
                    {item.icon ? (
                      <item.icon className="w-[25px] h-[25px]" />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={25}
                        height={25}
                      />
                    )}
                    <div>{item.label}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className=" border-b py-4 w-full border-primary">
            <div className="text-[16px] pb-4 font-[500]">OUR CATEGORIES</div>
            <div className="flex flex-col gap-4 text-[14px]">
              {menuItems1.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`flex items-center px-3 py-2 rounded-[3px] gap-6 w-full group ${
                    isActive(item.href) ? "bg-orange" : ""
                  }`}
                  onClick={() => setIsSliderOpen(false)}
                >
                  <div className="flex items-center gap-4 flex-grow">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={28}
                      height={28}
                    />
                    <div>{item.label}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-[16px] font-[400] my-5 flex flex-col gap-5">
            <div>Become a Vendor</div>
            <div>Customer Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}
