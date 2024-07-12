import {Box, Badge, IconButton } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import { NavContainer } from "../Components/NavContainer";
import { WhiteTypography } from "../Components/Styled";
import User from "../Components/User";
import PropTypes from "prop-types";


const TopNavigation = ({badgeContent}) =>{
  return (

    <NavContainer>
      <Box sx={{display: 'flex', gap: '2.5em'}}>
      <Box sx={{display: 'flex', alignItems: "center"}}>
      <img src="/src/assets/KB.jpg" alt="logo" width= "55" height= "55" style={{ borderRadius: "50%", padding: "0.8rem"}}/>
          <WhiteTypography
          sx={{ 
            fontWeight: '700px', 
            fontsize: "24px",
            color: "#000000",
          }}>
            TaskFlow
          </WhiteTypography>
        </Box>
        <Button startIcon={<AddIcon/>} size="small" sx={{color: '#000000'}}>
        New Project
        </Button>
      </Box>
        <Box sx={{display: "flex", gap:"3em", justifyContent: "space-between"}}>
          <IconButton
            size="large"
            aria-label={`show ${badgeContent} new notifications`}
            color="inherit"
            sx={{
              width:"32",
              height: "32",
              color: "#000000"
            }}
          >
            <Badge 
            badgeContent={badgeContent}
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '0.5rem',
                Width: '8px',
                height: '15px',
                borderRadius: '50%'
              },
              }}>
            <MailIcon />
            </Badge>
          </IconButton>
          <User
          userName= 'Kabute Grace'
          userAvatar= '/src/assets/No-Profile.jpeg'
          size= 'medium'
          />
            </Box>
      </NavContainer>
  )
}
TopNavigation.propTypes = {
  badgeContent: PropTypes.number
};

TopNavigation.defaultProps = {
  badgeContent: 0
};

export default TopNavigation