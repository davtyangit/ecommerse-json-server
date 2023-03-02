import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Create_Category = createAsyncThunk("categories/Create_Category", async (newData) => {
    try {
        const res = await axios.post('http://localhost:3000/categories', newData)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const Get_Categories = createAsyncThunk("categories/Get_Categories", async () => {
    try {
        const res = await axios.get('http://localhost:3000/categories')
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const Get_Categories_bygender = createAsyncThunk("categories/Get_Categories_bygender", async (gender) => {
    try {
        const res = await axios.get(`http://localhost:3000/categories?gender=${gender ? gender : "Female"}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        loading: false,
        categories: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Create_Category.pending, (state) => {
                state.loading = true
            }).addCase(Create_Category.fulfilled, (state) => {
                state.loading = false
            }).addCase(Create_Category.rejected, (state) => {
                state.loading = false
                state.error = "404"
            })

            .addCase(Get_Categories.pending, (state) => {
                state.loading = true
            }).addCase(Get_Categories.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload
            }).addCase(Get_Categories.rejected, (state) => {
                state.loading = false
                state.error = "404"
            })

            .addCase(Get_Categories_bygender.pending, (state) => {
                state.loading = true
            }).addCase(Get_Categories_bygender.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload
            }).addCase(Get_Categories_bygender.rejected, (state) => {
                state.loading = false
                state.error = "404"
            })
    }
})

export default categoriesSlice.reducer