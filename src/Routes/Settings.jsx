import { Container, Box, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';

const Settings = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Settings</Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Profile</Typography>
        <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained">Save Changes</Button>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Theme</Typography>
        <FormControlLabel control={<Switch />} label="Dark Mode" />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Notifications</Typography>
        <FormControlLabel control={<Switch />} label="Email Notifications" />
        <FormControlLabel control={<Switch />} label="SMS Notifications" />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Account</Typography>
        <Button variant="outlined">Change Password</Button>
      </Box>
    </Container>
  );
};

export default Settings;
