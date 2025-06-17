import React, { useContext } from "react";
import {
  Box,
  Modal,
  Stack,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const ProfileModel = () => {
  const {isAuthUser} = useContext(AuthContext);
  const {chats} = useContext(ChatContext);
  console.log(chats);

  return (
    <Stack
      sx={{
        backgroundColor: "custom.secondary",
        position: "relative",
        width: "100%",
        height: "100%",
        p: 3,
      }}
    >
      <Typography variant="h2" gutterBottom>
         User Profile Details
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">
          <strong>Full Name:</strong> {isAuthUser.fullname}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Email:</strong> {isAuthUser.email}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Password:</strong> {isAuthUser.password}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        💬 Chat History
      </Typography>

      {chats.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No chat history found.
        </Typography>
      ) : (
        <List dense sx={{maxHeight:'100%',overflowY:'auto'}}>
          {chats.map((chat, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`Chat ${index + 1}`}
                secondary={
                  chat.messages?.length
                    ? `${chat.messages.length} messages`
                    : "No messages"
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
};

export default ProfileModel;
