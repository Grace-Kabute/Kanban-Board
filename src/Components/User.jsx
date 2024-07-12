import { IconButton, Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";


const User = ( {userAvatar, userName} ) => {
  return (
    <Box sx={{display: 'flex', alignItems: "center", justifyContent: "space-around", paddingRight: "5px"}}>
    <IconButton>
      <Avatar
      alt={userName}
      src={userAvatar}
      sx={{ width: 32, height: 32}}></Avatar>
      </IconButton>
      <Typography>
        {userName}
        </Typography>
  </Box>
)
}
User.propTypes = {
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
};

User.defaultProps = {
  userName: 'User',
  userAvatar: '',
};

export default User