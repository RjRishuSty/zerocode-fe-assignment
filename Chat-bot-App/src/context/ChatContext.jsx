
import React, { createContext, useState } from "react";

export const ChatContext = createContext();

const generateChatId = () => Date.now().toString();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(generateChatId());

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

  const startNewChat = () => {
    const newId = generateChatId();
    setActiveChatId(newId);
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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
