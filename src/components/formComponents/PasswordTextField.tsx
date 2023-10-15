import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { RxEyeOpen, RxEyeClosed, RxLockClosed } from "react-icons/rx";

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
          type={showPassword ? "password" : "text"}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          fullWidth
          margin="normal"
          defaultValue={props.defaultValue ? props.defaultValue : null}
          InputProps={{
            endAdornment: renderInputAdornment(),
            startAdornment: (
              <InputAdornment position="start">
                <RxLockClosed />{" "}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
