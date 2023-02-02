import { createSlice, createAsyncThunk, Slice } from '@reduxjs/toolkit'
import axios from 'axios';
// import { ToolkitApi } from '../../api';

export const getBlogs = createAsyncThunk("/blogs", async () => {
    const userData = await axios.get('https://dummyjson.com/users')   
    return userData?.data?.users
})

const initialState = {
    showModal: false,
    blogs: [],
    error: '',
    message: '',
    loading: false
}

export const blogSlice = createSlice({
    name: 'Toolkit',
    initialState,
    reducers: {},
    extraReducers: {
        [getBlogs.pending.type]: (state) => {
            state.loading = true;
            state.error = '';
        },
        [getBlogs.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getBlogs.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = '';
            state.blogs = action?.payload || [];
        },
        
    }
});
// export const { toggleModal, toggleCreateAlert, toggleYourToolkitAlert, resetCreateSuccess } = toolkitSlice.actions
export default blogSlice.reducer
