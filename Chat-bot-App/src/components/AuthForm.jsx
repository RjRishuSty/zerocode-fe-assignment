import React from "react";
import { inputsFields } from "../../inputsFields";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomInput from "../components/CustomInput";
import LoginIcon from "@mui/icons-material/Login";

const AuthForm = ({ useIn, formData, onChange }) => {
  const location = useLocation();
  const filteredInputs = inputsFields.filter(
    (item) => item.id === "email" || item.id === "password"
  );
  const getInputs = () => {
    switch (useIn) {
      case "login":
        return (
          <>
            {filteredInputs.map((item) => (
              <CustomInput
                key={item.id}
                item={item}
                value={formData[item.id]}
                onChange={onChange}
                useIn="login"
              />
            ))}
          </>
        );

      case "register":
        return (
          <Grid container columnSpacing={3}>
            {inputsFields.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 12, md: 6 }}>
                <CustomInput
                  item={item}
                  value={formData[item.id]}
                  onChange={onChange}
                  useIn="register"
                />
              </Grid>
            ))}
          </Grid>
        );

      default:
        <Typography>Not Found</Typography>;
    }
  };
  return (
    <>
      <Typography gutterBottom variant="h2">
        {useIn === "login" ? "Log In" : "Register"}
      </Typography>
      <Typography gutterBottom sx={{ mb: 3 }}>
        {useIn === "login"
          ? "Login to explore seamless AI chats"
          : "Register to get started"}
      </Typography>

      {getInputs()}
      <Button
        size="large"
        variant="contained"
        type="submit"
        sx={{ mt: 2, backgroundColor: "custom.light1", color: "#000" }}
        endIcon={<LoginIcon />}
      >
        {useIn === "login" ? "Login" : "Create an Account"}
      </Button>

      <Typography variant="body1" sx={{ mt: 5 }}>
        {useIn === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
        <Box
          component={Link}
          to={location.pathname === "/login" ? "/register" : "/login"}
        >
          {" "}
          {useIn === "login" ? " Create an account." : "Login here."}
        </Box>
      </Typography>
    </>
  );
};

export default AuthForm;
