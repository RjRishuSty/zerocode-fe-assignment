import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomInput = ({ item, useIn, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  const loginInputLabel =
    useIn === "login" && item.label === "Create Password"
      ? "Password"
      : "Create Password";

  const getIcon = (id) => {
    switch (id) {
      case "email":
        return <EmailIcon  sx={{color:'custom.dark1'}} />;
      case "password":
      case "confirmPassword":
        return <LockIcon sx={{color:'custom.dark1'}} />;
      case "fullName":
        return <PersonIcon sx={{color:'custom.dark1'}} />;
      default:
        return null;
    }
  };

  const isPasswordField =
    item.id === "password" || item.id === "confirmPassword";

  return (
    <TextField
      label={item.id === "password" ? loginInputLabel : item.label}
      id={item.id}
      type={isPasswordField && !showPassword ? "password" : "text"}
      value={value || ""}
      onChange={onChange}
      fullWidth
      margin="normal"
      placeholder={item.placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{getIcon(item.id)}</InputAdornment>
        ),
        endAdornment: isPasswordField && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
              size="small"
            >
              {showPassword ? <VisibilityOff  sx={{color:'custom.dark1'}}/> : <Visibility  sx={{color:'custom.dark1'}}/>}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomInput;
