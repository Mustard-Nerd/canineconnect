"use client";

import Hero from "./hero";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import ReusableCarousel from "@/components/carosel/caroselComponent";
import Button2 from "@/components/button/button2";
import DogInfo from "@/components/dogInfo/doginfo";
import Button from "@/components/button/button";
import { Footer2 } from "@/components/layout/footer2";

const items = [
  {
    src: "/carosel1.webp",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
  {
    src: "/dog.webp",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
  {
    src: "/bag.webp",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
  {
    src: "/dog.webp",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
  {
    src: "/carosel1.webp",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
  {
    src: "/bag.webp",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
  {
    src: "/carosel1.webp",
    alt: "product 1",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
  {
    src: "/german.webp",
    alt: "product 2",
    title: "Harness walk kit",
    description: "A leather dog harness and leash kit",
    price: "₦ 35,000",
  },
];

export default function Landing() {
  return (
    <div>
      <Hero />

      <div className=" px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] base:-mt-44 xs:-mt-10 sm:mt-9 lg:mt-0 ">
        <div className=" font-benz text-[20px] sm:text-[30px] font-bold pb-4">
          Top selling Products
        </div>

        <div className="w-full relative">
          <ReusableCarousel items={items} />
        </div>

        <DogInfo
          title="Any dog, Any breed"
          description="Here at canine connect we deal in all kind of dog and breeds. We offer a platform where you can easily check through for your next best friend."
          buttonText="Shop now"
          buttonLink="/shop"
          imageSrc="/dog1.webp"
          imageAlt="dog"
          row="sm:flex-row"
        />

        <DogInfo
          title="All dog essentials"
          description="Here at canine connect we deal in all kind of dog and breeds . we offer a platform where you can easily check through for your next bestfriend.  "
          buttonText="Shop now"
          buttonLink="/shop"
          imageSrc="/dog2.webp"
          imageAlt="dog"
          row="sm:flex-row-reverse"
        />

        <div className=" mb-12 lg:mb-32">
          <div className=" font-benz text-[20px] text-center sm:text-[30px] font-bold pb-4 mt-10">
            Dog foods
          </div>

          <div className=" flex flex-col sm:flex-row text-white justify-between items-center gap-10 mt-9">
            <div className="relative rounded-[10px] ">
              <Image
                src="/dogfood.webp"
                alt="dogfood"
                className="rounded-[10px] "
                width={600}
                height={324}
              />
              <div className="absolute inset-0 rounded-[10px] bg-[#242325] opacity-50 z-0"></div>
              <div className=" absolute inset-0 ml-10 top-16 sm:top-16 lg:top-28">
                <div className=" font-quicksand font-bold text-[20px] lg:text-[30px]">
                  Wet food
                </div>
                <div className="mt-3  ">
                  <Button text="Shop now" href="/shop" />
                </div>
              </div>
            </div>

            <div className="relative rounded-[10px]">
              <Image
                src="/dogfeed.webp"
                alt="dogfood"
                className="rounded-[10px] "
                width={600}
                height={324}
              />
              <div className="absolute inset-0 rounded-[10px] bg-[#242325] opacity-70 z-0"></div>
              <div className=" absolute inset-0 ml-10 top-16 sm:top-16 lg:top-28">
                <div className=" font-quicksand font-bold text-[20px] lg:text-[30px]">
                  Dry food
                </div>
                <div className="mt-3  ">
                  <Button text="Shop now" href="/shop" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DogInfo
          title="Locate the nearest services"
          description="Here at canine connect we deal in all kind of dog and breeds . we offer a platform where you can easily check through for your next bestfriend."
          buttonText="Connect"
          buttonLink="/shop"
          imageSrc="/girlxdog.webp"
          imageAlt="dog"
          row="sm:flex-row"
        />

        <div>
          <div className=" font-benz text-[20px] sm:text-[30px] font-bold pb-4">
            Recommended Products
          </div>

          <div className="w-full relative">
            <ReusableCarousel items={items} />
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}
