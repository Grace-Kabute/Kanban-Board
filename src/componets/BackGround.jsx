import  Button  from "@mui/material/button"
import StartIcon from '@mui/icons-material/Start';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";

const BackGround = () => {
  const handleClick = ()=>{
    Navigate('/Login')
  }
  return (
    <>
    <Box sx={{float:"left"}}>
      <FitbitIcon/>
      TaskFlow
    </Box>
    <Button variant="outlined" href="#outlined-buttons" onClick={handleClick} sx={{position: "fixed", bottom: "5%", left: "43%"}}>
        Get started
        <StartIcon/>
    </Button>
    </>
  )
}

export default BackGround