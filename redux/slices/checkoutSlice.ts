import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Types
interface CheckoutData {
  // Define your checkout data structure here
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  shippingAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  paymentMethod?: string;
  // Add other checkout fields as needed
}

interface CheckoutResponse {
  // Define your expected response structure
  id: string;
  url: string;
  amount: number;
  currency: string;
  // Add other response fields as needed
}

interface CheckoutState {
  checkout: CheckoutResponse | null;
  loading: boolean;
  error: string | null;
}

// Async thunk to create a checkout session
export const createCheckout = createAsyncThunk(
  "checkout/createCheckout",
  async (checkoutData: CheckoutData, { rejectWithValue }) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("userToken")
          : null;
      if (!token) {
        throw new Error("User token not found");
      }

      const response = await axios.post<CheckoutResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/checkout`,
        checkoutData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "An error occurred during checkout"
      );
    }
  }
);

// Initial state
const initialState: CheckoutState = {
  checkout: null,
  loading: false,
  error: null,
};

// Slice
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    // Add any reducers if needed
    clearCheckout: (state) => {
      state.checkout = null;
      state.error = null;
    },
    clearCheckoutError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCheckout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.loading = false;
        state.checkout = action.payload;
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCheckout, clearCheckoutError } = checkoutSlice.actions;
export default checkoutSlice.reducer;
