import React from "react";
import { Controller, Path, FieldValues, useFormContext } from "react-hook-form";
import { Option } from "../types/option";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
};

export function RHFToggleButtonGroup<T extends FieldValues>({
  name,
  options,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...restFields } }) => (
        <ToggleButtonGroup
          onChange={(_, newValue) => {
            if (newValue.length > 0) {
              onChange(newValue);
            }
          }}
          value={value.length > 0 ? value : options[0].id}
          {...restFields}
        >
          {options.map((option) => (
            <ToggleButton value={option.id} key={option.id}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    ></Controller>
  );
}
