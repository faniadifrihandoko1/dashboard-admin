import React from "react";

type PropsLabel = {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
};
const Label = (props: PropsLabel) => {
  const { htmlFor, children, className } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
