import Link from 'next/link';

type ButtonProps = {
  text: any;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};



const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseStyle = 'font-quicksand  bg-primary w-full rounded-[100px] px-[18px] py-[16px] text-white font-[500] text-[14px] leading-[21px] hover:bg-primaryD transform hover:translate-y-[-2px] transition-transform ';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = ` ${className} ${baseStyle}  ${disabledStyle}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={combinedClassName} onClick={onClick}>
          {text}
        </a>
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

export default Button;
