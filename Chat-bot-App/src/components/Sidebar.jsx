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
  Button,
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
import LogoutIcon from "@mui/icons-material/Logout";
import { ChatContext } from "../context/ChatContext";
import { flexCenter } from "../styles/customeStyles";
import { AuthContext } from "../context/AuthContext";

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

const Sidebar = ({ setToggleSidebar }) => {
  const { logout } = useContext(AuthContext);
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
    setToggleSidebar((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setToggleSidebar((prev) => !prev);
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        width: isMobile ? "80%" : "100%",
        backgroundColor: "background.paper",
        borderRight: "1px solid #ddd",
        py: 1,
        position: isMobile ? "absolute" : "",
        top: isMobile ? 0 : "",
        left: isMobile ? 0 : "",
        zIndex: isMobile ? 999 : "",
      }}
    >
      <List sx={{ mt: 5 }}>
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
                  }}
                  onClick={() => setActiveNav(item.key)}
                >
                  <ListItemIcon sx={{ color: isActive ? "#fff" : "gray" }}>
                    {React.cloneElement(item.icon, {
                      fontSize: "medium",
                    })}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
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
                      fontSize: "medium",
                    })}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              )}
            </ListItem>
          );
        })}
        {isMobile && (
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        )}
        <ListItem
          disablePadding
          onClick={() => setOpenChats(!openChats)}
          sx={{
            borderTop: "1px solid #ccc",
            borderLeft: "1px solid #ccc",
            mt: 3,
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ChatIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText primary="Chats" />
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
              borderLeft: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
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
                  color: chat.id === activeChatId ? "#fff" : "inherit",
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
