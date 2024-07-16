import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import MenuCard from "./MenuCard";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import {
  faClock,
  faEllipsisVertical,
  faFilter,
  faFlag,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "../Components/ModalComponent";
import PropTypes from "prop-types";


const Project = ({ProjectName}) => {
  // State to track the active menu
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Handler to set the active menu
  const handleMenuClick = ( {menuName} ) => {
    setActiveMenu(menuName);
  };
  return (
    <Container sx={{padding: '20px', border: 'solid 1px black'}}>
      <Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h5"> {ProjectName} </Typography>
          <Button> Invite </Button>
       </Box>
       <Box >
       <MenuCard
          menuTitle="priority"
          icon={faFlag}
          active={activeMenu === "Priority"}
          onClick={() => handleMenuClick("Priority")}
          labels = {"high"}
        />
       <MenuCard
          menuTitle="Assigned to"
          icon={faUserCheck}
          active={activeMenu === "Assigned-to"}
          onClick={() => handleMenuClick("Assigned-to")}
          labels= {'high'}

        />
       <MenuCard
          menuTitle="Due date"
          icon={faClock}
          active={activeMenu === "Due date"}
          onClick={() => handleMenuClick("Due date")}
          labels = {"high"}
        />
       <MenuCard
          menuTitle="Status"
          icon={faEllipsisVertical}
          active={activeMenu === "Status"}
          onClick={() => handleMenuClick("Status")}
          labels = {"high"}
        />
      </Box>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '2em'}}>
    <Stack sx={{width: '25%'}}>
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={tasks.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search task..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        />
    </Stack>
    <MenuCard
          menuTitle="Filter"
          icon={faFilter}
          active={activeMenu === "Filter"}
          onClick={() => handleMenuClick("Filter")}
        />
      <ModalComponent
        buttonText={'Add Task'}
        use= {'Project'}
      />
  </Box>
    </Container>
  )
}

export default Project

const tasks = [
  {title: 'Create top navigation'},
  {title: 'Prepare for interview'},
  {title: 'Add '},
  {title: 'Create top navigation'},
]

Project.propTypes = {
  ProjectName: PropTypes.string.isRequired
}