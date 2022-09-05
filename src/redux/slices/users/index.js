// una parte del estado
import { createSlice } from '@redux/toolkit';

//axios
import axios from 'axios';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.playload;
    },
  },
});

export const { setUserList } = userSlice.action;

export default userSlice.reducer;

//Funcion asincrona

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get('https://reqres.in/api/users?page=2')
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error));
};
