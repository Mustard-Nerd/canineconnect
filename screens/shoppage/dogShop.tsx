"use client"

import Image from "next/image";
import SearchInput from "@/components/search/search";
import ShoppingList from "@/components/carosel/shoppingList";
import { Footer3 } from "@/components/layout/footer3";
import { IoMdCart, IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { useMyContext } from "@/contex/MyContex";






const items1 = [
  {
    src: "/shop/dog1.png",
    alt: "product 1",
    title: "Tibetian Mastiff",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog2.png",
    alt: "product 2",
    title: "Lassa Apso",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog3.png",
    alt: "Pitbull 1",
    title: "Pitbull",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog4.png",
    alt: "Poodle 2",
    title: "Poodle",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog4.png",
    alt: "Poodle 1",
    title: "Poodle",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog3.png",
    alt: "Pitbull 2",
    title: "Pitbull",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog2.png",
    alt: "product 3",
    title: "Lassa Apso",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog1.png",
    alt: "Tibetian Mastiff 2",
    title: "Tibetian Mastiff",
    price: "₦ 35,000"
  },
];

const items = [
  {
    src: "/shop/dog1.png",
    alt: "product 1",
    title: "Tibetian Mastiff",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog2.png",
    alt: "product 2",
    title: "Lassa Apso",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog3.png",
    alt: "Pitbull 1",
    title: "Pitbull",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog4.png",
    alt: "Poodle 2",
    title: "Poodle",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog4.png",
    alt: "Poodle 1",
    title: "Poodle",
    price: "₦ 35,000"
  },
  {
    src: "/shop/dog3.png",
    alt: "Pitbull 2",
    title: "Pitbull",
    price: "₦ 35,000"
  },

];



export default function DogShopScreen() {

  const [progress, setProgress] = useState(50);

  const incrementProgress = () => {
    if (progress < 100) setProgress(progress + 10);
  };

  const decrementProgress = () => {
    if (progress > 0) setProgress(progress - 10);
  };

  const { data } = useMyContext();

  console.log(data)

  return (
    <div>
      <div className="px-4  sm:px-[30px] xl:px-[150px] 2xl:px-[200px] pt-8  ">

        <div className="   flex  justify-center">
          <div className=" w-[800px] ">
            <SearchInput placeholder="Search dogs and breeds" />
          </div>
        </div>

        <div className=" font-benz flex justify-center font-[700] text-[24px] py-[60px]  lg:text-[44px]">
          {data?.title}
        </div>

        <div className=" flex gap-8 items-stretch justify-between ">

          <div className="py-8 px-8 hidden  sm:flex flex-col dark:bg-darkbg bg-blue font-quicksand font-normal  rounded-[16px] w-[290px]">
            <div className=" pb-12 border-b ">
              <div className=" text-[24px]  pb-3">CATEGORY</div>
              <div className=" flex flex-col text-[18px] gap-2 pl-2 cursor-pointer">
              {Array.isArray(data?.list) && data.list.map((item:any, index:any) => (
                <div key={index}>{item}</div>
              ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-12  border-b pt-6">
              <div className=" text-[24px] " >COLOR </div>

              <div className=" flex flex-col text-[18px] gap-2 pl-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="white" >White</label>
                </div>
                {/* <div className="flex items-center">
                  <input type="checkbox" id="checkbox" className="hidden" />
                  <label htmlFor="checkbox" className="relative flex items-center cursor-pointer">
                    <span className="w-6 h-3 inline-block border border-primary rounded-sm bg-white"></span>
                    
                    <IoMdCheckmark className="absolute w-6 h-3 text-secondary font-bold hidden" />
                    <label htmlFor="checkbox" className="ml-2">White</label>
                  </label>
                </div> */}
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="black" >Black</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="brown" >Brown</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="spotted" >Spotted</label>
                </div>
              </div>
            </div>

            <div className="pb-12 border-b  pt-6">
              <div className=" text-[24px]  pb-5">PRICE</div>

              <div className="w-full max-w-xs  text-[14px] pl-2">
                <div className="w-full bg-[#B38120]  rounded-full h-1  mb-6">
                  <div
                    className="bg-yellow h-1 rounded-full relative transition-all duration-200 ease-linear"
                    style={{ width: `${progress}%` }}
                  >
                    <div
                      className="absolute top-[-5px] right-[-8px] bg-yellow rounded-full w-4 h-4"
                    ></div>
                  </div>
                </div>
                <div className="flex justify-center cursor-pointer gap-2">
                  <button
                    onClick={decrementProgress}
                    className="  px-5 py-0.5 border"
                  >
                    Min
                  </button>
                  <button
                    onClick={incrementProgress}
                    className=" px-5 py-0.5 border "
                  >
                    Max
                  </button>
                </div>
              </div>
            </div>

            <div className="pb-12  pt-6">
              <div className=" text-[20px] 2xl:text-[24px]  pb-2">SHIPPED FROM</div>

              <div className=" flex flex-col text-[18px] gap-2 pl-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="brown">Abroad</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="spotted">Within Nigeria</label>
                </div>
              </div>
            </div>

          </div>

          <div className={` border  border-border p-4 lg:px-5 lg:py-6 rounded-[10px] `}>
            <div className="pb-6 font-benz font-[700] text-[24px] lg:text-[40px]">Great Dane
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-x-5 gap-y-12">
              {items?.map((item, index) => (
                <div key={index} className="font-quicksand w-full group">
                  <div className="overflow-hidden rounded-[15px]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="rounded-[10px] w-full transform transition-transform duration-700 lg:group-hover:scale-105  lg:group-hover:-translate-y-[16px]  group-hover:-translate-y-[4px]"
                      width={320}
                      height={325}
                    />
                  </div>
                  <div className=" lg:pt-6 lg:group-hover:pt-9 pt-3 group-hover:pt-3 ">
                    <div className=" mt-2 group-hover:hidden flex flex-col transition-opacity duration-300 ease-in-out gap-1">
                      <div className="lg:bold-text font-normal text-[10px] sm:text-[14px] lg:text-[16px]">{item.title}</div>
                      <div className="lg:bold-text font-semibold text-[10px] sm:text-[16px] lg:text-[20px]">{item.price}</div>
                    </div>
                    <div className=" group-hover:flex hidden  duration-700 transition-shadow ease-in-out">
                      <div   className="max-w-[170px] flex items-center gap-2 py-1 lg:py-2 px-4 text-[10px] lg:text-[16px] bg-secondary text-center rounded-xl font-semibold text-white" >
                      <IoMdCart className="w-[20px] h-[20px]" />
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" mb-10 lg:mb-20">
          <ShoppingList items={items1}  />
        </div>

      </div>

      <Footer3 />
    </div>
  );
}
