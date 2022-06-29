import { RootState } from './../../store/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
 postsList: any[];
 isPostsLoading: boolean;
}

const initialState: InitialStateType = {
 postsList: [],
 isPostsLoading: false,
}

const postsSlice = createSlice({
 name: 'posts',
 initialState,
 reducers: {
  getPosts: (state, action: PayloadAction<undefined>) => {},
  setLoadingPosts: (state, action: PayloadAction<boolean>) => {
   state.isPostsLoading = action.payload;
  },
  setPosts: (state, action: PayloadAction<any>) => {
   state.postsList = action.payload;
  },
 }
})

export const {getPosts, setLoadingPosts, setPosts} = postsSlice.actions
const reducer = postsSlice.reducer

export default reducer

export const PostsSelectors = {
 getPosts: (state: RootState) => state.posts.postsList,
}