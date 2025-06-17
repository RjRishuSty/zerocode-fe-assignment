import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SnackbarProvider } from "notistack";
import AuthProvider from "./context/AuthContext.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import ProfileProvider from "./context/ProfileContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <ThemeContextProvider>
        <AuthProvider>
          <ChatProvider>
            <ProfileProvider>
              <App />
            </ProfileProvider>
          </ChatProvider>
        </AuthProvider>
      </ThemeContextProvider>
    </SnackbarProvider>
  </StrictMode>
);
