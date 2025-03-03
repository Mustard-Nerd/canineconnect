"use client"

import Image from "next/image";
import SearchInput from "@/components/search/search";
import ShoppingList from "@/components/carosel/shoppingList";
import { Footer3 } from "@/components/layout/footer3";
import { IoMdCart, IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { useMyContext } from "@/contex/MyContex";
import { IoClose, IoFilterOutline } from "react-icons/io5";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { MdArrowRight } from "react-icons/md";


const items1 = [
  {
    src: "/shop/feed1.webp",
    alt: "product 1",
    title: "Vitapet- Crunchy dog food",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed2.webp",
    alt: "product 2",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed3.webp",
    alt: "product 1",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed4.webp",
    alt: "product 2",
    title: "Booster Dry food for all ages ",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed4.webp",
    alt: "product 1",
    title: "Booster Dry food for all ages ",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed3.webp",
    alt: "product 2",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed2.webp",
    alt: "product 3",
    title: "Booster Dry Food for Adult dogs (15kg)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed1.webp",
    alt: "product 2",
    title: "Vitapet- Crunchy dog food",
    price: "₦ 35,000"
  },
];

const items = [
  {
    src: "/shop/feed1.webp",
    alt: "product 1",
    title: "Vitapet- Crunchy dog food",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed2.webp",
    alt: "product 2",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed3.webp",
    alt: "product 1",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed4.webp",
    alt: "product 2",
    title: "Booster Dry food for all ages ",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed4.webp",
    alt: "product 1",
    title: "Booster Dry food for all ages ",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed3.webp",
    alt: "product 2",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
];



export default function FeedShopScreen() {

  const [progress, setProgress] = useState(50);
  const [isSortModalVisible, setSortModalVisible] = useState(false);
  const [isFilterPanelVisible, setFilterPanelVisible] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleSortClick = () => {
    setSortModalVisible(true);
  };

  const handleFilterClick = () => {
    setFilterPanelVisible(true);
  };

  const closeSortModal = () => {
    setSortModalVisible(false);
  };

  const closeFilterPanel = () => {
    setFilterPanelVisible(false);
  };

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
            <SearchInput placeholder="Search feed brands and categories" />
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
              <div className=" text-[24px] " >Age </div>

              <div className=" flex flex-col text-[18px] gap-2 pl-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="white" >Puppy</label>
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
                  <label htmlFor="black" >Young Dogs</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="brown" >Adult dogs</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                  <label htmlFor="spotted" >Senior Dogs</label>
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

      <div className="lg:hidden z-0 w-[230px]  fixed bottom-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2   bg-secondary text-white flex font-bold text-[14px] items-center gap-5 font-quicksand justify-center  rounded-[20px]">
        <div 
          className="flex items-center pr-2 py-[15px] gap-2 border-r border-primary"
          onClick={handleSortClick}
        >
          <div >Sort by</div>
          <IoFilterOutline className="w-6 h-6" />
        </div>
        <div 
          className="flex items-center gap-2 py-[15px]"
          onClick={handleFilterClick}
        >
          <div>Filter</div>
          <HiOutlineAdjustmentsVertical className="w-6 h-6" />
        </div>
      </div>

      {isSortModalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-primary font-quicksand rounded-lg p-4 w-11/12 max-w-md">
            <div className=" flex items-center justify-between mb-4">
              <h2 className="text-xl  font-bold ">Sort By </h2>
              <IoClose className=" -mr-1 w-6 h-6  cursor-pointer" onClick={closeSortModal} />
            </div>
            <ul className="space-y-4 ">
              <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                <label className="cursor-pointer flex-grow" htmlFor="popularity">Popularity</label>
                <input type="radio" id="popularity" name="sort" className="cursor-pointer" />
              </li>
              <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                <label className="cursor-pointer flex-grow" htmlFor="newest">Newest Arrivals</label>
                <input type="radio" id="newest" name="sort" className="cursor-pointer" />
              </li>
              <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                <label className="cursor-pointer flex-grow" htmlFor="lowToHigh">Price: Low to High</label>
                <input type="radio" id="lowToHigh" name="sort" className="cursor-pointer" />
              </li>
              <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                <label className="cursor-pointer flex-grow" htmlFor="highToLow">Price: High to Low</label>
                <input type="radio" id="highToLow" name="sort" className="cursor-pointer" />
              </li>
              <li className="flex items-center justify-between border-b border-gray-300 pb-2">
                <label className="cursor-pointer flex-grow" htmlFor="rating">Customer Rating</label>
                <input type="radio" id="rating" name="sort" className="cursor-pointer" />
              </li>
            </ul>
            
          </div>
        </div>
      )}


      <div className={`fixed inset-y-0 left-0 z-50 transform ${isFilterPanelVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out  dark:bg-darkbg bg-blue text-primary dark:text-white font-quicksand w-3/4 max-w-sm shadow-lg overflow-auto`}>
        <div className="py-6 ">
          <div className=" flex items-center px-3 gap-8 pb-4">
            <IoClose className="text-2xl font-normal w-11 h-11 cursor-pointer" onClick={closeFilterPanel} />
            <h2 className="text-[30px] font-benz font-bold ">Filter </h2>
          </div>

          <div className="pb-3 pt-5 px-3 border-b border-t ">
            <div 
              className="text-[16px] font-[400]  cursor-pointer flex justify-between items-center"
              onClick={toggleAccordion}
            >
              CATEGORY
              <span className={`transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}>
              <MdArrowRight className=" w-5 h-5 " />
              </span>
            </div>

            {isOpen && (
              <div className="flex flex-col text-[18px] gap-2 pt-3 pl-2 cursor-pointer">
                {Array.isArray(data?.list) && data.list.map((item:any, index:any) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            )}
          </div>
          <div className="pb-5 pt-5 px-3 border-b  ">
            <div className=" text-[16px] font-normal pb-3" >Age </div>

            <div className=" flex flex-col text-[18px] gap-2 pl-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                <label htmlFor="white" >Puppy</label>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                <label htmlFor="black" >Young Dogs</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                <label htmlFor="brown" >Adult dogs</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 w-6 h-3 outline-none appearance-none accent-white bg-white border  border-primary checked:bg-yellow " />
                <label htmlFor="spotted" >Senior Dogs</label>
              </div>
            </div>
          </div>

          <div className="pb-5 pt-5 px-3 border-b  ">
            <div className=" text-[16px] font-normal pb-5">PRICE</div>

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

          <div className="pb-12 px-3   pt-6">
            <div className=" text-[16px] font-normal   pb-2">SHIPPED FROM</div>

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
      </div>

      <Footer3 />
    </div>
  );
}
