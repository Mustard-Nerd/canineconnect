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

  const [darkTheme, setDarkTheme] = useState(true);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

	useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);


  return (
    <Link href={href} className=' cursor-pointer'>
      {darkTheme ? (
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
