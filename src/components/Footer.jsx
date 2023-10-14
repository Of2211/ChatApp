import { Button, Typography, Box } from "@mui/material";

export default function Footer() {
  const handleClick = () => {
    window.open("https://github.com/Of2211" ,"_blank");
  };

  return (
    <Box
      sx={{
        p: 1,
        bgcolor: "#0860cb",
        color: "white",
        maxHeight: "50px",
      }}
    >
      <Button
        className="btn-footer"
        sx={{
          border: "3px solid red",
          ":hover": {
            transform: "scale(1.1)",
            transition: "transform 0.1s ease-in-out",
            bgcolor: "red",
            color: "white",
          },
        }}
        color="inherit"
        onClick={handleClick}
      >
        GitHub
      </Button>

      <Typography variant="body2" align="center">
        Copyright © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
