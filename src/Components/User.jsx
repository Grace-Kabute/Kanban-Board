import { IconButton, Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";


const User = ( {userAvatar, userName, size} ) => {
  const sizes = {
    small: { width: 26, height: 26, fontSize: '14px'},
    medium: { width: 32, height: 32, fontSize: '16px'},
  };
  const avatarSize = sizes[size] || sizes.medium;
  return (
    <Box sx={{display: 'flex', alignItems: "center", justifyContent: "space-around", paddingRight: "5px"}}>
    <IconButton>
      <Avatar
      alt={userName}
      src={userAvatar}
      sx={avatarSize}></Avatar>
      </IconButton>
      <Typography sx={{fontSize: avatarSize.fontSize}}>
        {userName}
        </Typography>
  </Box>
)
}
User.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
};

User.defaultProps = {
  userAvatar: '',
}

export default User