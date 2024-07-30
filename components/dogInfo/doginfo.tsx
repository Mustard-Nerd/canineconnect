import React from 'react';
import Image from 'next/image';
import Button2 from '../button/button2';

type DogInfoProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  row: string;
  show?: boolean;  // Show or hide the button 
};

const DogInfo: React.FC<DogInfoProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  row,
  show = true,  // Show or hide the button
}) => {
  return (
    <div className={`flex my-[45px] ${row} flex-col items-center justify-between  gap-10 sm:gap-20 xl:gap-[150px]`}>
      <div className="flex flex-col items-center justify-center sm:items-start">
        <div className="font-benz font-bold lg:text-[30px] text-[20px]">{title}</div>
        <div className="font-quicksand pt-4 text-center sm:text-left font-normal text-[15px] lead-[24px] max-w-[480px]">
          {description}
        </div>
       {show &&  <div className="mt-5 sm:mt-10 lg:w-[180px]">
          <Button2 text={buttonText} href={buttonLink} />
        </div>}
      </div>
      <div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="rounded-[10px]"
          width={600}
          height={700}
        />
      </div>
    </div>
  );
};

export default DogInfo;
