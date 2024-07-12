import { useState } from "react";
import Container from "@mui/material/Container";
import {
  faHome,
  faGear,
  faUsers,
  faDiagramProject,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import MenuCard from "../Components/MenuCard";
import User from "../Components/User";
import { Typography } from "@mui/material";

export default function SideNavigation() {
  // State to track the active menu
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Handler to set the active menu
  const handleMenuClick = ( {menuName} ) => {
    setActiveMenu(menuName);
  };

  return (
    <Container>
      <Typography >
        Navigations
      </Typography>
      <Box
        sx={{
          borderColor: "border",
          paddingBottom: "50px",
          paddingTop: "15px",
        }}
      >
        <MenuCard
          menuTitle="Home"
          icon={faHome}
          active={activeMenu === "Home"}
          onClick={() => handleMenuClick("Home")}
        />
        <MenuCard
          menuTitle="Projects"
          icon={faDiagramProject}
          active={activeMenu === "Projects"}
          onClick={() => handleMenuClick("Projects")}
        />
        <MenuCard
          menuTitle="Members"
          icon={faUsers}
          active={activeMenu === "Members"}
          onClick={() => handleMenuClick("Members")}
        />
        <MenuCard
          menuTitle="Settings"
          icon={faGear}
          active={activeMenu === "Settings"}
          onClick={() => handleMenuClick("Settings")}
        />
      </Box>
      <Typography>
        Direct Messages
      </Typography>
      <Box
        sx={{
          height: "350px",
          borderColor: "border",
          paddingTop: "15px",
        }}
      >
      <User 
      userName= 'Kabute Grace'
      userAvatar= '/src/assets/No-Profile.jpeg'
      size= 'small'
      />
      </Box>
      <Box sx={{ paddingTop: "20px" }}>
        <MenuCard
          menuTitle="Sign Out"
          icon={faArrowRight}
          active={activeMenu === "Sign-Out"}
          onClick={() => handleMenuClick("Sign-Out")}
        />
      </Box>
    </Container>
  );
}
