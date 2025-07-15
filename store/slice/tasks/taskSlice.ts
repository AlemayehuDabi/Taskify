import type { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  task: string;
  isLoading: boolean;
  error: any;
}

const initialState: initialStateProps = {
  task: '',
  isLoading: false,
  error: null,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;
export const selectCount = (state: RootState) => state.users;

export default taskSlice.reducer;
