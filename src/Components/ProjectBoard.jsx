import { Droppable } from 'react-beautiful-dnd';
import { Box, Typography } from '@mui/material';
import TaskComponent from './TaskComponent';
import PropTypes from "prop-types";


const ProjectBoard = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Box
          {...provided.droppableProps}
          ref={provided.innerRef}
          sx={{ margin: '8px', border: '1px solid lightgrey', borderRadius: '2px', minWidth: '300px', display: 'flex', flexDirection: 'column', overflowX: 'auto'}}
        >
          <Typography variant="h6" sx={{ padding: '8px' }}>{column.title}</Typography>
          <Box sx={{ padding: '8px' }}>
            {tasks.map((task, index) => (
              <TaskComponent key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        </Box>
      )}
    </Droppable>
  );
};

export default ProjectBoard;

ProjectBoard.propTypes = {
  column: PropTypes.string,
  tasks: PropTypes.string
};