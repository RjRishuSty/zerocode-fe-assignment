// src/components/VoiceInput.jsx
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import HearingIcon from "@mui/icons-material/Hearing";

const VoiceInput = ({ onResult }) => {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    setIsListening(true); // Start listening

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
      setIsListening(false); // Stop listening after result
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <IconButton onClick={startListening} aria-label="voice input" sx={{width:'auto',height:'auto'}}>
      {isListening ? (
        <HearingIcon fontSize="medium" sx={{ color: "text.primary" }} />
      ) : (
        <MicIcon fontSize="medium" sx={{ color: "text.primary" }} />
      )}
    </IconButton>
  );
};

export default VoiceInput;
