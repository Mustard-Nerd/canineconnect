import Image from 'next/image';
import Link from 'next/link';

type ComponentProps = {
  href?: string;
  w?: number;
};

export const Logo2 = ({ href = '/', w = 100 }: ComponentProps) => {
  const aspectRatio = 100 / 100;
  const height = w * aspectRatio;

  return (
    <Link href={href} className=' cursor-pointer'>
      <Image
        src="/logo.svg"
        alt="Canine-Connect logo"
        className=' w-[70px] lg:w-[100px]'
        width={w}
        height={height}
      />
    </Link>
  );
};
