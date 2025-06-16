import React, { useCallback, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const location = useLocation();
  // const isTablet = useMediaQuery("(max-width: 900px)");

  const handleToggleSidebar = useCallback(() => {
    setToggleSidebar((prev) => !prev);
  }, []);

  return (
    <>
      {location.pathname === "/login" || location.pathname === "/register" ? (
        <Outlet />
      ) : (
        <Box sx={{ width: "100%", height: "100vh" }}>
          <Grid container>
            <Grid size={{ xs: 10, sm: 4, md: toggleSidebar ? 1 : 2 }}>
              <Sidebar handleToggleSidebar={handleToggleSidebar} />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: toggleSidebar ? 11 : 10 }}>
              <Header />
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
