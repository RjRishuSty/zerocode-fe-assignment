// src/pages/Admin/components/Topbar.jsx
import React, { useContext } from "react";
import { AppBar, Toolbar, Box, Typography, Button, useMediaQuery } from "@mui/material";
import ModeBtn from "./ModeBtn";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../context/AuthContext";
import MenuBtn from "./MenuBtn";

const Header = ({ handleToggleSidebar, toggleSidebar }) => {
  const { logout } = useContext(AuthContext);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar position="static" sx={{py:isMobile?1:0, backgroundColor: "background.default" }}>
      <Toolbar>
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          Chat with AI
        </Typography>
        {!isMobile && <Button
          variant="contained"
          sx={{
            backgroundColor: "custom.primary",
            mr: 2,
            color: "text.primary",
          }}
          onClick={handleLogout}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>}
        <ModeBtn />
        {isMobile&&<MenuBtn
          handleToggleSidebar={handleToggleSidebar}
          toggleSidebar={toggleSidebar}
        />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
