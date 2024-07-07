import { Box } from "@mui/material";

export default function Layout() {
  return (
    <div className="layout">
      <Box
        sx={{ borderBottom: 1, borderColor: "border" }}
        className="topNavbar"
      >
        Top navigation goes here...
      </Box>
      <Box
        sx={{
          borderRight: 1,
          borderColor: "border",
          padding: "0.8rem",
          borderRadius: "5px",
        }}
        className="sideNavigation"
      >
        Side navigation goes here ...
      </Box>
      <Box className="mainBox">projects box goes here...</Box>

    </div>
  );
}