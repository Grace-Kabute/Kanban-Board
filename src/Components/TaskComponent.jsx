import { Box, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LicenseInfo } from '@mui/x-license-pro';
import User from './User';
import EditIcon from '@mui/icons-material/Edit';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from "prop-types";


LicenseInfo.setLicenseKey('');

const TaskComponent = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          square={false}
          elevation={1}
          sx={{ marginTop: '20px', backgroundColor: 'lightgray', padding: '10px' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>Assigned to : <User userAvatar='' /></Typography>
            <EditIcon />
          </Box>
          <Typography sx={{ paddingBottom: '5px' }}>{task.content}</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimeRangePicker
              localeText={{
                start: 'Start Date',
                end: 'End Date',
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} label="Start Date" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} label="End Date" />
                </>
              )}
            />
          </LocalizationProvider>
        </Paper>
      )}
    </Draggable>
  );
}

export default TaskComponent;

TaskComponent.propTypes = {
  task: PropTypes.string,
  index: PropTypes.string
};