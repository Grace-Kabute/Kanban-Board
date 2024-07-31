import { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import ModalComponent from '../Components/ModalComponent';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ProjectBoard from '../Components/ProjectBoard';
import { useOutletContext, useParams } from 'react-router-dom';

const Projects = () => {
  const { projects, selectedProject } = useOutletContext();
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [projectName, setProjectName] = useState('No Project Selected');

  useEffect(() => {
    const project = projects.find((proj) => proj.id === parseInt(projectId)) || selectedProject;
    if (project) {
      setProjectName(project.name);
    }
  }, [projectId, projects, selectedProject]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <Container>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5">{projectName}</Typography>
          <ModalComponent buttonText="Add Task" use="Task" onAdd={addTask} />
        </Box>
        <Box sx={{ padding: '0' }}>
          <TextField
            variant="outlined"
            placeholder="Search…"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <ProjectBoard tasks={tasks} />
    </Container>
  );
};

Projects.propTypes = {
  projects: PropTypes.array,
}

Projects.defaultProps = {
  projects: [],
};

export default Projects;
