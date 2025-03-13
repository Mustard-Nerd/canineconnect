"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ComponentProps = {
  href?: string;
  w?: number;
};

export const Logo2 = ({ href = "/", w = 100 }: ComponentProps) => {
  const aspectRatio = 100 / 100;
  const height = w * aspectRatio;

  const [mounted, setMounted] = useState(false);
  const { systemTheme } = useTheme(); // Move useTheme to the top

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Link href={href} className="cursor-pointer">
      {systemTheme === "dark" ? (
        <Image
          src="/logoDark.svg"
          alt="Canine-Connect logo"
          className="w-[70px] lg:w-[100px]"
          width={w}
          height={height}
        />
      ) : (
        <Image
          src="/logo.svg"
          alt="Canine-Connect logo"
          className="w-[70px] lg:w-[100px]"
          width={w}
          height={height}
        />
      )}
    </Link>
  );
};
