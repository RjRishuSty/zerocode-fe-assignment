import { IconButton, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import StopIcon from "@mui/icons-material/Stop";
import VoiceInput from "./VoiceInput";

const ChatInput = ({
  loading,
  userInput,
  handleKeyPress,
  handleSend,
  setUserInput,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <TextField
        inputRef={inputRef}
        fullWidth
        placeholder="Type a message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyPress}
        sx={{ mr: 1 }}
      />
      <VoiceInput onResult={setUserInput}/>
      <IconButton
        onClick={handleSend}
        sx={{ border: loading ? "2px solid" : "", borderColor: "text.primary",ml:1 }}
      >
        {loading ? (
          <StopIcon fontSize="medium" sx={{ color: "text.primary" }} />
        ) : (
          <SendIcon fontSize="medium" sx={{ color: "text.primary" }} />
        )}
      </IconButton>
    </>
  );
};

export default ChatInput;
