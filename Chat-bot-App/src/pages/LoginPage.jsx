import React, { useState } from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import CustomInput from "../components/CustomInput";
import loginImg from "../assets/chatbot.png";
import { flexCenter } from "../styles/customeStyles";
import { inputsFields } from "../../inputsFields";
import { enqueueSnackbar } from "notistack";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleValidate = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidate()) return;
    enqueueSnackbar("Login successfully", { variant: "success" });
  };
  const filteredInputs = inputsFields.filter(
    (item) => item.id === "email" || item.id === "password"
  );
  return (
    <Grid container>
      <Grid
        size={{ xs: 12, sm: 12, md: 6 }}
        sx={{ ...flexCenter, border: "2px solid blue" }}
      >
        <Box
          component="img"
          src={loginImg}
          alt="Chat Bot"
          sx={{ width: "550px", height: "550px", border: "2px solid blue" }}
        />
      </Grid>
      <Grid
        component="form"
        onSubmit={handleSubmit}
        size={{ xs: 12, sm: 12, md: 6 }}
        sx={{ border: "2px solid blue" }}
      >
        <Typography>Log In</Typography>
        <Typography>Login to explore seamless AI chats</Typography>
        {filteredInputs.map((item) => (
          <React.Fragment key={item.id}>
            <CustomInput item={item} useIn="login" />
          </React.Fragment>
        ))}
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
