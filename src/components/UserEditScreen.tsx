import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../store/userStore';
import { Box, Button, Input } from "@mui/material";
import { useParams } from "react-router";
import { ChangeEvent, useState } from "react";
import { updateUserName } from "../store/usersSlice";

const EditScreen = () => {
    const userIdx = (Number)(useParams().idx)
    
    const userInfo = useSelector((state: RootState) => state.userStore.users[userIdx])
    const dispatch = useDispatch()
    const updateNameInStore = () => {
        dispatch(updateUserName({index: userIdx, name: name}))
    }

    const [name, setName] = useState(userInfo.name)

    const updateName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(event.target.value)
    }
    
    return <Box>
        <span>name: </span><Input type="text" value={name} onChange={updateName}></Input>  
        <Button onClick={updateNameInStore}>Change name</Button> <br/>
        <span>age: {userInfo.age}</span> 
        
    </Box>
}

export default EditScreen