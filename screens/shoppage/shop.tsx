"use client"

import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import SearchInput from "@/components/search/search";
import ShoppingList from "@/components/carosel/shoppingList";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Button from "@/components/button/button";
import Link from "next/link";




const items = [
  {
    src: "/shop/group1.png",
    alt: "product 1",
    title: "Healthy puppies",
  },
  {
    src: "/shop/group2.png",
    alt: "product 2",
    title: "Dry feed",
  },
  {
    src: "/shop/group3.png",
    alt: "product 1",
    title: "Wet feed",
  },
  {
    src: "/shop/group4.png",
    alt: "product 2",
    title: "Raw feed",
  },
  {
    src: "/shop/group4.png",
    alt: "product 1",
    title: "Raw feed",
  },
  {
    src: "/shop/group3.png",
    alt: "product 2",
    title: "Wet feed",
  },
  {
    src: "/shop/group2.png",
    alt: "product 3",
    title: "Dry feed",
  },
  {
    src: "/shop/group1.png",
    alt: "product 2",
    title: "Healthy puppies",
  },
];

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

const items2 = [
  {
    src: "/shop/feed1.png",
    alt: "product 1",
    title: "Vitapet- Crunchy dog food",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed2.png",
    alt: "product 2",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed3.png",
    alt: "product 1",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed4.png",
    alt: "product 2",
    title: "Booster Dry food for all ages ",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed4.png",
    alt: "product 1",
    title: "Booster Dry food for all ages ",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed3.png",
    alt: "product 2",
    title: "Meaty chunks in Jelly Chicken (24 cans)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed2.png",
    alt: "product 3",
    title: "Booster Dry Food for Adult dogs (15kg)",
    price: "₦ 35,000"
  },
  {
    src: "/shop/feed1.png",
    alt: "product 2",
    title: "Vitapet- Crunchy dog food",
    price: "₦ 35,000"
  },
];

const items3 = [
  {
    src: "/shop/toy1.png",
    alt: "product 1",
    title: "Multifunctional shower head for bathing your dog",
    price: "₦ 35,000"
  },
  {
    src: "/shop/toy2.png",
    alt: "product 2",
    title: "5cm Rubber Ball Chew Treat",
    price: "₦ 35,000"
  },
  {
    src: "/shop/toy3.png",
    alt: "product 1",
    title: "Foldable pet dog house",
    price: "₦ 35,000"
  },
  {
    src: "/shop/toy4.png",
    alt: "product 2",
    title: "Dog Cage with Washable Storage Bag",
    price: "₦ 35,000"
  },
  {
    src: "/shop/toy4.png",
    alt: "product 1",
    title: "Dog Cage with Washable Storage Bag",
    price: "₦ 35,000"
  },
  {
    src: "/shop/toy3.png",
    alt: "product 2",
    title: "Foldable pet dog house",
    price: "₦ 35,000"
  },
  {
    src: "/shop/toy2.png",
    alt: "product 3",
    title: "5cm Rubber Ball Chew Treat",
    price: "₦ 35,000"
  },
  {
    src: "/shop/toy1.png",
    alt: "product 2",
    title: "Multifunctional shower head for bathing your dog",
    price: "₦ 35,000"
  },
];





export default function ShopScreen() {
  return (
    <div className="px-4  sm:px-[30px] xl:px-[150px] 2xl:px-[200px] py-8 w-full flex flex-col">
      <div className=" grid grid-cols-4 gap-7 font-quicksand 2xl:text-[20px] text-[16px] font-normal">
        <div className="hidden lg:flex flex-col gap-7  ">
          <div className="flex flex-col justify-center px-4 py-6 sm:px-4 sm:py-6  h-[320px]   gap-3 dark:bg-darkbg bg-primaryD rounded-lg">
            <div className="flex items-center gap-6">
              <Image src="/shop/dog.svg" alt="dog" className="2xl:w-[60px] w-[40px]" width={60} height={60} />
              <div>Dogs</div>
            </div>
            <div className="flex items-center gap-6">
              <Image src="/shop/feed.svg" alt="dog" className="2xl:w-[60px] w-[40px]" width={60} height={60} />
              <div>Dog Feed</div>
            </div>
            <div className="flex items-center gap-6">
              <Image src="/shop/bone.svg" alt="dog" className="2xl:w-[60px] w-[40px]" width={60} height={60} />
              <div>Accessories</div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8  h-full   dark:bg-darkbg bg-primaryD rounded-lg">
            FOR PROMOTIONS
          </div>
        </div>
        <div className=" w-full flex flex-col col-span-4 lg:col-span-2 h-full  gap-7 lg:w-auto">
          <SearchInput />
          <div className="w-full h-full">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/shop/carosel.png"
                  alt="dog"
                  width={800}
                  height={800}
                  className="w-full h-full rounded-[16px]  object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/shop/carosel.png"
                  alt="dog"
                  width={800}
                  height={800}
                  className="w-full h-full rounded-[16px]  object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/shop/carosel.png"
                  alt="dog"
                  width={800}
                  height={800}
                  className="w-full h-full rounded-[16px]  object-cover"
                />
              </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
        <div className="  hidden lg:flex flex-col gap-7 ">
          <div className="flex flex-col justify-center gap-3 px-4 py-6 sm:px-6 sm:py-8  h-[320px]   dark:bg-darkbg bg-primaryD rounded-lg">
            <div className="flex items-center gap-6">
              <Image src="/shop/vendor.svg" alt="dog" className="2xl:w-[60px] w-[40px]" width={60} height={60} />
              <div>Become a Vendor</div>
            </div>
            <div className="flex items-center gap-6">
              <Image src="/shop/message.svg" alt="dog" className="2xl:w-[60px] w-[40px]" width={60} height={60} />
              <div>Customer Service</div>
            </div>
          </div>
          <div className="flex items-center  justify-center px-4 py-6 sm:px-6 sm:py-8 h-full   dark:bg-darkbg bg-primaryD rounded-lg">
            <div>FOR PROMOTIONS</div>
          </div>
        </div>

      </div>

      <div className=" mt-10 lg:mt-20 grid grid-cols-4 w-full gap-x-5 gap-y-12 border border-secondary p-4 lg:px-5 lg:py-8 rounded-[10px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="font-quicksand w-full group "
          >
            <div className="overflow-hidden rounded-[15px]">
              <Image
                src={item.src}
                alt={item.alt}
                className="rounded-[10px] w-full transform transition-transform duration-700 lg:group-hover:scale-105  lg:group-hover:-translate-y-4  group-hover:-translate-y-2 "
                width={320}
                height={325}
              />
            </div>
            <div className=" lg:pt-7 lg:group-hover:pt-7 pt-3 group-hover:pt-3 ">
              <div className="lg:mt-[22px]  group-hover:hidden flex flex-col transition-opacity duration-300 ease-in-out">
                <div className="lg:bold-text font-semibold text-[10px] sm:text-[16px] lg:text-[20px]">
                  {item.title}
                </div>
              </div>
              <div className=" group-hover:flex hidden  duration-700 transition-shadow ease-in-out">
                <Link href="/shop/dog"  className="max-w-[170px] py-1 lg:py-2 px-3 text-[10px] lg:text-[16px] bg-secondary text-center rounded-xl" >Select Options</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <ShoppingList items={items1} title="Top Selling Breeds" />
      </div>

      <div>
        <ShoppingList items={items2} title="Highly Nutritious Feed" />
      </div>

      <div>
        <ShoppingList items={items3} title="Exotic toys, grooming products, and lots more. . ." />
      </div>

    </div>
  );
}
