"use client";

import Button from "@/components/button/button";
import ShoppingList from "@/components/carosel/shoppingList";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, ReactNode } from "react";
import { FaShopify } from "react-icons/fa";

const items1 = [
  {
    src: "/shop/dog1.png",
    alt: "product 1",
    title: "Tibetian Mastiff",
    price: "₦ 35,000",
  },
  {
    src: "/shop/dog2.png",
    alt: "product 2",
    title: "Lassa Apso",
    price: "₦ 35,000",
  },
  {
    src: "/shop/dog3.png",
    alt: "Pitbull 1",
    title: "Pitbull",
    price: "₦ 35,000",
  },
  {
    src: "/shop/dog4.png",
    alt: "Poodle 2",
    title: "Poodle",
    price: "₦ 35,000",
  },
];

const menuItems = [
  { label: "My Canine Account", image: "/menu/person.svg", href: "/buyer/profile" },
  { label: "Orders", image: "/menu/shop.svg", href: "/orders" },
  { label: "Notifications", image: "/menu/mail.svg", href: "/messages" },
  { label: "Voucher", image: "/menu/coupon.svg", href: "/coupon" },
  { label: "Pending Reviews", image: "/menu/review.svg", href: "/reviews" },
];

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] pt-8">
      <div className="flex gap-8 items-stretch">
        <div className="hidden sm:flex flex-col dark:bg-darkbg bg-blue font-quicksand font-normal rounded-[16px] lg:w-[28%] w-[396px] relative">
          <div className=" pl-[24px] pr-[18px] pb-8 w-full h-full overflow-auto">
            <div className="border-b py-4 w-full border-primary">
              <div className="flex flex-col gap-4 text-[16px]">
                {menuItems.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className={`flex items-center px-4 transform transition-colors duration-300 hover:bg-orange hover:text-black py-2 rounded-[3px] gap-6 w-full group ${
                      isActive(item.href) ? "bg-orange text-primary" : ""
                    }`}
                    onClick={() => setIsSliderOpen(false)}
                  >
                    <div className="flex items-center gap-4 flex-grow">
                      <Image src={item.image} alt={item.label} width={40} height={40} />
                      <div>{item.label}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-[16px] font-[400] my-7 px-4 flex flex-col gap-7">
              <div>Become a Vendor</div>
              <div>Customer Service</div>
            </div>

            <div className="border-y border-primary py-7 px-4 w-full text-[16px] font-[500]">
              NEED HELP?
            </div>
            <div className="text-[16px] font-[400] my-7 mb-20 flex flex-col gap-7">
              <div>Close Account</div>
            </div>
          </div>

          <div className="pt-4 absolute w-full bottom-9 px-4 pl-[24px] pr-[18px]">
            <Button text="LOGOUT" />
          </div>
        </div>

        <div className="border lg:w-[72%] font-[quicksand] w-full border-border px-4 pt-4 pb-12 lg:px-7 rounded-[10px]">
          {children}
        </div>
      </div>

      <div className="mt-10 mb-10 lg:mb-20">
        <ShoppingList items={items1} title="Recently Viewed" />
      </div>
    </div>
  );
};

export default ProfileLayout;
