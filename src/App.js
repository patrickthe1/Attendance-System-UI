import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { PuffLoader } from "react-spinners";


function App() {
  const [status, setStatus] = useState("Please scan your fingerprint.");

  const handleFingerprintClick = () => {
    setStatus(
        <PuffLoader color="#2a5298" size={50} css={{ margin: "1rem auto" }} />
      );
    setTimeout(() => {
      setStatus("Fingerprint verified! ");
    }, 2000);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: "2rem",
          textAlign: "center",
          maxWidth: "400px",
          borderRadius: "1rem",
          background: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1e3c72" }}
        >
          Attendance System
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FingerprintIcon />}
          onClick={handleFingerprintClick}
          sx={{
            margin: "1rem 0",
            fontSize: "1.2rem",
            borderRadius: "2rem",
            padding: "0.75rem 1.5rem",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "#2a5298",
            },
          }}
        >
          Scan Fingerprint
        </Button>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#333",
            fontWeight: "500",
            marginTop: "1rem",
          }}
        >
          {status}
        </Typography>
      </Paper>
    </Box>
  );
}

export default App;
