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



const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        //   scrollbar={{ draggable: true }}
        // navigation={{
        // }}
      >
        <SwiperSlide>
          <div className="flex-col items-center gap-[22px] bg-[#DBEEFF] flex w-full text-white rounded-[12px] px-[10px] pb-[30px] relative z-0 overflow-visible">
            <div className="-mt-5 relative z-40">
                <Image src={"/avatar.png"} alt="" width={45} height={45} />
            </div>
            <div className="text-[15px] font-quicksand text-[#121212]">
              <p>
                Whether you&apos;re a proud owner of a playful pup, a gentle
                giant, or a spunky senior, Canine connect has something to make
                their tail wag.
              </p>
              <p className="font-[700] pt-5">Adelakun Precious</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-visible">
              <div className="flex-col items-center gap-[22px] bg-[#DBEEFF] flex w-full text-white rounded-[12px] px-[10px] pb-[30px] relative z-0 overflow-visible">
                <div className="-mt-5 relative z-40">
                    <Image src={"/avatar.png"} alt="" width={45} height={45} />
                </div>
                <div className="text-[15px] font-quicksand text-[#121212]">
                  <p>
                    Whether you&apos;re a proud owner of a playful pup, a gentle
                    giant, or a spunky senior, Canine connect has something to make
                    their tail wag.
                  </p>
                  <p className="font-[700] pt-5">Adelakun Precious</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex-col items-center gap-[22px] bg-[#DBEEFF] flex w-full text-white rounded-[12px] px-[10px] pb-[30px] relative z-0 overflow-visible">
            <div className="-mt-5 relative z-40">
                <Image src={"/avatar.png"} alt="" width={45} height={45} />
            </div>
            <div className="text-[15px] font-quicksand text-[#121212]">
              <p>
                Whether you&apos;re a proud owner of a playful pup, a gentle
                giant, or a spunky senior, Canine connect has something to make
                their tail wag.
              </p>
              <p className="font-[700] pt-5">Adelakun Precious</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex-col items-center gap-[22px] bg-[#DBEEFF] flex w-full text-white rounded-[12px] px-[10px] pb-[30px] relative z-0 overflow-visible">
            <div className="-mt-5 relative z-40">
                <Image src={"/avatar.png"} alt="" width={45} height={45} />
            </div>
            <div className="text-[15px] font-quicksand text-[#121212]">
              <p>
                Whether you&apos;re a proud owner of a playful pup, a gentle
                giant, or a spunky senior, Canine connect has something to make
                their tail wag.
              </p>
              <p className="font-[700] pt-5">Adelakun Precious</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex-col items-center gap-[22px] bg-[#DBEEFF] flex w-full text-white rounded-[12px] px-[10px] pb-[30px] relative z-0 overflow-visible">
            <div className="-mt-5 relative z-40">
                <Image src={"/avatar.png"} alt="" width={45} height={45} />
            </div>
            <div className="text-[15px] font-quicksand text-[#121212]">
              <p>
                Whether you&apos;re a proud owner of a playful pup, a gentle
                giant, or a spunky senior, Canine connect has something to make
                their tail wag.
              </p>
              <p className="font-[700] pt-5">Adelakun Precious</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex-col items-center gap-[22px] bg-[#DBEEFF] flex w-full text-white rounded-[12px] px-[10px] pb-[30px] relative z-0 overflow-visible">
            <div className="-mt-5 relative z-40">
                <Image src={"/avatar.png"} alt="" width={45} height={45} />
            </div>
            <div className="text-[15px] font-quicksand text-[#121212]">
              <p>
                Whether you&apos;re a proud owner of a playful pup, a gentle
                giant, or a spunky senior, Canine connect has something to make
                their tail wag.
              </p>
              <p className="font-[700] pt-5">Adelakun Precious</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
