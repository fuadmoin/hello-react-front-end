import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  messages: [],
  loading: false,
  error: '',
};

const url = 'http://127.0.0.1:3000/api/messages';

export const fetchMessages = createAsyncThunk('greeting/fetchMessages', async () => {
  const response = await axios.get(url);
  return response.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      const messages = action.payload;
      return { ...state, loading: false, messages };
    });

    builder.addCase(fetchMessages.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },

});

export default greetingSlice.reducer;
