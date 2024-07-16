import { Box } from "@mui/material";
import TopNavigation from "./Layouts/TopNavigation";
import SideNavigation from "./Layouts/SideNavigation";
import DropComponent from "./Components/DropComponent";
import Project from "./Components/Project";

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
        <Project/>
        <Box sx={{ overflowX: 'auto'}}> <DropComponent /></Box>
      </Box>

    </div>
  );
}