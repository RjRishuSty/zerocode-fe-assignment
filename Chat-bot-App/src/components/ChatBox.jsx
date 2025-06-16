// src/components/ChatBox.jsx
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

import MessageBubble from "./MessageBubble";
import { flexCenter } from "../styles/customeStyles";
import { ChatContext } from "../context/ChatContext";
import ChatInput from "./ChatInput";

const ChatBox = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const smallLaptop = useMediaQuery("(max-width:1200px)");
  const { currentMessages, sendMessage } = useContext(ChatContext);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = useCallback(() => {
    if (!userInput.trim()) return;

    const text = userInput.trim();
    sendMessage({ sender: "user", text }); // User message
    setUserInput("");
    setLoading(true);

    setTimeout(() => {
      sendMessage({ sender: "bot", text: `Echo: ${text}` }); // Bot reply
      setLoading(false);
    }, 1000);
  }, [userInput, sendMessage]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") handleSend();
    },
    [handleSend]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages]);

  return (
    <Box
      sx={{
        width: smallLaptop ? "100%" : "80%",
        mx: "auto",
        mt:isMobile?1: 5,
        display: "flex",
        flexDirection: "column",
        height:isMobile?"72vh":"80vh",
        border: "1px solid #ccc",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "background.primary",
      }}
    >
      <Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: "auto",
          backgroundColor: "custom.secondary",
          ...(currentMessages.length <= 0 ? flexCenter : {}),
        }}
      >
        {currentMessages.length === 0 ? (
          <Typography variant="h2">What can I help?</Typography>
        ) : (
          currentMessages.map((msg, i) => (
            <MessageBubble key={i} sender={msg.sender} text={msg.text} />
          ))
        )}
        {loading && <Typography>Bot is typing...</Typography>}
        <div ref={messagesEndRef} />
      </Box>

      <Box
        sx={{
          p: 2,
          display: "flex",
          borderTop: "1px solid #ddd",
          backgroundColor: "custom.secondary",
        }}
      >
        <ChatInput
          handleKeyPress={handleKeyPress}
          userInput={userInput}
          handleSend={handleSend}
          setUserInput={setUserInput}
        />
      </Box>
    </Box>
  );
};

export default ChatBox;
