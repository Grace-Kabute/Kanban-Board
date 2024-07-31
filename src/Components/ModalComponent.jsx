import { useState } from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const style = {
  position: 'absolute',
  top: '30%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

export default function ModalComponent({ buttonText, onAdd, use }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAdd = () => {
    onAdd({ name: inputValue, dueDate });
    setInputValue('');
    setDueDate(null);
    handleClose();
  };

  return (
    <>
      <Button startIcon={<AddIcon />} size="small" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new {use}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Fill in the information of the {use.toLowerCase()}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              label={`${use} Name`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              size="small"
              fullWidth
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Set Due Date"
                value={dueDate}
                onChange={(newValue) => setDueDate(newValue)}
                renderInput={(params) => <TextField {...params} size='small' fullWidth />}
              />
            </LocalizationProvider>
            <Button variant="contained" size="small" onClick={handleAdd}>
              Add {use}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

ModalComponent.propTypes = {
  buttonText: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  use: PropTypes.string.isRequired,
};
