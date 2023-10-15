import React from "react";

import cn from "classnames";

type ButtonPropTypes = {
  title?: string;
  className?: string;
  variant?: "primary" | "danger";
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
      })}
    >
      {LeftIcon && <LeftIcon />}
      {title}
      {RightIcon && <RightIcon />}
    </button>
  );
};

export default Button;
