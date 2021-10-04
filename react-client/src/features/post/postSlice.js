import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name:'post',
    initialState: {
        "posts":{},
        "searchResult":undefined
    },
    reducers: {
        update: (state, action) =>{
            state.posts[action.payload.id] = action.payload
        },
        getSearchResult: (state, action) => {
            state.searchResult = Object.values(state.posts).find(post => post.title === action.payload)
        }
    }
})

export const { getSearchResult, update } = postSlice.actions

export default postSlice.reducer