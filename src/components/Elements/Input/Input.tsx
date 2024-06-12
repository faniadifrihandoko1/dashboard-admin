import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  value?: string
  required?:boolean
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  className,
  name,
  value,
  required
}) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};

export default Input;
