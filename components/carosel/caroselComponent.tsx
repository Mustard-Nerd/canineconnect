"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

type Item = {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: string;
};

type ReusableCarouselProps = {
  items: Item[];
};

const ReusableCarousel: React.FC<ReusableCarouselProps> = ({
  items,
}) => {

    interface ButtonGroupProps {
        next: () => void;
        previous: () => void;
        carouselState: {
          currentSlide: number;
        };
      }

    const ButtonGroup: React.FC<ButtonGroupProps> = ({
        next,
        previous,
        carouselState
      }) => {
        const { currentSlide } = carouselState;
      
        return (
          <div className="absolute   top-36   flex justify-between w-full">
            <FaCircleArrowLeft
              className={`cursor-pointer -ml-3 lg:-ml-7 w-6 h-6 lg:w-10 lg:h-10 text-secondary`}
              onClick={previous}
            />
            <FaCircleArrowRight className="cursor-pointer  -ml-3 lg:-mr-7 w-6 h-6 lg:w-10 lg:h-10 text-secondary" onClick={next} />
          </div>
        );
      };
      
      const responsive = {
        xl: {
          breakpoint: { max: 3000, min: 1200 },
          items: 5,
          slidesToSlide: 1
        },
        desktop: {
          breakpoint: { max: 1200, min: 624 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 624, min: 364 },
          items: 3,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 364, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };



  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .2"
      transitionDuration={50}
      arrows={false}
      containerClass="carousel-container"
      renderButtonGroupOutside={true}
      customButtonGroup={
        <ButtonGroup 
          next={() => {}} 
          previous={() => {}} 
          carouselState={{ currentSlide: 0 }}
        />
      }
      className="pb-10"
    >
      {items.map((item, index) => (
        <div key={index} className="font-quicksand">
          <Image
            src={item.src}
            alt={item.alt}
            className="rounded-[10px]"
            width={300}
            height={340}
          />
          <div className="mt-[15px] flex flex-col gap-1">
            <div className="lg:bold-text font-bold text-[12px]">{item.title}</div>
            <div className="font-quicksand font-normal lg:text-[15px] text-[12px]">{item.description}</div>
            <div className="font-quicksand font-normal lg:text-[15px] text-[12px]">{item.price}</div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ReusableCarousel;