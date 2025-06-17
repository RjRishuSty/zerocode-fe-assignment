// src/components/ChatBox.jsx
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Alert, Box, Typography, useMediaQuery } from "@mui/material";

import MessageBubble from "./MessageBubble";
import { flexCenter } from "../styles/customeStyles";
import { ChatContext } from "../context/ChatContext";
import ChatInput from "./ChatInput";
import { AuthContext } from "../context/AuthContext";
import AlertMessage from "./AlertMessage";
import { profileContext } from "../context/ProfileContext";
import ProfileModel from "./ProfileModel";

const ChatBox = () => {
  //* All hooks...........
  const { isAuthUser } = useContext(AuthContext);
  const isMobile = useMediaQuery("(max-width:600px)");
  const smallLaptop = useMediaQuery("(max-width:1200px)");
  const { currentMessages, sendMessage } = useContext(ChatContext);
   const {profile} = useContext(profileContext);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  //* Handle message send..........
  const handleSend = useCallback(() => {
    if (!userInput.trim()) return;

    const text = userInput.trim();
    sendMessage({ sender: "user", text }); //* User message
    setUserInput("");
    setLoading(true);

    setTimeout(() => {
      sendMessage({ sender: "bot", text: `Echo: ${text}` }); //* Bot reply
      setLoading(false);
    }, 1000);
  }, [userInput, sendMessage]);

  //* send message use enter button
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") handleSend();
    },
    [handleSend]
  );

  //* scroll bihavior useing ref........
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages]);

  return (
    <Box
      sx={{
        width: smallLaptop ? "100%" : "80%",
        mx: "auto",
        mt: isMobile ? 2 : 5,
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        border: "1px solid #ccc",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "background.primary",
        
      }}
    >
      <AlertMessage />
      {profile?<ProfileModel/>:<><Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: "auto",
          backgroundColor: "custom.secondary",
          ...(currentMessages.length <= 0 ? flexCenter : {}),
        }}
      >
        {currentMessages.length === 0 ? (
          <Typography variant="h2">
            Good to see you, {isAuthUser.fullname}.
          </Typography>
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
          loading={loading}
        />
      </Box></>}
    </Box>
  );
};

export default ChatBox;
