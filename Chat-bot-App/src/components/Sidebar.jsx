import React, { useContext, useEffect, useState } from "react";
import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import {
  Chat as ChatIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  ExpandLess,
  ExpandMore,
  Add as AddIcon,
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import { flexCenter, flexSpaceBetween } from "../styles/customeStyles";

const navItems = [
  { label: "New Chat", icon: <AddIcon />, action: "newChat", key: "newChat" },
  { label: "Profile", icon: <PersonIcon />, to: "/profile", key: "profile" },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    to: "/settings",
    key: "settings",
  },
];

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [openChats, setOpenChats] = useState(false);
  const [activeNav, setActiveNav] = useState("newChat"); //* default active

  const { chats, activeChatId, setActiveChatId, startNewChat } =
    useContext(ChatContext);
  const location = useLocation();

  //! Start a new chat on first mount...........
  useEffect(() => {
    startNewChat();
  }, []);

  //* By Default i chats has option then open other by user click close and open.....................
  useEffect(() => {
    if (chats.length > 0) {
      setOpenChats(true);
    }
  }, [chats]);

  const handleItemClick = (item) => {
    if (item.action === "newChat") {
      startNewChat();
    }
    setActiveNav(item.key);
  };

  return (
    <Stack
      sx={{
        minHeight: isMobile ? "auto" : "100vh",
        width: "100%",
        backgroundColor: "background.paper",
        borderRight: "1px solid #ddd",
        py: 1,
      }}
    >
      <List
        sx={{
          mt:isMobile?0: 5,
          // border: "2px solid red",
          ...flexSpaceBetween,
          flexDirection: isMobile ? "row" : "column",
        }}
      >
        {navItems.map((item, index) => {
          const isActive = item.to
            ? location.pathname === item.to
            : activeNav === item.key;

          return (
            <ListItem disablePadding key={index}>
              {item.to ? (
                <ListItemButton
                  component={NavLink}
                  to={item.to}
                  sx={{
                    color: isActive ? "#fff" : "inherit",
                    backgroundColor: isActive ? "custom.primary" : "transprant",

                    ...(isMobile ? flexCenter : ""),
                  }}
                  onClick={() => setActiveNav(item.key)}
                >
                  <ListItemIcon sx={{ color: isActive ? "#fff" : "inherit" }}>
                    {React.cloneElement(item.icon, {
                      fontSize: isMobile ? "large" : "medium",
                    })}
                  </ListItemIcon>
                  {!isMobile && <ListItemText primary={item.label} />}
                </ListItemButton>
              ) : (
                <ListItemButton
                  onClick={() => handleItemClick(item)}
                  sx={{
                    backgroundColor: isActive ? "custom.primary" : "transprant",
                    ...(isMobile ? flexCenter : ""),
                  }}
                >
                  <ListItemIcon sx={{ color: isActive ? "#fff" : "inherit" }}>
                    {React.cloneElement(item.icon, {
                      fontSize: isMobile ? "large" : "medium",
                    })}
                  </ListItemIcon>
                  {!isMobile && <ListItemText primary={item.label} />}
                </ListItemButton>
              )}
            </ListItem>
          );
        })}

        <ListItem
          disablePadding
          onClick={() => setOpenChats(!openChats)}
          sx={{
            borderTop: isMobile?"":"1px solid #ccc",
            borderLeft: isMobile?"":"1px solid #ccc",
            mt: isMobile ? 0 : 3,

            ...(isMobile ? flexCenter : ""),
            flexDirection: "column",
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ChatIcon fontSize={isMobile ? "large" : "medium"} />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Chats" />}
            {openChats ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={openChats} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              maxHeight: "50vh",
              overflowY: "auto",
              borderLeft: isMobile?"":"1px solid #ccc",
              borderBottom: isMobile?"":"1px solid #ccc",
            }}
          >
            {chats.map((chat) => (
              <ListItemButton
                key={chat.id}
                selected={chat.id === activeChatId}
                onClick={() => {
                  setActiveChatId(chat.id);
                  setActiveNav("");
                }}
                sx={{
                  pl: 4,
                  color: chat.id === activeChatId ? "red" : "inherit",
                }}
              >
                <ListItemText primary={`Chat ${chat.id}`} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Stack>
  );
};

export default Sidebar;
