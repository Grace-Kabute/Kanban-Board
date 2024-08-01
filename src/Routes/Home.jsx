import { Box, Container, Paper, Typography } from "@mui/material";
import ModalComponent from "../Components/ModalComponent";

const Home = () => {
  const userName = "Kabute";

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1em' }}>
        <Typography variant="h5">Hello, {userName}</Typography>
        <ModalComponent buttonText="New Project" use="Project" />
      </Box>
      <Box>
        <Typography variant="h4">Progress</Typography>
      </Box>
      <Paper sx={{ padding: 2, backgroundColor: '#ff6f61', maxWidth: '400px', marginBottom: '3em', color: '#fff' }}>
        <Box>
          <Typography>Overdue</Typography>
          <Typography variant="h3">0</Typography>
        </Box>
      </Paper>
      <Box sx={{ display: 'flex', gap: '2em', marginTop: '2em' }}>
        <Paper sx={{ padding: 5, backgroundColor: '#6b5b95', color: '#fff' }}>
          <Box>
            <Typography>All tasks</Typography>
            <Typography variant="h1">0</Typography>
            <Typography>from last update</Typography>
          </Box>
        </Paper>
        <Paper sx={{ padding: 5, backgroundColor: '#feb236', color: '#fff' }}>
          <Box>
            <Typography>In progress</Typography>
            <Typography variant="h1">0</Typography>
            <Typography>from last update</Typography>
          </Box>
        </Paper>
        <Paper sx={{ padding: 5, backgroundColor: '#88b04b', color: '#fff' }}>
          <Box>
            <Typography>Completed</Typography>
            <Typography variant="h1">0</Typography>
            <Typography>from last update</Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
