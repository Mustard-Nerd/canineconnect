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
    <div className="mt-[24px] w-full flex justify-between items-center relative overflow-x-hidden gap-1">
      <div>
        <div className="h-12 w-12 rounded-full bg-primary flex justify-center items-center cursor-pointer custom-nextt z-40">
          <MdOutlineArrowBackIos className="h-6 w-6 text-white" />
        </div>
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
            slidesPerView:
              items.length === 1
                ? 1
                : items.length === 2
                ? 2
                : items.length === 3
                ? 3
                : 4,
          },
          1200: {
            slidesPerView:
              items.length === 1
                ? 1
                : items.length === 2
                ? 2
                : items.length === 3
                ? 3
                : 4,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <div key={index} className="font-quicksand">
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
        <div className="h-12 w-12 rounded-full bg-primary flex justify-center items-center cursor-pointer custom-prevv z-40">
          <MdOutlineArrowForwardIos className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
