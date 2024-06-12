import React from "react";
import Label from "./Label";
import Input from "./Input";
interface Props {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classNameLabel?: string;
  classNameInput?: string;
  value?: string;
}

export default function InputForm({
  name,
  label,
  type,
  placeholder,
  required,
  onChange,
  classNameLabel,
  classNameInput,
  value,
}: Props) {
  return (
    <div>
      <Label htmlFor={name} className={classNameLabel}>
        {label}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
        className={classNameInput}
        value={value}
  
      />
    </div>
  );
}
