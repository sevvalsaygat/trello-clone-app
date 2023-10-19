import React, { useId } from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";
import ReactSelect, { OptionsOrGroups } from "react-select";
import type { StylesConfig } from "react-select";

type SelectPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  placeholder?: string;
  defaultValue?: string | number;
  className?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  menuPlacement?: "auto" | "bottom" | "top";
  options: OptionsOrGroups<any, any>;
  showIndicator?: boolean;
  styles?: StylesConfig;
};

const Select: React.FC<SelectPropTypes> = ({
  name,
  label,
  rules,
  placeholder,
  defaultValue = "",
  className,
  isClearable,
  isSearchable,
  isMulti = false,
  menuPlacement,
  options,
  showIndicator = false,
  styles,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const instanceId = useId();

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
            <ReactSelect
              {...field}
              components={{
                ...(showIndicator ? {} : { IndicatorSeparator: () => null }),
              }}
              instanceId={instanceId}
              className={className}
              isClearable={isClearable}
              placeholder={placeholder}
              isSearchable={isSearchable}
              isMulti={isMulti}
              menuPlacement={menuPlacement}
              options={options}
              styles={styles}
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

export default Select;
