
"use client"


import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ComponentProps = {
  href?: string;
  w?: number;
};

export const Logo2 = ({ href = '/', w = 100 }: ComponentProps) => {
  const aspectRatio = 100 / 100;
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
          src="/logoDark.svg"
          alt="Canine-Connect logo"
          className=' w-[70px] lg:w-[100px]'
          width={w}
          height={height}
        />
      ): (
        <Image
          src="/logo.svg"
          alt="Canine-Connect logo"
          className=' w-[70px] lg:w-[100px]'
          width={w}
          height={height}
        />  
      )}
    </Link>
  );
};

