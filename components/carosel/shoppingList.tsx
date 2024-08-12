import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdCart } from 'react-icons/io';

type Item = {
  src: string;
  alt: string;
  title: string;
  price?: string;
};

type ShoppingListProps = {
  items: Item[];
  title ?: string;
  border ?: string;
};

const ShoppingList: React.FC<ShoppingListProps> = ({ items, title, border }) => {
  return (
    <div className={` ${border} border-border p-4 lg:px-5 lg:py-8 rounded-[10px] `}>
      <div className="pb-6 font-benz font-[700] text-[24px] lg:text-[44px]">{title}</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-x-5 gap-y-12">
        {items.map((item, index) => (
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
  );
};

export default ShoppingList;
