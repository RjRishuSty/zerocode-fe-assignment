import { TextField } from "@mui/material";
import React from "react";

const CustomInput = ({ item, useIn, onChange, helperText, value }) => {
  const loginInputLabel = useIn === "login" && item.label==='Create Password' ? "Password" : "Create Password";
  return (
    <TextField
      label={item.id === 'password'?loginInputLabel:item.label}
      id ={item.id}
      type={item.type}
      value={value}
      onChange={onChange}
      helperText={helperText}
      fullWidth
      margin="normal"
    />
  );
};

export default CustomInput;
