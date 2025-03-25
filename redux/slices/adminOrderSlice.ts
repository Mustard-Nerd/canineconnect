import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//Fetch all orders (admin only)
export const fetchAllOrders = createAsyncThunk("adminOrders/fetchAllOrders", async ({_, {rejectWithValue}}) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/orders`, 
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                }
            })
            return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
} )

// Update order delivery status
export const updateOrderStatus = createAsyncThunk("adminOrders/updateOrderStatus", async ({id, status}, {rejectWithValue}) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/orders/${id}`,{status}, 
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                }
            })
            return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
} )

// Delete an order
export const deleteOrder = createAsyncThunk("adminOrders/deleteOrder", async (id, {rejectWithValue}) => {
    try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/orders/${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                }
            })
            return id
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
} )

// Admin order slice
const adminOrderSlice = createSlice({
    name: "adminOrders",
    initialState: {
        orders: [],
        totalOrders: 0,
        totalSales: 0,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Fetch all orders
        .addCase(fetchAllOrders.pending, (state) => {
            state.loading = true
        })
    }
})