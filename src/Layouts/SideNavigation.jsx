import { useState } from 'react';
import Container from '@mui/material/Container';
import { faHome, faGear, faUsers, faArrowRight, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import MenuCard from '../Components/MenuCard';
import User from '../Components/User';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideNavigation = ({ setSelectedProject }) => {
  const [activeMenu, setActiveMenu] = useState('Home');

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setSelectedProject(null);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
        padding: '10px 0',
      }}
    >
      <Box>
        <Typography>Navigations</Typography>
        <Box sx={{ borderColor: 'border', paddingBottom: '10px', paddingTop: '10px'}}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'black'  }}>
            <MenuCard menuTitle='Home' icon={faHome} active={activeMenu === 'Home'} onClick={() => handleMenuClick('Home')} />
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'black'  }}>
            <MenuCard menuTitle='Projects' icon={faProjectDiagram} active={activeMenu === 'Projects'} onClick={() => handleMenuClick('Projects')} />
          </Link>
          <Link to="/members" style={{ textDecoration: 'none', color: 'black'  }}>
            <MenuCard menuTitle='Members' icon={faUsers} active={activeMenu === 'Members'} onClick={() => handleMenuClick('Members')} />
          </Link>
          <Link to="/settings" style={{ textDecoration: 'none', color: 'black'  }}>
            <MenuCard menuTitle='Settings' icon={faGear} active={activeMenu === 'Settings'} onClick={() => handleMenuClick('Settings')} />
          </Link>
        </Box>
        <Typography>Direct Messages</Typography>
        <Box sx={{ borderColor: 'border', paddingBottom: '20px' }}>
          <User userName='Kabute Grace' userAvatar='/src/assets/I.jpeg' size='small' />
          <User userName='Kabute Grace' userAvatar='/src/assets/No-Profile.jpeg' size='small' />
          <User userName='Kabute Grace' userAvatar='/src/assets/No-Profile.jpeg' size='small' />
        </Box>
      </Box>
      <Box>
        <MenuCard menuTitle='Sign Out' icon={faArrowRight} active={activeMenu === 'Sign-Out'} onClick={() => handleMenuClick('Sign-Out')} />
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
