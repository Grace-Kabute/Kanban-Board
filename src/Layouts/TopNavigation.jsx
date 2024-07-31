import { Box, Badge, IconButton, Avatar } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { NavContainer } from "../Components/Styled";
import { WhiteTypography } from "../Components/Styled";
import User from "../Components/User";
import PropTypes from "prop-types";
import ModalComponent from "../Components/ModalComponent";

const TopNavigation = ({ badgeContent, addProject }) => {
  return (
    <NavContainer>
      <Box sx={{ display: 'flex', gap: '6em' }}>
        <Box sx={{ display: 'flex', alignItems: "center" }}>
        <Avatar sx={{ bgcolor: 'black', color: 'white', width:36, height: 36 }}>TF</Avatar>   
        <WhiteTypography
            sx={{
              fontWeight: '700px',
              fontSize: "24px",
              color: "#000000",
            }}>
            TaskFlow
          </WhiteTypography>
        </Box>
        <ModalComponent
          buttonText={'New Project'}
          onAdd={addProject}
          use={'Project'}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "3em", justifyContent: "space-between" }}>
        <IconButton
          size="large"
          aria-label={`show ${badgeContent} new notifications`}
          color="inherit"
          sx={{
            width: "32",
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
          userName='Kabute Grace'
          userAvatar='/src/assets/I.jpeg'
          size='medium'
        />
      </Box>
    </NavContainer>
  );
}

TopNavigation.propTypes = {
  badgeContent: PropTypes.number,
  addProject: PropTypes.func.isRequired,
};

TopNavigation.defaultProps = {
  badgeContent: 0,
};

export default TopNavigation;
