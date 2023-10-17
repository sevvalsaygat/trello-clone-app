import React from "react";

import cn from "classnames";

type ButtonPropTypes = {
  title?: string;
  className?: string;
  variant?: "primary" | "danger" | "socialauth";
  onClick: () => void;
  leftIcon?: React.FC;
  rightIcon?: React.FC;
};

const Button: React.FC<ButtonPropTypes> = ({
  title,
  className,
  variant,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}: ButtonPropTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, {
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full":
          variant === "primary",
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full":
          variant === "danger",
        "flex mb-3 justify-center shadow-2xl font-bold leading-10 text-gray-150 w-full text-14 hover:bg-gray-200 border-transparent rounded-3":
          variant === "socialauth",
      })}
    >
      {LeftIcon && <LeftIcon />}
      {title}
      {RightIcon && <RightIcon />}
    </button>
  );
};

export default Button;
