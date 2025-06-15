import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../context/ThemeContext";

const ModeBtn = () => {
  const { toggleMode, mode } = useContext(ThemeContext);
  return (
    <IconButton onClick={toggleMode} color="inherit">
      {mode === "dark" ? (
        <Brightness7Icon fontSize="large" sx={{ color: "text.primary" }} />
      ) : (
        <Brightness4Icon fontSize="large" sx={{ color: "text.primary" }} />
      )}
    </IconButton>
  );
};

export default ModeBtn;
