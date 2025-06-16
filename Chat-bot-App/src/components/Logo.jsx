import { Box, Stack } from "@mui/material";
import React from "react";
import logoImg from "../../public/favicon.png";
import MenuBtn from "./MenuBtn";
import { flexSpaceBetween } from "../styles/customeStyles";

const Logo = () => {
  return (
    <Stack sx={{...flexSpaceBetween,flexDirection:'row',pr:2,borderBottom:'1px solid #ccc' }}>
      <Box
        component="img"
        src={logoImg}
        sx={{ width: "65px", height: "65px" }}
      />
      {/* <MenuBtn /> */}
    </Stack>
  );
};

export default Logo;
