import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuthUser } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: isAuthUser ? <ChatPage /> : <Navigate to="login" />,
        },
        {
          path: "login",
          element: !isAuthUser ? <AuthPage /> : <Navigate to="/" />,
        },
        {
          path: "register",
          element: !isAuthUser ? <AuthPage /> : <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
