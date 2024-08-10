// app/404.tsx

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/button";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center dark:bg-primary px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] pt-[30px] lg:pt-[60px]">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-10 mb-[40px] lg:mb-[125px]">
        <div className=" lg:w-[640px] pt-[50px] px-[45px]">
          <h1 className="text-[32px] lg:text-[60px] font-[850px] mb-[25px] lg:mb-10">
            Oops! We&apos;ve <br className="lg:hidden" /> dug{" "}
            <br className="hidden 3xl:block" /> up a hole!
          </h1>
          <p className="font-quicksand text-center lg:text-[30px]">
            Looks like this page has gone missing, but don&apos;t worry,
            we&apos;ve got plenty more to explore.
          </p>

          <div className="pt-[40px] lg:mt-[90px] flex justify-center items-center">
            <Link
              href="/"
              className="dark:bg-[#001C66] bg-[#0046FF] text-white px-[20px] lg:px-[50px] font-quicksand rounded-[8px] py-[12px] lg:py-[26px] text-center text-[18px] lg:text-[24px] font-normal"
            >
              Sniff out more goodies
            </Link>
          </div>
        </div>
        <div className="px-[20px] lg:px-0">
          <Image
            src={"/404.svg"}
            width={600}
            height={600}
            alt=""
            className="hidden lg:block"
          />
          <Image
            src={"/404mobile.svg"}
            width={600}
            height={600}
            alt=""
            className="lg:hidden"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full mb-[100px] lg:mb-[250px]">
        <div className="col-span-1 py-[135px] lg:py-[154px] flex flex-col justify-center items-center gap-3 bg-[#B6DDFF] dark:bg-[#005EB2] px-[20px] lg:px-[80px]">
          <Image
            src={"/404rev1.png"}
            width={140}
            height={140}
            alt=""
            quality={100}
            unoptimized={true}
          />
          <div className="flex flex-col items-center gap-4 font-quicksand">
            <p className="text-[18px] lg:text-[32px] font-[700]">
              “I couldn&apos;t find the page, but I found the best dog
              accessories here!”
            </p>
            <p>Adejoke Bisi, Dog Owner</p>
          </div>
        </div>
        <div className="col-span-1 py-[135px] lg:py-[154px] flex flex-col justify-center items-center gap-3 bg-[#DBEEFF] dark:bg-[#003666] px-[20px] lg:px-[80px]">
          <Image
            src={"/404rev2.png"}
            width={140}
            height={140}
            alt=""
            quality={100}
            unoptimized={true}
          />
          <div className="flex flex-col items-center gap-4 font-quicksand">
            <p className="text-[18px] lg:text-[32px] font-[700]">
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
