import React from "react";
import { Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const menuItems = [
  { label: "Home", icon: <HomeIcon />, path: "/" },
  { label: "Chats", icon: <ChatIcon />, path: "/chats" },
  { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { label: "Profile", icon: <PersonIcon />, path: "/profile" },
  { label: "Logout", icon: <LogoutIcon />, path: "/logout" },
];

const Sidebar = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "background.paper",
        borderRight: "1px solid #ddd",
        paddingTop: 2,
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem disablePadding key={item.label}>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                "&.active": {
                  backgroundColor: "primary.main",
                  color: "#fff",
                  "& .MuiListItemIcon-root": {
                    color: "#fff",
                  },
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
