"use client"

import Hero from "../landing/hero";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import ReusableCarousel from "@/components/carosel/caroselComponent";
import Button2 from "@/components/button/button2";
import DogInfo from "@/components/dogInfo/doginfo";
import Button from "@/components/button/button";
import { Footer2 } from "@/components/layout/footer2";
import ServiceHero from "./serviceHero";



const items = [
  {
    src: "/carosel1.png",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
  {
    src: "/dog.png",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
  {
    src: "/carosel1.png",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
  {
    src: "/dog.png",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
  {
    src: "/carosel1.png",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
  {
    src: "/dog.png",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
  {
    src: "/carosel1.png",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
  {
    src: "/dog.png",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000"
  },
];



export default function ServiceScreen() {
  return (
    <div>
      <ServiceHero />

      <div className=" px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] base:-mt-36 xs:-mt-10   sm:mt-20 ">
        <div className=" font-benz text-[20px] sm:text-[30px] xl:-mt-24 font-bold pb-4">
          Top rated dog breeders in your location
        </div>

        <div className="w-full relative ">

          <ReusableCarousel items={items} />
        </div>



        <div className={`flex lg:mt-[150px] lg:mb-28 my-28 sm:flex-row  flex-col items-center justify-between  gap-10 sm:gap-20 xl:gap-[150px]`}>
          <div className="flex flex-col items-center justify-center sm:items-start">
            <div className="font-benz text-center sm:text-left font-bold lg:text-[30px] text-[20px]">
              Hire a trusted trainer around you today
            </div>
            <div className="font-quicksand pt-4 text-center sm:text-left font-normal text-[15px] lead-[24px] max-w-[480px]">
              Unleash your pup's full potential (and save your sanity!) with a professional dog trainer. Our trainers can help you address any behavior issues, from excessive barking to jumping, and teach your furry friend valuable commands.
            </div>
            <div className="mt-5 sm:mt-10 lg:w-[180px]">
              <Button2 text="Tap for more " href="/" />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-[10px]">
            <Image
              src="/womanxdog.png"
              alt="doginfo"
              className="rounded-[10px]"
              width={285}
              height={330}
            />
            <Image
              src="/guyxdog.png"
              alt="doginfo"
              className="rounded-[10px]"
              width={285}
              height={330}
            />
            <Image
              src="/guyxdog.png"
              alt="doginfo"
              className="rounded-[10px]"
              width={285}
              height={330}
            />
            <Image
              src="/womanxdog.png"
              alt="doginfo"
              className="rounded-[10px]"
              width={285}
              height={330}
            />
          </div>
        </div>


        <div>
          <div className=" font-benz text-[20px] sm:text-[30px] font-bold pb-4">Liscenesed dog adoption home in your location</div>

          <div className="w-full relative">
            <ReusableCarousel items={items} />
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
