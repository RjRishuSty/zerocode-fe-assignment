import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import { IconButton } from "@mui/material";
const MenuBtn = ({ setToggleSidebar, toggleSidebar }) => {
  return (
    <IconButton
      onClick={()=>setToggleSidebar(!toggleSidebar)}
      sx={{ bgcolor: "custom.primary" }}
    >
      {toggleSidebar ? (
        <ArrowRightIcon fontSize="large" sx={{ color: "text.primary" }} />
      ) : (
        <ArrowLeftIcon fontSize="large" sx={{ color: "text.primary" }} />
      )}
    </IconButton>
  );
};

export default MenuBtn;
