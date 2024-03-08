import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "Users",
  initialState: userList,
  reducers: {},
});

export default userSlice.reducer;
