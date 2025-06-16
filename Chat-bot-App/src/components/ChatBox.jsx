import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  CircularProgress,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBubble from "./MessageBubble";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMsg = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setLoading(true);

    // Fake bot response (simulate API delay)
    setTimeout(() => {
      const botMsg = {
        sender: "bot",
        text: `Echo: ${userMsg.text}`,
      };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <Box
      sx={{
        width: "80%",
        mx: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        border: "1px solid #ccc",
        borderRadius: 2,
        overflow: "hidden",
              backgroundColor: "background.default",
      }}
    >

      <Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: "auto",
          backgroundColor: "background.paper",
        }}
      >
        {messages.map((msg, i) => (
          <MessageBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        {loading && <Typography>Bot is typing...</Typography>}
        <div ref={messagesEndRef} />
      </Box>

      <Box
        sx={{
          p: 2,
          display: "flex",
          borderTop: "1px solid #ddd",
          backgroundColor: "background.paper",
        }}
      >
        <TextField
          fullWidth
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <IconButton onClick={handleSend} color="primary">
          {loading ? <CircularProgress size={24} /> : <SendIcon fontSize="large" sx={{color:'text.primary'}} />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBox;
