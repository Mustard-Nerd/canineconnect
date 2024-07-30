"use client";
import { Footer2 } from "@/components/layout/footer2";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "@/components/carosel/slider";
import Button from "@/components/button/button";
import Button2 from "@/components/button/button2";
import DogInfo from "@/components/dogInfo/doginfo";

function Vendor() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 items-start">
        <div className=" col-span-1 min-w-[570px] pl-4 sm:pl-[30px] xl:pl-[150px] 2xl:pl-[200px] pt-[68px]">
          <div className=" font-benz font-bold text-[30px] leading-[66px] xl:text-[55px]">
            Earn On Canine <br /> Today{" "}
          </div>
          <div className=" flex gap-[24px] items-center mt-[56px] w-[400px]">
            <Button text="Product Seller" />
            <Button2 text="Service Provider" />
          </div>
        </div>
        <div className="col-span-1 ">
          <Image
            src="/vendor.png"
            alt="Aton logo"
            className="h-full w-full "
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className=" px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] mt-[75px] gap-2">
        <h1 className="text-[30px] font-bold mb-[45px]">
          Why deal with Canine
        </h1>
        <div className=" flex justify-between items-start gap-[10px]">
          <div className="flex justify-center w-[25%] items-center flex-col gap-2">
            <div className="rounded-[10px] border-[#121212] border-[1px] px-[20px] pt-[35px] pb-[62px]">
              <Image
                src={"chain.svg"}
                width={40}
                height={40}
                alt=""
                className="mb-[30px]"
              />
              <h2 className="text-[15px] font-quicksand font-[700] mb-1">
                Connect with more buyers
              </h2>
              <p className="text-[15px] font-quicksand">
                Here at Canine connect we bring together dog lovers and owners
                who are in need of every dog services and goods around them.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-[25%] items-center flex-col gap-2">
            <div className="rounded-[10px] border-[#121212] border-[1px] px-[20px] pt-[35px] pb-[62px]">
              <Image
                src={"chain.svg"}
                width={40}
                height={40}
                alt=""
                className="mb-[30px]"
              />
              <h2 className="text-[15px] font-quicksand font-[700] mb-1">
                Connect with more buyers
              </h2>
              <p className="text-[15px] font-quicksand">
                Here at Canine connect we bring together dog lovers and owners
                who are in need of every dog services and goods around them.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-[25%] items-center flex-col gap-2">
            <div className="rounded-[10px] border-[#121212] border-[1px] px-[20px] pt-[35px] pb-[62px]">
              <Image
                src={"chain.svg"}
                width={40}
                height={40}
                alt=""
                className="mb-[30px]"
              />
              <h2 className="text-[15px] font-quicksand font-[700] mb-1">
                Connect with more buyers
              </h2>
              <p className="text-[15px] font-quicksand">
                Here at Canine connect we bring together dog lovers and owners
                who are in need of every dog services and goods around them.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-[25%] items-center flex-col gap-2">
            <div className="rounded-[10px] border-[#121212] border-[1px] px-[20px] pt-[35px] pb-[62px]">
              <Image
                src={"chain.svg"}
                width={40}
                height={40}
                alt=""
                className="mb-[30px]"
              />
              <h2 className="text-[15px] font-quicksand font-[700] mb-1">
                Connect with more buyers
              </h2>
              <p className="text-[15px] font-quicksand">
                Here at Canine connect we bring together dog lovers and owners
                who are in need of every dog services and goods around them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[150px] px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px]">
        <h1 className="text-[30px] font-bold pb-[50px]">
          How to earn on Canine{" "}
        </h1>
        <DogInfo
          title="Sell Dogs and dog related products on canine"
          description="Here at Canine connect we bring together dog lovers and owners who are in need of every dog services and goods around them."
          imageSrc="/vendor1.png"
          imageAlt="dog"
          row="sm:flex-row-reverse"
          show={false}
        />

        <DogInfo
          title="Provide dog related services on canine"
          description="Here at Canine connect we bring together dog lovers and owners who are in need of every dog services and goods around them."
          imageSrc="/vendor2.png"
          imageAlt="dog"
          row="sm:flex-row"
          show={false}
        />
      </div>

      <div className="mt-[110px] mb-[100px]">
        <h1 className="text-center text-[30px] font-bold pb-10">
          Testimonies from canine earners
        </h1>
        <Slider />
      </div>

      <Footer2 />
    </div>
  );
}

export default Vendor;
