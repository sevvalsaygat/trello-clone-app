"use client";

import React from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type InputPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  placeholder?: string;
  defaultValue?: string;
  variant?: "primary" | "opacity";
  className?: string;
  type?: "text" | "password";
};

const Input: React.FC<InputPropTypes> = ({
  name,
  label,
  rules,
  placeholder,
  defaultValue = "",
  variant,
  className,
  type = "text",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div
        className={cn({
          "mt-2": !!label,
        })}
      >
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={cn(className, {
                "w-full mb-4 bg-gray-50 border border-blue-50 rounded-3 p-7 placeholder:text-14 font-light text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-white text-14":
                  variant === "primary",
                "w-full mb-4 bg-gray-50 border border-blue-150 rounded-3 p-7 placeholder:text-14 font-light text-blue-100 focus:outline-none text-14":
                  variant === "opacity",
              })}
            />
          )}
        />
      </div>
      {fieldError && (
        <div className="mt-2 text-red-500">{fieldError.message as string}</div>
      )}
    </React.Fragment>
  );
};

export default Input;
