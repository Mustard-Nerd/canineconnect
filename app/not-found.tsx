// app/404.tsx

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/button";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center dark:bg-primary px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] pt-[30px] lg:pt-[60px]">
      <div className="flex lg:flex-row flex-col items-center lg:justify-between lg:items-start w-full gap-10 mb-[125px]">
        <div className=" lg:w-[640px] pt-3 lg:pt-[50px] px-[5px] lg:px-[45px]">
          <h1 className="xl:text-[60px] text-[40px] font-[850px] mb-5 lg:mb-10">
            Oops! We&apos;ve dug  up a hole!
          </h1>
          <p className="font-quicksand text-center text-[20px] xl:text-[30px]">
            Looks like this page has gone missing, but don&apos;t worry,
            we&apos;ve got plenty more to explore.
          </p>

          <div className=" mt-10  lg:mt-[90px] flex justify-center items-center">
            <Link href="/" className="dark:bg-[#001C66] bg-[#0046FF] text-white px-8 lg:px-[50px] font-quicksand rounded-[8px] py-4 lg:py-[26px] text-center text-[14px] lg:text-[24px] font-normal">
              Sniff out more goodies
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden">
          <Image
            src={"/404.svg"}
            width={600}
            height={600}
            alt=""
            className=""
          />
        </div>
        <div className="w-full lg:hidden flex">
          <Image
            src={"/404.svg"}
            width={300}
            height={300}
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-2 w-full h-full  mb-20 lg:mb-[250px]">
        <div className="col-span-1 py-16 lg:py-[154px] flex flex-col justify-center items-center gap-3 bg-[#B6DDFF] dark:bg-[#005EB2] px-4 lg:px-[80px]">
          <Image
            src={"/404rev1.png"}
            width={140}
            height={140}
            alt=""
            quality={100}
            unoptimized={true}
          />
          <div className="flex flex-col items-center gap-4 font-quicksand">
            <p className="text-[20px] lg:text-[32px] font-[700]">
              “I couldn&apos;t find the page, but I found the best dog
              accessories here!”
            </p>
            <p>Adejoke Bisi, Dog Owner</p>
          </div>
        </div>
        <div className="col-span-1 py-16 lg:py-[154px] flex flex-col justify-center items-center gap-3 bg-[#DBEEFF] dark:bg-[#003666] px-4 sm:px-10 2xl:px-[80px] ">
          <Image
            src={"/404rev2.png"}
            width={140}
            height={140}
            alt=""
            quality={100}
            unoptimized={true}
          />
          <div className="flex flex-col items-center gap-4 font-quicksand">
            <p className="text-[20px] lg:text-[32px]  font-[700]">
              “Even when I got lost, their customer service guided me back!”
            </p>
            <p>Umoru Sarah, Pet Enthusiast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
