
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Stack, Toolbar } from '@mui/material';

import UserElement from './UserElement'
import UserData from './UserData';

interface UserListProps {
    users : UserData[]
}

const UserList = ({users}:UserListProps)=>{

    return <Box component="main" sx={{ flexGrow: 1}}>
        <Toolbar />
        <Stack direction='column'>
        <Grid container spacing={2}>
            {users.map((user, index)=>{ 
                return <Grid size={4}>
                    <UserElement user={user} index={index}/>
                </Grid>
            }
            )}
        </Grid>
        </Stack>
  </Box>
}

export default UserList;

