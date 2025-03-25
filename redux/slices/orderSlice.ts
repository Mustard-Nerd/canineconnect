import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Types
interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  // Add other item fields as needed
}

interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
  createdAt: string;
  // Add other order fields as needed
}

interface OrdersState {
  orders: Order[];
  totalOrders: number;
  orderDetails: Order | null;
  loading: boolean;
  error: string | null;
}

// Async thunk to fetch user orders
export const fetchUserOrders = createAsyncThunk(
  "orders/fetchUserOrders",
  async (_, { rejectWithValue }) => {
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

      const response = await axios.get<{
        data: { orders: Order[]; total: number };
      }>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/my-orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "An error occurred while fetching orders"
      );
    }
  }
);

// Async thunk to fetch order details by ID
export const fetchOrderDetails = createAsyncThunk(
  "orders/fetchOrderDetails",
  async (orderId: string, { rejectWithValue }) => {
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

      const response = await axios.get<{ data: Order }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "An error occurred while fetching order details"
      );
    }
  }
);

// Initial state
const initialState: OrdersState = {
  orders: [],
  totalOrders: 0,
  orderDetails: null,
  loading: false,
  error: null,
};

// Slice
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearOrderDetails: (state) => {
      state.orderDetails = null;
    },
    clearOrdersError: (state) => {
      state.error = null;
    },
    resetOrders: () => initialState,
  },
  extraReducers: (builder) => {
    const handlePending = (state: OrdersState) => {
      state.loading = true;
      state.error = null;
    };

    const handleRejected = (state: OrdersState, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
    };

    builder
      // Fetch user orders
      .addCase(fetchUserOrders.pending, handlePending)
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.totalOrders = action.payload.total;
      })
      .addCase(fetchUserOrders.rejected, handleRejected)

      // Fetch order details
      .addCase(fetchOrderDetails.pending, handlePending)
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, handleRejected);
  },
});

export const { clearOrderDetails, clearOrdersError, resetOrders } =
  orderSlice.actions;
export default orderSlice.reducer;
