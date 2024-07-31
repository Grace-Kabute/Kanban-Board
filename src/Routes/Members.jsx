import { Container, Box, Typography, Button, TextField, Avatar, List, ListItem, ListItemText, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PropTypes from 'prop-types';

const Members = ({ members=[], onAddMember, onRemoveMember }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Members</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField variant="outlined" placeholder="Search members" size="small" />
        <Button startIcon={<PersonAddIcon />} variant="contained" onClick={onAddMember}>
          Invite Member
        </Button>
      </Box>

      <List>
        {members.map(member => (
          <ListItem key={member.id}>
            <Avatar src={member.avatar} sx={{ mr: 2 }} />
            <ListItemText primary={member.name} secondary={member.role} />
            <IconButton onClick={() => onRemoveMember(member.id)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Members.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
  onAddMember: PropTypes.func.isRequired,
  onRemoveMember: PropTypes.func.isRequired,
};

export default Members;
