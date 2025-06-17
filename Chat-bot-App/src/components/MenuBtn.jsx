import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { IconButton } from "@mui/material";
const MenuBtn = ({ handleToggleSidebar, toggleSidebar }) => {
  return (
    <IconButton
      onClick={handleToggleSidebar}
    >
      {!toggleSidebar ? (
        <MenuIcon fontSize="large" sx={{ color: "text.primary" }} />
      ) : (
        <CloseIcon fontSize="large" sx={{ color: "text.primary" }} />
      )}
    </IconButton>
  );
};

export default MenuBtn;
