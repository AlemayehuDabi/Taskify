import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import axios from 'axios';

// Define a type for the slice state
interface UserState {
  user: any;
  loading: boolean;
  error: any;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// async thunk

// login
const login = createAsyncThunk(
  'auth/login',
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', payload);

      if (!data) throw Error('login is not successful');

      const userData = await data.json();
      return userData.user;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// sign-up
const signUp = createAsyncThunk(
  'auth/signup',
  async (
    payload: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const { data } = await axios.put('/api/sign-up', payload);

      if (!data) throw Error('failed to create user');

      const userData = await data.json();

      return userData.user;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.users;

export default userSlice.reducer;
