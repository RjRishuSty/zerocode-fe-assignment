import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

const MessageBubble = ({ sender, text }) => {
  const { mode } = useContext(ThemeContext);
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
          backgroundColor: isUser
            ? "background.paper"
            : mode === "light"
              ? "#ccc"
              : "#6abb44",
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default MessageBubble;
