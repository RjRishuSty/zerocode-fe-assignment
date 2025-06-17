import React from "react";
// import { profileContext } from "../context/ProfileContext";
import { Box, Modal, Stack, Typography } from "@mui/material";

const ProfileModel = () => {
  // const {modelOpen, handleClose} = useContext(profileContext);
  return (
    <Stack
      sx={{
        backgroundColor: "custom.secondary",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ border: "2px solid blue" }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          User Profile
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Stack>
  );
};

export default ProfileModel;
