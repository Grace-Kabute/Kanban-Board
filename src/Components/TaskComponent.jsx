import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import User from './User';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';

const TaskComponent = ({ userAvatar, description, dueDate, deleteTask, editTask }) => {
  return (
    <Paper sx={{ marginTop: '20px', backgroundColor: '#F5F5F5', padding: '10px' }}>
      <Box sx={{ alignItems: 'center', paddingBottom: '10px', minWidth: '300px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography>{description}</Typography>
          <User userAvatar={userAvatar} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px'}}>
          <DeleteIcon onClick={deleteTask} sx={{ cursor: 'pointer' }} />
          <EditIcon onClick={editTask} sx={{ cursor: 'pointer' }} />
        </Box>
        <Typography>Due: {dueDate ? dueDate.format('YYYY-MM-DD') : ''}</Typography>
      </Box>
    </Paper>
  );
};

TaskComponent.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.object,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskComponent;
