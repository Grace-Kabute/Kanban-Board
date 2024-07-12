import { Box } from "@mui/material";
import TopNavigation from "./Layouts/TopNavigation";
import SideNavigation from "./Layouts/SideNavigation";

export default function Layout() {
  return (
    <div className="layout">
      <Box
        sx={{ borderBottom: 1, borderColor: "border" }}
        className="topNavbar"
      >
        <TopNavigation
          badgeContent= {10}
        />
      </Box>
      <Box
        sx={{
          borderRight: 1,
          borderColor: "border",
          padding: "0.8rem",
        }}
        className="sideNavigation"
      >
        <SideNavigation />
      </Box>
      <Box className="mainBox">
        projects box goes here...
      </Box>

    </div>
  );
}