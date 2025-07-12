import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface UserState {
  name: string;
  email: string;
  password: string;
}

// Define the initial state using that type
const initialState: UserState = {
  name: '',
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.users;

export default userSlice.reducer;
