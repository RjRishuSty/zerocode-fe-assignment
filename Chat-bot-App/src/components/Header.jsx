// src/pages/Admin/components/Topbar.jsx
import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import MenuBtn from "./MenuBtn";
import ModeBtn from "./ModeBtn";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "background.default" }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
          AI Chat
        </Typography>
        <ModeBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
