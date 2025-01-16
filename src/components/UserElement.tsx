
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import UserData from './UserData';
import { useNavigate } from 'react-router';

interface userElementProps {
    user: UserData,
    index: number
}

const UserElement = ({user, index}: userElementProps)=>{
  const navigate = useNavigate()

  const toChangeUser = () => {
    navigate("/user/"+index)
  }

    return <>
    <Card sx={{ maxWidth: 345,}} onClick={toChangeUser}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {user.name}
          </Typography>
          
          <Typography gutterBottom variant="h6" component="div" noWrap >
          <strong>Age</strong>: {user.age}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

    </>
}

export default UserElement