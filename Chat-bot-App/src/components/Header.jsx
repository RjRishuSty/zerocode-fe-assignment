// src/pages/Admin/components/Topbar.jsx
import React, { useContext } from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import ModeBtn from "./ModeBtn";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "../context/AuthContext";

const Header = () => {
const {logout}  = useContext(AuthContext);
  const handleLogout = ()=>{
    logout();
  }
  return (
    <AppBar position="static" sx={{ backgroundColor: "background.default" }}>
      <Toolbar>
        <Typography variant="subtitle1" sx={{ flexGrow: 1}}>
         Chat with AI
        </Typography>
        <Button
          variant="contained"
          color="error"
           onClick={handleLogout}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
        <ModeBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
