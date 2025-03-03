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
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

type Item = {
  src: string;
  alt: string;
};

type ReusableCarouselProps = {
  items: Item[];
};

const ProductSlider: React.FC<ReusableCarouselProps> = ({ items }) => {
  return (
    <div className="lg:mt-[24px] w-full flex justify-between items-center relative overflow-x-hidden gap-1">
      <div className="h-12 w-12 hidden rounded-full bg-primary lg:flex justify-center items-center cursor-pointer custom-nextt z-40">
        <MdOutlineArrowBackIos className="h-6 w-6 text-white" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="font-quicksand flex justify-center items-center">
              <Image
                src={item.src}
                alt={item.alt}
                className="rounded-[10px]"
                width={300}
                height={340}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="h-12 w-12 hidden rounded-full bg-primary lg:flex justify-center items-center cursor-pointer custom-prevv z-40">
          <MdOutlineArrowForwardIos className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
