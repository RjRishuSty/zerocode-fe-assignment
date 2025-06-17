import { Alert } from "@mui/material";
import React, { createContext, useState } from "react";

export const ChatContext = createContext();

const generateChatId = () => Date.now().toString();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [showExportWarning, setShowExportWarning] = useState(false);
  const [activeChatId, setActiveChatId] = useState(generateChatId());
  //* we can add this function. if user again login then prev chat sort in localStorage. but i have a dedline to finsh this project. so i move on Bonus feature.
  // useEffect(()=>{
  //   const getChats = localStorage.getItem("chats");
  //   if(!getChats){
  //     localStorage.setItem("chats",chats);
  //   }
  // },[chats])
  const currentMessages =
    chats.find((chat) => chat.id === activeChatId)?.messages || [];

  const sendMessage = (message) => {
    setChats((prevChats) => {
      const updatedChats = prevChats.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      );

      const chatExists = prevChats.some((chat) => chat.id === activeChatId);
      if (!chatExists) {
        return [
          ...prevChats,
          {
            id: activeChatId,
            messages: [message],
          },
        ];
      }

      return updatedChats;
    });
  };

  //* Start a new chat with new id...........
  const startNewChat = () => {
    const newId = generateChatId();
    setActiveChatId(newId);
  };

  //* Export Chats handler.........
  const exportChat = (messages) => {
    if (!Array.isArray(messages) || messages.length === 0) {
      setShowExportWarning(true);
      return;
    }

    const text = messages
      .map((msg) => `${msg.sender === "user" ? "You" : "Bot"}: ${msg.text}`)
      .join("\n");

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "chat.txt";
    document.body.appendChild(a); // optional, for Firefox support
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        activeChatId,
        currentMessages,
        sendMessage,
        startNewChat,
        setActiveChatId,
        exportChat,
        showExportWarning,
        setShowExportWarning
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
