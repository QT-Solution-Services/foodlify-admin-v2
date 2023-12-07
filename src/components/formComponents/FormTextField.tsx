import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function FormTextField({
  name,
  label,
  rules,
  type,
  size = "",
  ...props
}: any) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { theme } = useTheme();
  const isDark = theme === "light" ? false : true;

  const iconTypeToComponentMap: any = {
    email: FiMail,
    lock: FiLock,
    user: FiUser,
  };

  const renderInputAdornment = (icontype: string) => {
    const IconComponent = iconTypeToComponentMap[icontype];

    if (IconComponent) {
      return (
        <InputAdornment position="start">
          <IconButton edge="start">
            <IconComponent className="text-blue" />
          </IconButton>
        </InputAdornment>
      );
    }

    return null;
  };

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={props?.defaultValue || ""} // Set the defaultValue here
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          color="warning"
          placeholder={props.placeholder}
          label={label}
          type={type ? type : " "}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          fullWidth
          // Remove the value prop from here, as Controller handles it
          // size='small'
          size={size}
          margin="normal"
          InputProps={{
            startAdornment: renderInputAdornment(props.icontype),
            disabled: props.disable && props.disable,
            sx: { color: isDark ? "white" : "#374151" },
          }}
        />
      )}
    />
  );
}
