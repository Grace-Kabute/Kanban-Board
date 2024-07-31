import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";


const Project = ({ProjectName}) => {
  return (
    <Container sx={{padding: '20px', overflowY: 'auto', color:'white'}}>
      <Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h5"> {ProjectName} </Typography>
          <Button> Invite </Button>
       </Box>
    </Box>
    </Container>
  )
}

Project.propTypes = {
  ProjectName: PropTypes.string.isRequired
}

export default Project