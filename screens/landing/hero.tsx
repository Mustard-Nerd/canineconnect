import Button from "@/components/button/button";
import Button2 from "@/components/button/button2";
import Image from "next/image";

export default function Hero() {  
  
  
    return (
      <div className=" sm:pt-0">
        <div className="hidden sm:flex justify-between px-4  sm:pl-[30px] xl:pl-[150px] 2xl:pl-[200px] 
            lg:gap-12 gap-5 ">
          <div className=" w-1/2 max-w-[570px] mt-[110px] lg:mt-[140px] xl:mt-[180px]">
            <div className=" font-benz font-bold text-[36px]  xl:text-[55px]">
                Your Best Stop For All Your Dog Affairs
            </div>
            <div className=" font-quicksand medium-text">
                All your dog needs all in one place
            </div>
            <div className=" flex gap-3 items-center mt-10 w-[230px]">
                <Button text="BUY"  href="/auth/sign-up" />
                <Button2  text="SELL" href="/auth/sign-up" />
            </div>
          </div>
          <div className="w-1/2 -mt-10">
            <Image
              src="/hero2.png"
              alt="hero"
              width={1000}
              height={1000}
            />
          </div>
        </div>
         
        <div className="relative flex sm:hidden  bg-[url(/hero3.png)] bg-blend-overlay   h-[460px] bg-contain bg-no-repeat" >
          {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
          <div className=" flex flex-col items-center w-full  mt-[30px]">
            <div className=" font-benz font-bold text-[25px] max-w-[260px] ">
                Your Best Stop For  All Your Dog Affairs
            </div>
            <div className=" font-quicksand small-text">
                All your dog needs all in one place
            </div>
            <div className=" flex gap-3 items-center mt-10 ">
                <Button2  text="SELL" />
                <Button text="BUY" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  