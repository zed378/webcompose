import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
  extra?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ variant, extra = "", children, className, ...rest }) => {
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none ${extra} ${className || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
