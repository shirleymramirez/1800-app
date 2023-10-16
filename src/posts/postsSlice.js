import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    ids: [],
    data: {},
    error: '',
  },
  reducers: {
    setPosts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const ids = action.payload.map(post => post.id);
      const data = {};
      state.ids = ids;
      action.payload.forEach(post => data[post.id] = post);
      state.data = data;
    },
    editPost: (state, action) => {
        state.data[action.payload.id].title = action.payload.title;
        state.data[action.payload.id].body = action.payload.body;
    },
    deletePost: (state, action) => {
        delete state.data[action.payload.id];
        const index = state.ids.indexOf(action.payload.id);
        state.ids.splice(index, 1)
    },
    updateErrors: (state, action) => {
      state.error = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setPosts, editPost, deletePost, updateErrors, incrementByAmount } = postsSlice.actions

export default postsSlice.reducer