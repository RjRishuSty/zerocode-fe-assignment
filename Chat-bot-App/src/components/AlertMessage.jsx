import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Alert } from "@mui/material";

const AlertMessage = () => {
  const { showExportWarning, setShowExportWarning } = useContext(ChatContext);
  return (
    <>
      {showExportWarning && (
        <Alert severity="warning" onClose={() => setShowExportWarning(false)}>
          No chat messages to export.
        </Alert>
      )}
    </>
  );
};

export default AlertMessage;
