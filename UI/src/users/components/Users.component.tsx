import React from "react";
import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { Schema } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { useStates } from "../services/queries";

export const Users = () => {
  const statesQuery = useStates();

  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <div style={{ width: "50%", margin: "0px auto" }}>
      <Stack sx={{ gap: 2, marginTop: 4 }}>
        <TextField
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <RHFAutocomplete<Schema>
          name="states"
          label="States"
          options={statesQuery.data ?? []}
        />
      </Stack>
    </div>
  );
};
