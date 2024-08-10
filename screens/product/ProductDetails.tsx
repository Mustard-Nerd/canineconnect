import Button from "@/components/button/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { Footer3 } from "@/components/layout/footer3";

const items = [
  {
    src: "/carosel1.png",
    alt: "product 1",
    title: "Harness walk kit",
    description: "Foldable pet dog house",
    price: "₦ 35,000",
  },
  {
    src: "/dog.png",
    alt: "product 2",
    title: "Harness walk kit",
    description: "Foldable pet dog house",
    price: "₦ 35,000",
  },
  {
    src: "/carosel1.png",
    alt: "product 1",
    title: "Harness walk kit",
    description: "Foldable pet dog house",
    price: "₦ 35,000",
  },
  {
    src: "/dog.png",
    alt: "product 2",
    title: "Harness walk kit",
    description: "Foldable pet dog house",
    price: "₦ 35,000",
  },
];

const ProductDetails = () => {
  return (
    <>
      <div className=" px-4 sm:px-[30px] xl:px-[150px] 2xl:px-[200px] py-[24px] lg:py-[75px] font-quicksand dark:bg-primary">
        <div className="bg-[#DBEEFF] dark:bg-[#003666] py-[30px] px-[20px] rounded-[20px] mb-[24px] lg:mb-[70px]">
          <h1 className="font-[700] text-[20px] lg:text-[28px] min-[1724px]:text-[40px] pb-4 font-benz">
            Product Details
          </h1>

          <ul className="list-disc lg:text-[18px] min-[1724px]:text-[24px] px-4 pb-5 lg:pb-[80px]">
            <li>
              Removable and washable pet supplies storage bag cat and dog cage
              storage bag
            </li>
            <li>
              Multiple Storage Bags: One Zipper pocket, one outer pocket, one
              mesh pocket and one plastic hook to meet most of your storage
              needs{" "}
            </li>
            <li>
              Easy to install, 2 hooks can be directly and quickly fixed on the
              pet cage.
            </li>
            <li>
              Made of high quality Canvas material which is durable and does not
              fade.
            </li>
            <li>
              Suitable for Pet supplies storage, home garden storage, etc.
            </li>
          </ul>

          <div>
            <h1 className="text-[18px] lg:text-[28px] font-[600]">Note:</h1>
            <ul className="list-disc lg:text-[18px] min-[1724px]:text-[24px] px-4">
              <li>Please allow slightly error due to manual measurement.</li>
              <li>
                Due to the difference between different monitors, the picture
                may not reflect the actual color of the item.
              </li>
              <li>Wish you a wonderful on-line shopping!</li>
            </ul>
          </div>
        </div>

        <div className="border-[#0087FF] dark:border-[#003666] border-[2px] py-[30px] px-[20px] rounded-[20px] mb-[24px] lg:mb-[70px]">
          <h1 className="font-[700] text-[20px] font-benz lg:text-[28px] min-[1724px]:text-[40px] pb-[50px]">
            Specifications
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-[20px]">
            <div className="col-span-1 border-[1px] rounded-[12px]">
              <div className="border-b-[1px] rounded-b-[12px] px-[18px] lg:px-[44px] py-[18px] lg:py-[30px]">
                <h1 className="text-[18px] lg:text-[26px] min-[1724px]:text-[32px] font-[700]">
                  KEY FEATURES
                </h1>
              </div>

              <div className="px-[44px] pb-[30px] lg:pb-[126px] pt-[30px] lg:pt-[65px]">
                <ul className="list-disc lg:text-[18px] min-[1724px]:text-[24px] lg:px-4">
                  <li>SKU: GE779LS4UZWFWNAFAMZ </li>
                  <li>Model: N/A </li>
                  <li>Production Country: China</li>
                  <li>Size (L x W x H cm): 19.00 x 17.00 x 3.00 </li>
                  <li>Weight (kg): 0.19</li>
                  <li>Color: Green</li>
                  <li>Main Material: Other</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 border-[1px] rounded-[12px]">
              <div className="border-b-[1px] rounded-b-[12px] px-[18px] lg:px-[44px] py-[18px] lg:py-[30px]">
                <h1 className="text-[18px] lg:text-[26px] min-[1724px]:text-[32px] font-[700]">
                  WHAT&apos;S IN THE BOX
                </h1>
              </div>

              <div className="px-[44px] pb-[30px] lg:pb-[126px] pt-[30px] lg:pt-[65px]">
                <ul className="list-disc lg:text-[18px] min-[1724px]:text-[24px] lg:px-4">
                  <li>1 Piece of dog cage and hanging organizer bag</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#0087FF] dark:border-[#003666] border-[2px] py-[30px] px-[20px] rounded-[20px] mb-[24px] lg:mb-[70px]">
          <h1 className="font-[700] text-[20px] font-benz text-center lg:text-left lg:text-[28px] min-[1724px]:text-[40px] pb-[32px] lg:pb-[55px]">
            Customer Reviews
          </h1>

          <div className="border-b-[1px] border-b-[#736E6F] pb-[30px]">
            <p className="text-center lg:text-[18px] min-[1724px]:text-[24px]">
              No Reviews yet
            </p>
          </div>
          <div className="pt-[20px] lg:pt-[50px]">
            <h2 className="text-[18px] text-center lg:text-left lg:text-[26px] min-[1724px]:text-[32px] font-[700] pb-[45px]">
              Be the first to Review{" "}
            </h2>
            <p className="text-[18px] lg:text-[26px] min-[1724px]:text-[32px] font-[700]">
              Your Rating
            </p>

            <div className="flex justify-start items-center gap-1 pt-[8px] pb-[22px] lg:pt-[30px] lg:pb-[30px]">
              <svg
                width="40"
                height="38"
                className="w-[28px] lg:w-[40px]"
                viewBox="0 0 40 38"
                fill="none"
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
                className="w-[28px] lg:w-[40px]"
                viewBox="0 0 40 38"
                fill="none"
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
                className="w-[28px] lg:w-[40px]"
                viewBox="0 0 40 38"
                fill="none"
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
                className="w-[28px] lg:w-[40px]"
                viewBox="0 0 40 38"
                fill="none"
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
                className="w-[28px] lg:w-[40px]"
                viewBox="0 0 40 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.23607L23.7637 14.8197L23.9883 15.5106H24.7148H36.8945L27.0409 22.6697L26.4531 23.0967L26.6776 23.7877L30.4414 35.3713L20.5878 28.2123L20 27.7852L19.4122 28.2123L9.55862 35.3713L13.3224 23.7877L13.5469 23.0967L12.9591 22.6697L3.1055 15.5106H15.2852H16.0117L16.2363 14.8197L20 3.23607Z"
                  stroke="#CE5D06"
                  stroke-width="2"
                />
              </svg>
            </div>

            <p className="text-[18px] lg:text-[26px] min-[1724px]:text-[32px] font-[700]">
              Your Review
            </p>

            <textarea
              name=""
              className="w-full bg-[#DBEEFF] dark:bg-[#003666] h-[135px] lg:h-[230px] mt-[20px] lg:mt-[45px] outline-none p-4 lg:p-5"
              id=""
            ></textarea>

            <div className="w-full flex justify-center lg:justify-end mt-[20px] lg:mt-[32px]">
              <div className="flex justify-end items-center lg:w-[20%]">
                <Button text={"Submit"} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#0087FF] dark:border-[#003666] border-[2px] py-[30px] px-[16px] lg:px-[20px] rounded-[20px] mb-[24px] lg:mb-[70px]">
          <div className="flex justify-between items-center w-full pb-[20px] lg:pb-[70px]">
            <h1 className="font-[700] text-[20px] font-benz lg:text-[28px] min-[1724px]:text-[40px]">
              You may also like{" "}
            </h1>

            <Link
              href={"/"}
              className="text-[14px] lg:text-[18px] min-[1724px]:text-[24px] font-[700] flex justify-center gap-1 lg:gap-3 items-center"
            >
              See All <FaArrowRight />
            </Link>
          </div>

          <div className="flex justify-between flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-5">
            {items.map((item, index) => (
              <div key={index} className="w-[45%] font-quicksand">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="rounded-[10px]"
                  width={300}
                  height={340}
                />
                <div className="mt-[15px] flex flex-col gap-1">
                  <div className="font-quicksand font-normal lg:text-[20px] text-[12px]">
                    {item.description}
                  </div>
                  <div className="font-quicksand font-[700] lg:text-[18px] min-[1724px]:text-[24px] text-[12px]">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-[#0087FF] dark:border-[#003666] border-[2px] py-[30px] px-[16px] lg:px-[20px] rounded-[20px]">
          <div className="flex justify-between items-center w-full pb-[20px] lg:pb-[70px]">
            <h1 className="font-[700] text-[19px] font-benz lg:text-[28px] min-[1724px]:text-[40px]">
              More From this Vendor
            </h1>

            <Link
              href={"/"}
              className="text-[14px] lg:text-[18px] min-[1724px]:text-[24px] font-[700] flex justify-center gap-1 lg:gap-3 items-center"
            >
              See All <FaArrowRight />
            </Link>
          </div>

          <div className="flex justify-between flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-5">
            {items.map((item, index) => (
              <div key={index} className="w-[45%] font-quicksand">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="rounded-[10px]"
                  width={300}
                  height={340}
                />
                <div className="mt-[15px] flex flex-col gap-1">
                  <div className="font-quicksand font-normal lg:text-[20px] text-[12px]">
                    {item.description}
                  </div>
                  <div className="font-quicksand font-[700] lg:text-[18px] min-[1724px]:text-[24px] text-[12px]">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer3 />
    </>
  );
};

export default ProductDetails;
