import { Box, Container, Paper, Typography } from "@mui/material";
import TaskComponent from "./TaskComponent";
import PropTypes from 'prop-types';

const ProjectBoard = ({ tasks, setTasks }) => {

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    const newDescription = prompt("Enter the new task description:");
    if (newDescription) {
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, description: newDescription } : task
      ));
    }
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', gap: '2em', paddingBottom: '10px', paddingTop: '10px' }}>
      <Paper elevation={2} sx={{ padding: '10px', minWidth: '350px' }}>
        <Typography sx={{ backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center' }}>To-Do</Typography>
        <Box>
          {tasks.map((task) => (
            <TaskComponent
              key={task.id}
              userAvatar="/src/assets/I.jpeg"
              description={task.name}
              dueDate={task.dueDate}
              deleteTask={() => handleDeleteTask(task.id)}
              editTask={() => handleEditTask(task.id)}
            />
          ))}
        </Box>
      </Paper>
      <Paper elevation={2} sx={{ padding: '10px', minWidth: '350px' }}>
        <Typography sx={{ backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center' }}>On Progress</Typography>
        <Box></Box>
      </Paper>
      <Paper elevation={2} sx={{ padding: '10px', minWidth: '350px' }}>
        <Typography sx={{ backgroundColor: 'red', display: 'flex', justifyContent: 'center' }}>In review</Typography>
        <Box></Box>
      </Paper>
      <Paper elevation={2} sx={{ padding: '10px', minWidth: '350px' }}>
        <Typography sx={{ backgroundColor: 'lightgreen', display: 'flex', justifyContent: 'center' }}>Done</Typography>
        <Box></Box>
      </Paper>
    </Container>
  );
};

ProjectBoard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.object,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default ProjectBoard;
