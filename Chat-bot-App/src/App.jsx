import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const App = () => {
  useEffect(() => {
    const appMode = localStorage.getItem("appMode");
    if (!appMode) {
      localStorage.setItem("appMode", "light");
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
