import React from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type TextareaPropTypes = {
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
  variant?: "primary";
  className?: string;
};

const Textarea: React.FC<TextareaPropTypes> = ({
  name,
  label,
  rules,
  placeholder,
  defaultValue = null,
  variant,
  className,
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
            <textarea
              {...field}
              placeholder={placeholder}
              className={cn(className, {
                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-500 placeholder:text-stone-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6":
                  variant === "primary",
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

export default Textarea;
