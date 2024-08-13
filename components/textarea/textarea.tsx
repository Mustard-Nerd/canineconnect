import React from 'react';

interface TextAreaProps {
  id?: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  placeholder = '',
  value,
  onChange,
  className = '',
  rows = 4,
}) => {
  return (
    <fieldset className={`flex flex-col font-normal w-full items-start gap-2 ${className}`}>
      <label htmlFor={id} className="text-[20px] leading-[36px]">
        {label}
      </label>
      <textarea
        id={id}
        className="dropshadowinpute  w-full outline-none rounded-[8px] px-[18px] py-[10px] text-[20px] placeholder:text-[18px] text-[#121212] bg-white dark:bg-primary border-2 dark:border-white border-primary resize-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </fieldset>
  );
};

export default TextArea;
