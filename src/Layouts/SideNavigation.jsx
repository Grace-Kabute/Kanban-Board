import { Box, Container, Typography, Collapse } from '@mui/material';
import { useState } from 'react';
import { faHome, faGear, faUsers, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import MenuCard from '../Components/MenuCard';
import User from '../Components/User';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const SideNavigation = ({ projects, setSelectedProject }) => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [openProjects, setOpenProjects] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setSelectedProject(null);
    navigate(`/${menuName.toLowerCase()}`);
  };

  const handleProjectClick = (project) => {
    setActiveMenu('Projects');
    setSelectedProject(project);
    navigate(`/projects/${project.id}`);
  };

  const toggleProjects = () => {
    setOpenProjects((prev) => !prev);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', padding: '10px 0' }}>
      <Box>
        <Typography>Navigations</Typography>
        <Box sx={{ borderColor: 'border', paddingBottom: '10px', paddingTop: '10px' }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuCard menuTitle="Home" icon={faHome} active={activeMenu === 'Home'} onClick={() => handleMenuClick('Home')} />
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleProjects}>
            <MenuCard menuTitle="Projects" icon={faProjectDiagram} active={activeMenu === 'Projects'} />
          </Box>
          <Collapse in={openProjects}>
            <Box sx={{ borderColor: 'border', paddingBottom: '10px', paddingLeft: '20px' }}>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <Box key={project.id} onClick={() => handleProjectClick(project)} sx={{ cursor: 'pointer' }}>
                    <Typography>{project.name}</Typography>
                  </Box>
                ))
              ) : (
                <Typography>No projects</Typography>
              )}
            </Box>
          </Collapse>
          <Link to="/members" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuCard menuTitle="Members" icon={faUsers} active={activeMenu === 'Members'} onClick={() => handleMenuClick('Members')} />
          </Link>
          <Link to="/settings" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuCard menuTitle="Settings" icon={faGear} active={activeMenu === 'Settings'} onClick={() => handleMenuClick('Settings')} />
          </Link>
        </Box>
        <Typography>Direct Messages</Typography>
        <Box sx={{ borderColor: 'border', paddingBottom: '110px' }}>
          <User userName="Kabute Grace" userAvatar="/src/assets/I.jpeg" size="small" />
          <User userName="Kabute Grace" userAvatar="/src/assets/No-Profile.jpeg" size="small" />
          <User userName="Kabute Grace" userAvatar="/src/assets/No-Profile.jpeg" size="small" />
        </Box>
      </Box>
    </Container>
  );
};

SideNavigation.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};

export default SideNavigation;
