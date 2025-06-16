import React from "react";
import { Box, Typography } from "@mui/material";

const MessageBubble = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1,
          borderRadius: 2,
          maxWidth: "70%",
          backgroundColor: isUser ? "#DCF8C6" : "#e0e0e0",
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default MessageBubble;
