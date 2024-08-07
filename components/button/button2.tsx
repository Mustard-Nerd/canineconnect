import Link from 'next/link';

type Button2Props = {
  text: any;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};



const Button2: React.FC<Button2Props> = ({
  text,
  href,
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseStyle = 'font-quicksand border border-secondary w-full rounded-[5px] px-[20px] py-[7px] lg:py-[10px] text-secondary font-[700] text-[12px] lg:text-[15px]  leading-[25px]  transform hover:translate-y-[-2px] transition-transform text-center ';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = `${baseStyle}  ${disabledStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button2;
