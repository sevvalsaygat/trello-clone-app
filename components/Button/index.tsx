import React from "react";

import cn from "classnames";

type ButtonPropTypes = {
  title?: string;
  className?: string;
  variant?: "primary" | "danger" | "omniauth" | "info";
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
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full":
          variant === "danger",
        "omniauth-button-shadow flex mb-3 justify-center font-bold leading-10 text-gray-800 w-full text-sm hover:bg-gray-200 border-transparent rounded-3":
          variant === "omniauth",
        "cursor-pointer py-7 border-transparent w-full bg-lime-700 text-sm text-white font-bold rounded-3 hover:bg-green-600":
          variant === "primary",
        "bg-blue-800 hover:bg-blue-900 text-white leading-8 px-3 text-sm rounded-3 font-medium transition-all duration-100":
          variant === "info",
      })}
    >
      {LeftIcon && <LeftIcon />}
      {title}
      {RightIcon && <RightIcon />}
    </button>
  );
};

export default Button;
