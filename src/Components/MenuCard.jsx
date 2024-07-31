import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";

function MenuCard({ menuTitle, icon, styles, onClick }) {
  return (
    <MenuList
      sx={styles}
      style={{
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <MenuItem
        sx={{
          display: "flex",
          alignItems: "baseline",
          "&:hover": {
            paddingRight: "auto",
            transition: "0.3s ease",
          },
        }}
      >
        <ListItemIcon>
          <FontAwesomeIcon icon={icon} size="sm" />
        </ListItemIcon>
        <ListItemText>{menuTitle}</ListItemText>
      </MenuItem>
    </MenuList>
  );
}

MenuCard.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  styles: PropTypes.object,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes,

};

export default MenuCard;
