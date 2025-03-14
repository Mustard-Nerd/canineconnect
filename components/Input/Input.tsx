"use client"

import React from 'react';

interface InputProps {
  id?: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
}) => {
  return (
    <fieldset className={`flex flex-col font-normal w-full items-start gap-2 ${className}`}>
      <label htmlFor={id} className="text-[20px] leading-[36px]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="dropshadowinpute  h-[50px] w-full outline-none rounded-[8px] px-[18px] text-[20px] placeholder:text-[18px] text-[#121212] bg-white dark:bg-primary border-2 dark:border-white border-primary"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default Input;
