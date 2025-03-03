import Button from "@/components/button/button";
import Button2 from "@/components/button/button2";
import Image from "next/image";
import { FaFilter, FaSearch } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export default function ServiceHero() {
  return (
    <div className=" sm:pt-0 relative">
      <div
        className="hidden sm:flex  px-4  sm:pl-[30px] xl:pl-[150px] 2xl:pl-[200px] 
             w-full justify-end "
      >
        <div className="absolute left-0 top-[30%] sm:pl-[30px] xl:pl-[150px] 2xl:pl-[200px]  ">
          <div className="xl:w-[850px] w-[600px]  font-benz font-bold text-[36px]  xl:text-[55px]">
            Get The Best Service Around For Your Bestfriend
          </div>

          <div className="relative w-full max-w-sm mt-[60px]  font-quicksand">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-12 py-3 border bg-white dark:bg-primary border-primary dark:border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary dark:text-gray-400">
              <FaSearch />
            </div>
            <div className="absolute right-[2px]  top-1/2 px-3 rounded-r-[5px]  py-[9px] transform -translate-y-1/2 bg-secondary">
              <HiOutlineAdjustmentsHorizontal className="w-7 h-7" />
            </div>
          </div>
        </div>

        <div className=" ">
          <Image
            src="/serviceHero.webp"
            alt="logo"
            className=" xl:w-[900px] w-[500px] "
            width={900}
            height={900}
          />
        </div>
      </div>

      <div className="relative flex sm:hidden  bg-[url(/hero3.png)] bg-blend-overlay   h-[460px] bg-contain bg-no-repeat">
        {/* <div className="absolute inset-0 bg-black opacity-30 z-0"></div> */}
        <div className="px-4 flex flex-col items-center w-full  mt-[30px]">
          <div className=" font-benz text-center font-bold text-[25px] max-w-[260px] ">
            Get The Best Service Around For Your Best friend
          </div>

          <div className="relative w-full  max-w-sm mt-[30px]  font-quicksand">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-12 py-3 border bg-white dark:bg-primary border-primary dark:border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary dark:text-gray-400">
              <FaSearch />
            </div>
            <div className="absolute right-[2px]  top-1/2 px-3 rounded-r-[5px]  py-[9px] transform -translate-y-1/2 bg-secondary">
              <HiOutlineAdjustmentsHorizontal className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
