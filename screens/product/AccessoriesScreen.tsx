"use client";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import ProductSlider from "./ProductCarousel";

const items = [
  {
    src: "/access1.png",
    alt: "product 1",
  },
  {
    src: "/access2.png",
    alt: "product 2",
  },
  {
    src: "/access1.png",
    alt: "product 1",
  },
  {
    src: "/access2.png",
    alt: "product 2",
  },
  {
    src: "/access4.png",
    alt: "product 1",
  },
  {
    src: "/access3.png",
    alt: "product 2",
  },
  {
    src: "/access4.png",
    alt: "product 1",
  },
  {
    src: "/access3.png",
    alt: "product 2",
  },
];

const AccessoriesScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="dark:bg-primary px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] pt-[24px] lg:py-[75px] font-quicksand">
      <div className="border-[#0087FF] dark:border-[#003666] border-[2px] py-[20px] lg:py-[30px] px-[16px] lg:px-[20px] rounded-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-[24px] lg:gap-[30px]">
          <div className="col-span-1">
            <Image
              src={"/access.png"}
              width={200}
              height={200}
              alt="Accessories"
              className="w-full hidden lg:block"
              quality={100}
              unoptimized={true}
            />

            <div className="pt-4">
              <ProductSlider items={items} />
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex justify-between items-start gap-2">
              <p className="min-[1724px]:text-[48px] font-[700] text-[24px] lg:text-[32px]">
                Dog Cage with Washable Storage Bag for Pet Supplies, Food and
                Toy Storage
              </p>
              <Image
                src={"/wish.svg"}
                width={70}
                height={66}
                alt="Accessories"
                className="hidden lg:block"
                quality={100}
                unoptimized={true}
              />
            </div>
            <div className="dark:bg-white bg-primary h-[1px] w-full my-1"></div>
            <div>
              <p className="font-[700] min-[1724px]:text-[40px] text-[24px] lg:text-[32px]">
                ₦ 67,000
              </p>

              <div className="flex items-start gap-4 flex-col mt-[24px]">
                <div className="flex justify-start items-center gap-4">
                  <Image
                    src={"/notice.svg"}
                    width={36}
                    height={36}
                    alt="Accessories"
                    className="w-[20px] lg:w-[36px]"
                    quality={100}
                    unoptimized={true}
                  />
                  <p className="min-[1724px]:text-[24px] lg:text-[18px]">
                    1 unit left
                  </p>
                </div>
                <p className="min-[1724px]:text-[24px] text-[16px] lg:text-[18px]">
                  + Delivery fee of ₦900{" "}
                  <span className="text-[#356AC8]">Agege, Lagos</span>
                </p>

                <div className="flex justify-start items-center gap-1 min-[1724px]:pb-[30px]">
                  <svg
                    width="40"
                    height="38"
                    className="w-[30px] lg:w-[40px]"
                    viewBox="0 0 40 38"
                    fill="#CE5D06"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.23607L23.7637 14.8197L23.9883 15.5106H24.7148H36.8945L27.0409 22.6697L26.4531 23.0967L26.6776 23.7877L30.4414 35.3713L20.5878 28.2123L20 27.7852L19.4122 28.2123L9.55862 35.3713L13.3224 23.7877L13.5469 23.0967L12.9591 22.6697L3.1055 15.5106H15.2852H16.0117L16.2363 14.8197L20 3.23607Z"
                      stroke="#CE5D06"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="38"
                    className="w-[30px] lg:w-[40px]"
                    viewBox="0 0 40 38"
                    fill="#CE5D06"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.23607L23.7637 14.8197L23.9883 15.5106H24.7148H36.8945L27.0409 22.6697L26.4531 23.0967L26.6776 23.7877L30.4414 35.3713L20.5878 28.2123L20 27.7852L19.4122 28.2123L9.55862 35.3713L13.3224 23.7877L13.5469 23.0967L12.9591 22.6697L3.1055 15.5106H15.2852H16.0117L16.2363 14.8197L20 3.23607Z"
                      stroke="#CE5D06"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="38"
                    className="w-[30px] lg:w-[40px]"
                    viewBox="0 0 40 38"
                    fill="#CE5D06"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.23607L23.7637 14.8197L23.9883 15.5106H24.7148H36.8945L27.0409 22.6697L26.4531 23.0967L26.6776 23.7877L30.4414 35.3713L20.5878 28.2123L20 27.7852L19.4122 28.2123L9.55862 35.3713L13.3224 23.7877L13.5469 23.0967L12.9591 22.6697L3.1055 15.5106H15.2852H16.0117L16.2363 14.8197L20 3.23607Z"
                      stroke="#CE5D06"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="38"
                    className="w-[30px] lg:w-[40px]"
                    viewBox="0 0 40 38"
                    fill="#CE5D06"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.23607L23.7637 14.8197L23.9883 15.5106H24.7148H36.8945L27.0409 22.6697L26.4531 23.0967L26.6776 23.7877L30.4414 35.3713L20.5878 28.2123L20 27.7852L19.4122 28.2123L9.55862 35.3713L13.3224 23.7877L13.5469 23.0967L12.9591 22.6697L3.1055 15.5106H15.2852H16.0117L16.2363 14.8197L20 3.23607Z"
                      stroke="#CE5D06"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="38"
                    className="w-[30px] lg:w-[40px]"
                    viewBox="0 0 40 38"
                    fill="#CE5D06"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.23607L23.7637 14.8197L23.9883 15.5106H24.7148H36.8945L27.0409 22.6697L26.4531 23.0967L26.6776 23.7877L30.4414 35.3713L20.5878 28.2123L20 27.7852L19.4122 28.2123L9.55862 35.3713L13.3224 23.7877L13.5469 23.0967L12.9591 22.6697L3.1055 15.5106H15.2852H16.0117L16.2363 14.8197L20 3.23607Z"
                      stroke="#CE5D06"
                      stroke-width="2"
                    />
                  </svg>
                </div>

                <div className="lg:hidden w-full flex justify-end gap-5 items-center">
                  <Image
                    src={"/share.svg"}
                    width={70}
                    height={66}
                    alt="Accessories"
                    className="w-[38px]"
                    quality={100}
                    unoptimized={true}
                  />
                  <Image
                    src={"/wish.svg"}
                    width={70}
                    height={66}
                    alt="Accessories"
                    className="w-[38px]"
                    quality={100}
                    unoptimized={true}
                  />
                </div>

                <div className="dark:bg-white bg-primary h-[1px] w-full my-1"></div>

                <h1 className="text-[20px] lg:text-[26px] min-[1724px]:text-[32px] font-[700] min-[1724px]:pb-4">
                  VARIATIONS AVAILABLE
                </h1>
                <div className="flex flex-col lg:flex-row gap-[24px] justify-between items-start w-full">
                  <div className="flex flex-col items-start">
                    <p className="text-[20px] min-[1724px]:text-[28px] font-[700] pb-[24px]">
                      Size
                    </p>
                    <div className="flex justify-start items-center gap-5 min-[1724px]:gap-10">
                      <p className="bg-[#B38100] w-[60px] min-[1724px]:w-[80px] h-[50px] min-[1724px]:h-[60px] text-center flex justify-center items-center rounded-[14px] min-[1724px]:text-[32px] text-[24px] font-[850] font-benz text-black">
                        L
                      </p>
                      <p className="border-[#004A8C] border-[1px] w-[60px] min-[1724px]:w-[80px] h-[50px] min-[1724px]:h-[60px] text-center flex justify-center items-center rounded-[14px] min-[1724px]:text-[32px] text-[24px] font-[850] font-benz">
                        XL
                      </p>
                      <p className="border-[#004A8C] border-[1px] w-[60px] min-[1724px]:w-[80px] h-[50px] min-[1724px]:h-[60px] text-center flex justify-center items-center rounded-[14px] min-[1724px]:text-[32px] text-[24px] font-[850] font-benz">
                        XS
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-[20px] min-[1724px]:text-[28px] font-[700] pb-[24px]">
                      Colors
                    </p>
                    <div className="flex justify-start items-center gap-[20px] pr-5">
                      <p className="bg-[#FFFFFF] h-[50px] w-[50px] rounded-full"></p>
                      <p className="bg-[#004A8C] h-[50px] w-[50px] rounded-full"></p>
                      <p className="bg-[#FA13B9] h-[50px] w-[50px] rounded-full"></p>
                    </div>
                  </div>
                </div>

                <div className="pt-[30px] min-[1724px]:pt-[40px] hidden lg:flex justify-between items-start gap-2 w-full">
                  <div className="flex justify-center items-center gap-8 rounded-[20px] bg-[#003666] w-[30%] h-[60px] min-[1724px]:h-[100px] min-[1724px]:text-[32px] text-[24px]">
                    <p onClick={handleDecrement} className="cursor-pointer">
                      <FaMinus />
                    </p>{" "}
                    <p>{quantity}</p>{" "}
                    <p onClick={handleIncrement} className="cursor-pointer">
                      <FaPlus />
                    </p>
                  </div>

                  <button className="flex justify-between p-[30px] font-[700] min-[1724px]:text-[32px] text-[24px] items-center gap-8 rounded-[20px] bg-[#001C66] w-[70%] h-[60px] min-[1724px]:h-[100px]">
                    <LuShoppingCart className="text-[50px] min-[1724px]:text-[70px]" />
                    <p>ADD TO CART</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[50px] hidden lg:block">
          <p className="min-[1724px]:text-[24px] text-[18px] pb-1">
            SHARE THIS PRODUCT
          </p>

          <div className="flex justify-start items-center gap-5">
            <Image
              src={"/instagram.png"}
              alt={"insta"}
              className="rounded-[10px]"
              width={33}
              height={33}
            />
            <Image
              src={"/whatsapp.png"}
              alt={"insta"}
              className="rounded-[10px]"
              width={33}
              height={33}
            />
            <Image
              src={"/twitter.png"}
              alt={"insta"}
              className="rounded-[10px]"
              width={33}
              height={33}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesScreen;
