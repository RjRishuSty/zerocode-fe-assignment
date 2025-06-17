import React, { useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  const location = useLocation();
  const smallLaptop = useMediaQuery("(max-width:1200px)");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  return (
    <>
      {location.pathname === "/login" || location.pathname === "/register" ? (
        <Outlet />
      ) : (
        <Box sx={{ width: "100%", height: "100vh" }}>
          <Grid container>
            <Grid
              size={{ xs: 9, sm: 4, md: smallLaptop ? 3 : 2 }}
              sx={{
                display: { xs: toggleSidebar ? "block" : "none", sm: "block" },
              }}
            >
              <Sidebar setToggleSidebar={setToggleSidebar} />
            </Grid>
            <Grid size={{ xs: 12, sm: 8, md: smallLaptop ? 9 : 10 }}>
              <Header
                handleToggleSidebar={handleToggleSidebar}
                toggleSidebar={toggleSidebar}
              />
              <Box sx={{ width: "100%", p: 2 }}>
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
export default AppLayout;
