import React, { useContext, useState } from "react";
import { Grid, Button, Box, Typography } from "@mui/material";

import loginImg from "../assets/chatbot.png";
import { flexCenter } from "../styles/customeStyles";
import { enqueueSnackbar } from "notistack";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { AuthContext } from "../context/AuthContext";

const AuthPage = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //TODO: If page is login page ........
  const loginpage = location.pathname === "/login";

  //TODO: Input Handle change.........
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  //TODO: input value validate..........
  const handleLoginInputValidate = () => {
    if (!formData.email) {
      enqueueSnackbar("Email field is required", { variant: "error" });
      return false;
    }
    if (!formData.password) {
      enqueueSnackbar("Password field is required", { variant: "error" });
      return false;
    }
    return true;
  };

  const handleRegisterInputValidate = () => {
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      enqueueSnackbar("All fields are required", { variant: "error" });
      return false;
    }
    if (formData.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "error",
      });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      enqueueSnackbar("Passwords do not match", { variant: "error" });
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    const newUser = {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", "dummy-jwt-token");
    login(newUser);
    enqueueSnackbar("Registered successfully!", { variant: "success" });
    navigate("/");
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      !storedUser ||
      storedUser.email !== formData.email ||
      storedUser.password !== formData.password
    ) {
      enqueueSnackbar("Invalid email or password", { variant: "error" });
      return;
    }
    localStorage.setItem("token", "dummy-jwt-token");
    login(storedUser);
    enqueueSnackbar("Login successful!", { variant: "success" });
    navigate("/");
  };

  // TODO: Submit Handler.............
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginpage) {
      if (!handleLoginInputValidate()) return;
      handleLogin();
    } else {
      if (!handleRegisterInputValidate()) return;
      handleRegister();
    }
  };

  console.log("FormData", formData);
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid
        size={{ xs: 12, sm: 12, md: 6 }}
        sx={{
          ...flexCenter,
          background: "linear-gradient(to bottom, #d0e7e7, #E9DDCB)",
        }}
      >
        <Box
          component="img"
          src={loginImg}
          alt="Chat Bot"
          sx={{ width: "550px", height: "550px" }}
        />
      </Grid>
      <Grid
        component="form"
        onSubmit={handleSubmit}
        size={{ xs: 12, sm: 12, md: 6 }}
        sx={{
          ...flexCenter,
          flexDirection: "column",
          px: 5,
          backgroundColor: "custom.light4",
        }}
      >
        <AuthForm
          useIn={loginpage ? "login" : "register"}
          formData={formData}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default AuthPage;
