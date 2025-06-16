import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
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
          element: isAuthUser ? <HomePage /> : <Navigate to="login" />,
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
