import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { RxEyeOpen, RxEyeClosed, RxLockClosed } from "react-icons/rx";
import { useTheme } from "next-themes";

export default function PasswordTextField({
  name,
  label,
  rules,
  type,
  ...props
}: any) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { theme } = useTheme();
  const isDark = theme === "light" ? false : true;

  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderInputAdornment = () => {
    if (type === "password") {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
          </IconButton>
        </InputAdornment>
      );
    }
    return null;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          label={label}
          color="warning"
          placeholder={props.placeholder}
          type={showPassword ? "password" : "text"}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          fullWidth
          margin="normal"
          defaultValue={props.defaultValue ? props.defaultValue : null}
          InputProps={{
            sx: { color: isDark ? "white" : "#374151" },
            endAdornment: renderInputAdornment(),
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <RxLockClosed />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
