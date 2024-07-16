import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from "prop-types";
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({buttonText}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        startIcon={<AddIcon/>}
        size="small" 
        sx={{color: '#000000'}}
        onClick={handleOpen}
        >
        {buttonText}  
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new Project
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Fill in the information of the project
          </Typography>
        </Box>

      </Modal>
    </>
  );
}

BasicModal.propTypes = {
  buttonText: PropTypes.string
};
