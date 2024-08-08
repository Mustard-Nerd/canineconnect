import React from 'react';
import Image from 'next/image';

type Item = {
  src: string;
  alt: string;
  title: string;
  price?: string;
};

type ShoppingListProps = {
  items: Item[];
  title: string;
};

const ShoppingList: React.FC<ShoppingListProps> = ({ items, title }) => {
  return (
    <div className="mt-10 lg:mt-20 border border-border p-4 lg:px-5 lg:py-8 rounded-[10px]">
      <div className="pb-6 font-benz font-[700] text-[24px] lg:text-[44px]">{title}</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-x-5 gap-y-12">
        {items.map((item, index) => (
          <div key={index} className="font-quicksand w-full">
            <Image
              src={item.src}
              alt={item.alt}
              className="rounded-[10px] w-full"
              width={320}
              height={325}
            />
            <div className="lg:mt-[22px] mt-2 flex flex-col gap-1">
              <div className="lg:bold-text font-normal text-[10px] sm:text-[14px] lg:text-[16px]">{item.title}</div>
              <div className="lg:bold-text font-semibold text-[10px] sm:text-[16px] lg:text-[20px]">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
