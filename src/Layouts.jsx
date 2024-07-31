import { Box } from "@mui/material";
import TopNavigation from "./Layouts/TopNavigation";
import SideNavigation from "./Layouts/SideNavigation";
import { Outlet } from "react-router-dom";
import { useState } from 'react';


export default function Layout() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const addProject = (newProject) => {
    setProjects([...projects, { id: projects.length + 1, name: newProject.name }]);
  };
  return (
    <div className="layout">
      <Box
        sx={{ borderBottom: 1, borderColor: "border" }}
        className="topNavbar"
      >
        <TopNavigation addProject={addProject} badgeContent={10}/>       
      </Box>
      <Box
        sx={{
          borderRight: 1,
          borderColor: "border",
          padding: "0.8rem",
        }}
        className="sideNavigation"
      >
          <SideNavigation projects={projects} setSelectedProject={setSelectedProject} />
          </Box>
      <Box className="mainBox"> 
      <Outlet context={{ projects, selectedProject, addProject }} />
      </Box>
    </div>
  );
}
