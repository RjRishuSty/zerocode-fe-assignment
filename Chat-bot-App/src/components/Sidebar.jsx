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
  Download as DownloadIcon,
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { ChatContext } from "../context/ChatContext";
import { flexCenter } from "../styles/customeStyles";
import { AuthContext } from "../context/AuthContext";
import { profileContext } from "../context/ProfileContext";

const navItems = [
  { label: "New Chat", icon: <AddIcon />, action: "newChat", key: "newChat" },
  { label: "Profile", icon: <PersonIcon />, action: "profile", key: "profile" },
  {
    label: "Export Chats",
    icon: <DownloadIcon />,
    action: "exportChats",
    key: "exportChats",
  },
];

const Sidebar = ({ setToggleSidebar }) => {
  const { logout } = useContext(AuthContext);

  const isMobile = useMediaQuery("(max-width:600px)");
  const [openChats, setOpenChats] = useState(false);
  const [activeNav, setActiveNav] = useState("newChat"); //* default active
  const { handleProfileOpen, handleProfileClose} = useContext(profileContext);
  const {
    exportChat,
    chats,
    activeChatId,
    setActiveChatId,
    startNewChat,
    currentMessages,
  } = useContext(ChatContext);
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
      handleProfileClose();
      startNewChat();
    }
    if (item.action === "profile") {
      handleProfileOpen();
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
              {item.action && (
                <ListItemButton
                  onClick={() =>
                    item.key === "exportChats"
                      ? exportChat(currentMessages)
                      : handleItemClick(item)
                  }
                  sx={{
                    backgroundColor: isActive ? "custom.primary" : "transprant",
                    ...(isMobile ? flexCenter : ""),
                  }}
                >
                  <ListItemIcon
                    sx={{ color: isActive ? "#fff" : "text.secondary" }}
                  >
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

        {/* TODO: Chat History */}
        <ListItem
          disablePadding
          onClick={() => setOpenChats(!openChats)}
          sx={{
            borderTop: "1px solid #ccc",
            borderLeft: openChats ? "1px solid #ccc" : "",
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
                  pl: 1,
                  color: chat.id === activeChatId ? "#fff" : "inherit",
                }}
              >
                <ListItemText
                  primary={
                    chat.messages[0].text.length > 30
                      ? `${chat.messages[0].text.slice(0, 30)}...`
                      : chat.messages[0].text
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Stack>
  );
};

export default Sidebar;
