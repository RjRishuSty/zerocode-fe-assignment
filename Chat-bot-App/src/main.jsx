import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SnackbarProvider } from "notistack";
import AuthProvider from "./context/AuthContext.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <ThemeContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeContextProvider>
    </SnackbarProvider>
  </StrictMode>
);
