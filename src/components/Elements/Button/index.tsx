import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className: string;
  type: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
