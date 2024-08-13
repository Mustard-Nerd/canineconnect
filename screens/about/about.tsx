"use client";
import { Footer2 } from "@/components/layout/footer2";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Slider from "@/components/carosel/slider";
import Button from "@/components/button/button";

function AboutScreen() {
  return (
    <div className="min-h-screen dark:bg-[#121212]">
      <div className="pl-4 sm:pl-[30px] xl:pl-[150px] 2xl:pl-[200px] flex justify-between items-end">
        <div className=" w-1/2 max-w-[570px]">
          <div className=" font-benz font-bold text-[30px] xl:text-[55px]">
            What we do{" "}
          </div>
          <div className=" font-quicksand medium-text leading-[24px]">
            At Canine connect, we&apos;re pawsitively obsessed with dogs! We
            believe every furry friend deserves the best, which is why we offer
            a curated selection of premium dog products that cater to your
            canine companion&apos;s every need. Whether you&apos;re a proud
            owner of a playful pup, a gentle giant, or a spunky senior, Canine
            connect has something to make their tail wag.{" "}
          </div>
          <div className="shadow-custom dark:shadow-customWhite py-[22px] px-[53px] w-full flex gap-3 items-center mb-[40px] mt-[140px] rounded-[10px] justify-between">
            <div className="flex justify-center items-center flex-col gap-5">
              <h1 className="text-[30px]">600+</h1>
              <p className="text-[15px] font-quicksand">Vendors</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-5">
              <h1 className="text-[30px]">70+</h1>
              <p className="text-[15px] font-quicksand">Happy Users</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-5">
              <h1 className="text-[30px]">260+</h1>
              <p className="text-[15px] font-quicksand">Done Deals</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-5">
              <h1 className="text-[30px]">60+</h1>
              <p className="text-[15px] font-quicksand">Vets</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/about.png" alt="Aton logo" width={1000} height={1000} />
        </div>
      </div>

      <div className="px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] mt-[68px] flex justify-between items-start gap-2">
        <div className="flex justify-center w-[33%] items-center flex-col gap-2">
          <h1 className="text-[30px] font-bold">Mission</h1>
          <div className="rounded-[10px] border-[#121212] dark:border-white border-[1px] px-[20px] pt-[35px] h-[220px]">
            <p className="text-[15px] font-quicksand">
              Our mission is to create a vibrant, trustworthy, secure and
              user-friendly marketplace where individuals can buy, sell, breed,
              hire, adopt and breed dogs with ease and confidence.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-[33%] items-center flex-col gap-2">
          <h1 className="text-[30px] font-bold">Vision</h1>
          <div className="rounded-[10px] border-[#121212] dark:border-white border-[1px] px-[20px] pt-[35px] h-[220px]">
            <p className="text-[15px] font-quicksand">
              Our mission is to create a vibrant, trustworthy, secure and
              user-friendly marketplace where individuals can buy, sell, breed,
              hire, adopt and breed dogs with ease and confidence.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-[33%] items-center flex-col gap-2">
          <h1 className="text-[30px] font-bold">Goal</h1>
          <div className="rounded-[10px] border-[#121212] dark:border-white border-[1px] px-[20px] pt-[35px] h-[220px]">
            <p className="text-[15px] font-quicksand">
              To become the leading global platform for dog lovers, breeders,
              and service providers by 2026, providing a comprehensive, secure,
              and engaging ecosystem that meets the diverse needs of the canine
              community.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[90px]">
        <h1 className="text-[30px] font-bold pl-4 sm:pl-[30px] xl:pl-[150px] 2xl:pl-[200px]">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-2 h-full gap-[28px]">
          <div className="col-span-1 bg-[#121212] dark:bg-white rounded-[15px] pl-[100px] pr-[42px] font-quicksand text-white pt-[40px]">
            <div className="flex flex-col items-start w-full">
              <Questions
                question="How do I confirm that I am getting healthy dog ?"
                answer=" If adopting, inquire about the dog's background, including
              any health checks performed by the shelter or rescue. If buying
              from a breeder, ask about the parents' health history and if
              they've been screened for genetic conditions common to the
              breed"
              />
              <Questions
                question="How do I confirm that I am getting healthy dog ?"
                answer=" If adopting, inquire about the dog's background, including
              any health checks performed by the shelter or rescue. If buying
              from a breeder, ask about the parents' health history and if
              they've been screened for genetic conditions common to the
              breed"
              />
              <Questions
                question="How do I confirm that I am getting healthy dog ?"
                answer=" If adopting, inquire about the dog's background, including
              any health checks performed by the shelter or rescue. If buying
              from a breeder, ask about the parents' health history and if
              they've been screened for genetic conditions common to the
              breed"
              />
              <Questions
                question="How do I confirm that I am getting healthy dog ?"
                answer=" If adopting, inquire about the dog's background, including
              any health checks performed by the shelter or rescue. If buying
              from a breeder, ask about the parents' health history and if
              they've been screened for genetic conditions common to the
              breed"
              />
            </div>
          </div>
          <div className="col-span-1 sm:pr-[30px] xl:pr-[150px] 2xl:pr-[200px] pt-10 flex justify-center items-center flex-col pb-[64px]">
            <h1 className="text-center font-bold text-[30px]">
              Ask A Different Question
            </h1>

            <div className="w-full mt-[38px] font-quicksand font-[700] text-[15px] flex flex-col gap-[26px]">
              <fieldset className="flex flex-col items-start w-full gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="border-b-[1px] border-b-[#121212] dark:border-b-white outline-none px-4 dark:bg-[#121212] bg-white w-full"
                />
              </fieldset>
              <fieldset className="flex flex-col items-start w-full gap-2">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  className="border-b-[1px] border-b-[#121212] dark:border-b-white outline-none px-4 dark:bg-[#121212] bg-white w-full"
                />
              </fieldset>
              <fieldset className="flex flex-col items-start w-full gap-2">
                <label htmlFor="name">Message</label>
                <textarea className="border-b-[1px] border-b-[#121212] dark:border-b-white outline-none px-4 dark:bg-[#121212] bg-white w-full h-[200px]" />
              </fieldset>
            </div>
            <div className="mt-[40px] w-full flex justify-end ">
              <button className="font-quicksand h-10 rounded-[5px] px-[28px] dark:bg-[#121212] bg-white border-secondary text-secondary border-[2px] text-[15px] font-[700]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[110px]">
        <h1 className="text-center text-[30px] font-bold pb-10">
          Testimonials
        </h1>
        <Slider />
      </div>

      <div className=" px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] mt-[96px] pb-10">
        <h2 className="text-[15px]">Need Help ?</h2>
        <p className="text-center text-[#121212] dark:text-white text-[30px] font-quicksand my-[35px]">
          If you have inquiries or need assistance, do not hesitate to chat with
          us. We are available Monday to Sunday (8am to 7pm). Public Holidays
          between 9am and 5pm.
        </p>

        <div className="flex justify-center items-center gap-[185px]">
          <Button text="CHAT WITH US" className="w-[160px]" />
          <Button text="CONTACT US" href="/contact" className="w-[160px]" />
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default AboutScreen;

type QuestionProp = {
  question: string;
  answer: string;
};
export const Questions = ({ question, answer }: QuestionProp) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="border-b-[1px] dark:text-black border-b-white dark:border-b-[#121212] py-[18px] w-full">
      <div className="flex justify-start items-center gap-4">
        {show ? (
          <FaMinus onClick={handleShow} className="cursor-pointer" />
        ) : (
          <FaPlus onClick={handleShow} className="cursor-pointer" />
        )}
        <p className="font-[700] text-[15px]">{question}</p>
      </div>

      {show && (
        <p className="font-[400] text-[15px] pl-8 mt-5 leading-[24px] pb-[32px]">
          {answer}
        </p>
      )}
    </div>
  );
};
