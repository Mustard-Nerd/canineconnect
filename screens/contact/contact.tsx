"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/button/button";
import Input from "@/components/Input/Input";
import TextArea from "@/components/textarea/textarea";
import { Footer3 } from "@/components/layout/footer3";

function ContactUs() {
  return (
    <div className=" dark:bg-primary px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] pt-[30px] pb-20  ">
      <div className="flex lg:flex-row flex-col-reverse  lg:justify-between item-start w-full gap-12 my-4 lg:my-[25px]">
        <div className=" lg:w-[709px] flex flex-col justify-center">
          <h1 className="xl:text-[60px] font-benz text-[36px] font-[700] mb-5 lg:mb-10">
            We&apos;re Here to Help!
          </h1>
          <p className="font-quicksand font-normal text-[16px] xl:text-[24px]">
            At Canine Connect, we&apos;re here to dedicated to making your
            experience as smooth and enjoyable as possible. Whether you have a
            question about our products, need help with an order, or just want
            to share your love for dogs, we&apos;re here for you.
          </p>

          <div className=" mt-10 font-quicksand text-[18px] xl:text-[24px]  lg:mt-[33px]  font-bold items-center">
            Shoot us an e-mail;{" "}
            <span className="text-secondary font-normal">
              {" "}
              info@canineconnect.io
            </span>
          </div>
        </div>
        <div className="lg:flex hidden">
          <Image
            src={"/contact.webp"}
            width={760}
            height={700}
            alt=""
            className=""
          />
        </div>
        <div className="w-full lg:hidden flex">
          <Image
            src={"/contact.webp"}
            width={300}
            height={300}
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <div className=" rounded-[8px] border border-border  mt-10 lg:mt-[100px] lg:mx-[120px] p-6 lg:px-[70px] lg:py-[50px]">
        <div className=" max-w-[800px]">
          <h1 className="lg:text-[40px] text-[30px] leading-[48px] font-[700] font-benz pb-[15px]">
            Get in Touch
          </h1>
          <p className="font-quicksand font-normal text-[16px] lg:text-[22px] text-[#121212] dark:text-white lg:mb-[48px] mb-8">
            Have a specific question or comment? Fill out this form and we’ll
            get back to you as soon as possible
          </p>
        </div>

        <form
          action=""
          className="flex flex-col items-start w-full gap-10 font-quicksand"
        >
          <Input id="name" label="Your Name" placeholder="Enter your name" />
          <Input
            id="email"
            label="Your Email"
            type="email"
            placeholder="Enter your email"
          />
          <TextArea
            id="message"
            label="Your Message"
            placeholder="How can we help?"
            rows={4}
          />

          <div className=" mt-[20px] w-full">
            <Button text={"Send"} className=" w-[150px]" />
          </div>
        </form>
      </div>

      <div className=" lg:mt-36 mt-10 ">
        <div className="lg:text-[40px] text-[20px] leading-[48px] font-[700] font-quicksand pb-2 lg:pb-[15px]">
          Frequently Asked Questions
        </div>
        <p className="font-quicksand font-normal text-[16px] lg:text-[20px] text-[#121212] dark:text-white lg:mb-[48px] mb-8">
          Check out our{" "}
          <span className="text-secondary cursor-pointer">FAQ&apos;s page</span>{" "}
          for quick answers to common questions. If you can&apos;t find what
          you&apos;re looking for, don&apos;t hesitate to reach out
        </p>
      </div>

      <Footer3 />
    </div>
  );
}

export default ContactUs;
