import { IconButton, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ userInput, handleKeyPress, handleSend, setUserInput }) => {
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
        sx={{mr:1}}
      />
      <IconButton onClick={handleSend}>
        <SendIcon fontSize="large" sx={{ color: "text.primary" }} />
      </IconButton>
    </>
  );
};

export default ChatInput;
