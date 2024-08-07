// app/404.tsx

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/button";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center dark:bg-primary px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] pt-[60px]">
      <div className="flex justify-between items-start w-full gap-10 mb-[125px]">
        <div className="w-1/2 pt-[50px] px-[45px]">
          <h1 className="text-[60px] font-[850px] mb-10">
            Oops! We&apos;ve dug <br className="hidden 3xl:block" /> up a hole!
          </h1>
          <p className="font-quicksand text-center text-[32px]">
            Looks like this page has gone missing, but don&apos;t worry,
            we&apos;ve got plenty more to explore.
          </p>

          <div className="mt-[90px] flex justify-center items-center">
            <button className="dark:bg-[#001C66] bg-[#0046FF] text-white px-[50px] font-quicksand rounded-[8px] h-[96px] text-[24px]">
              Sniff out more goodies
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={"/404.svg"}
            width={30}
            height={30}
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 w-full h-full mb-[250px]">
        <div className="col-span-1 py-[154px] flex flex-col justify-center items-center gap-3 bg-[#B6DDFF] dark:bg-[#005EB2] px-[80px]">
          <Image
            src={"/404rev1.png"}
            width={140}
            height={140}
            alt=""
            quality={100}
            unoptimized={true}
          />
          <div className="flex flex-col items-center gap-4 font-quicksand">
            <p className="text-[32px] font-[700]">
              “I couldn&apos;t find the page, but I found the best dog
              accessories here!”
            </p>
            <p>Adejoke Bisi, Dog Owner</p>
          </div>
        </div>
        <div className="col-span-1 py-[154px] flex flex-col justify-center items-center gap-3 bg-[#DBEEFF] dark:bg-[#003666]">
          <Image
            src={"/404rev2.png"}
            width={140}
            height={140}
            alt=""
            quality={100}
            unoptimized={true}
          />
          <div className="flex flex-col items-center gap-4 font-quicksand">
            <p className="text-[32px] font-[700]">
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
