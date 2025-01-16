import UserData from '../components/UserData';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserList = {
    users: UserData[]
}
const initialState: UserList = {users:[
    {name: "aaa", age: 5},
    {name: "bbb", age:0}
]}

const usersSlice = createSlice({
    name: "qwe",
    initialState,
    reducers: {
        updateUserName: (state: UserList, action: PayloadAction<UserUpdateData>) => {
            state.users[action.payload.index].name = action.payload.name
        }
    }
})

export type UserUpdateData = {
    index: number,
    name: string
}

export const { updateUserName } = usersSlice.actions
export default usersSlice.reducer