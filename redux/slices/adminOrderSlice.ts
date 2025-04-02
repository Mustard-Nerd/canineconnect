import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Types
interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
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
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
  createdAt: string;
}

interface AdminOrdersState {
  orders: Order[];
  totalOrders: number;
  totalSales: number;
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

// Helper function to get auth token
const getAuthToken = (): string => {
  if (typeof window === "undefined") return "";
  const token = localStorage.getItem("userToken");
  return token ? `Bearer ${token}` : "";
};

// Fetch all orders (admin only)
export const fetchAllOrders = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async (page: number = 1, { rejectWithValue }) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error("User token not found");
      }

      const response = await axios.get<{
        orders: Order[];
        totalOrders: number;
        totalPages: number;
        totalSales: number;
      }>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/orders`, {
        headers: { Authorization: token },
        params: { page, limit: 10 },
      });
      return response.data;
    } catch (error: any) {
      console.error("Fetch orders error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch orders"
      );
    }
  }
);

// Update order delivery status
export const updateOrderStatus = createAsyncThunk(
  "adminOrders/updateOrderStatus",
  async (
    { id, status }: { id: string; status: Order["status"] },
    { rejectWithValue }
  ) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error("User token not found");
      }

      const response = await axios.put<{ order: Order }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/orders/${id}`,
        { status },
        { headers: { Authorization: token } }
      );
      return response.data;
    } catch (error: any) {
      console.error("Update order status error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to update order status"
      );
    }
  }
);

// Delete an order
export const deleteOrder = createAsyncThunk(
  "adminOrders/deleteOrder",
  async (id: string, { rejectWithValue }) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error("User token not found");
      }

      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/orders/${id}`,
        { headers: { Authorization: token } }
      );
      return id;
    } catch (error: any) {
      console.error("Delete order error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete order"
      );
    }
  }
);

// Initial state
const initialState: AdminOrdersState = {
  orders: [],
  totalOrders: 0,
  totalSales: 0,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

// Slice
const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState,
  reducers: {
    clearAdminOrderError: (state) => {
      state.error = null;
    },
    resetAdminOrders: () => initialState,
  },
  extraReducers: (builder) => {
    const handlePending = (state: AdminOrdersState) => {
      state.loading = true;
      state.error = null;
    };

    const handleRejected = (state: AdminOrdersState, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
    };

    builder
      // Fetch all orders
      .addCase(fetchAllOrders.pending, handlePending)
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.totalOrders = action.payload.totalOrders;
        state.totalSales = action.payload.totalSales;
        state.currentPage = action.meta.arg || 1;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAllOrders.rejected, handleRejected)

      // Update order status
      .addCase(updateOrderStatus.pending, handlePending)
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedOrder = action.payload.order;
        const index = state.orders.findIndex((o) => o._id === updatedOrder._id);
        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
      })
      .addCase(updateOrderStatus.rejected, handleRejected)

      // Delete order
      .addCase(deleteOrder.pending, handlePending)
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload
        );
        state.totalOrders -= 1;
        state.totalSales = state.orders.reduce(
          (acc, order) => acc + order.totalPrice,
          0
        );
      })
      .addCase(deleteOrder.rejected, handleRejected);
  },
});

export const { clearAdminOrderError, resetAdminOrders } =
  adminOrderSlice.actions;
export default adminOrderSlice.reducer;
