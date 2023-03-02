import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Create_Products = createAsyncThunk("product/Create_Products", async (newProduct) => {
    try {
        const res = await axios.post('http://localhost:3000/products', newProduct)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const Search_Product = createAsyncThunk("product/Search_Product", async (query) => {
    try {
        const res = await axios.get(`http://localhost:3000/products?q=${query}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const Remove_Product = createAsyncThunk("product/Remove_Product", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3000/products/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const Get_Products = createAsyncThunk("product/Get_Products", async () => {
    try {
        const res = await axios.get('http://localhost:3000/products')
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const Get_Products_forFemales = createAsyncThunk("product/Get_Products_forFemales", async () => {
    try {
        const res = await axios.get('http://localhost:3000/products?gender=Girl')
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const Get_Products_byCategory = createAsyncThunk("categories/Get_Products_byCategory", async (category) => {
    try {
        const res = await axios.get(`http://localhost:3000/products?category=${category}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Create_Products.pending, (state) => {
                state.loading = true
            }).addCase(Create_Products.fulfilled, (state) => {
                state.loading = false
            }).addCase(Create_Products.rejected, (state) => {
                state.loading = false
            })

            .addCase(Remove_Product.pending, (state) => {
                state.loading = true
            }).addCase(Remove_Product.fulfilled, (state) => {
                state.loading = false
            }).addCase(Remove_Product.rejected, (state) => {
                state.loading = false
            })

            .addCase(Get_Products.pending, (state) => {
                state.loading = true
            }).addCase(Get_Products.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            }).addCase(Get_Products.rejected, (state) => {
                state.loading = false
            })

            .addCase(Search_Product.pending, (state) => {
                state.loading = true
            }).addCase(Search_Product.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            }).addCase(Search_Product.rejected, (state) => {
                state.loading = false
            })

            .addCase(Get_Products_forFemales.pending, (state) => {
                state.loading = true
            }).addCase(Get_Products_forFemales.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            }).addCase(Get_Products_forFemales.rejected, (state) => {
                state.loading = false
            })

            .addCase(Get_Products_byCategory.pending, (state) => {
                state.loading = true
            }).addCase(Get_Products_byCategory.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            }).addCase(Get_Products_byCategory.rejected, (state) => {
                state.loading = false
            })
    }
})

export default productsSlice.reducer