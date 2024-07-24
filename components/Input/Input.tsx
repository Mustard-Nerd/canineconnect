import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeClass?: string;
  fontClass?: string;
  rounded?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      sizeClass = 'h-11 px-4 py-3',
      fontClass = 'text-sm font-normal',
      rounded = '',
      children,
      type = 'text',
      ...args
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`block w-full custom-shadow placeholder:text-[#1F323F] placeholder:text-opacity-50 rounded-[100px] border border-[#E1E0E6] border-opacity-70 appearance-none   focus-within:border-primary  outline-none  bg-white  ${rounded} ${fontClass} ${sizeClass} ${className}`}
        {...args}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
