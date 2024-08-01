"use client"

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ComponentProps = {
  href?: string;
  w?: number;
};


export const Logo = ({ href = '/', w = 350 }: ComponentProps) => {
  const aspectRatio = 350 / 350;
  const height = w * aspectRatio;

  const { theme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;




  return (
    <Link href={href} className=' cursor-pointer'>
      {systemTheme === 'dark' ?(
        <Image
          src="/canine-connectD.svg"
          alt="Canine-Connect logo"
          className=' w-[250px] lg:w-[350px]'
          width={w}
          height={height}
        />
      ) 
      :
        <Image
          src="/canine-connect.svg"
          alt="Canine-Connect logo"
          className=' w-[250px] lg:w-[350px]'
          width={w}
          height={height}
        />
      } 
    </Link>
  );
};
