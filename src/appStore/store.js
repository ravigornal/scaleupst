import { configureStore } from '@reduxjs/toolkit';
import { signupSlice } from '../features/Signup';
import { composeWithDevTools } from 'redux-devtools-extension';

export default configureStore({
  reducer: {
    user: signupSlice.reducer,
  },
},composeWithDevTools());
