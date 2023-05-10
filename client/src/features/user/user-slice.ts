import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableUserInfo } from '../../types/UserForm';

interface IUserState {
  user: EditableUserInfo | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<EditableUserInfo>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;