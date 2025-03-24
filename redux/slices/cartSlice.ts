import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Types
interface CartProduct {
  productId: string;
  quantity: number;
  price?: number;
  name?: string;
  image?: string;
  // Add other product fields as needed
}

interface Cart {
  products: CartProduct[];
  userId?: string;
  guestId?: string;
  totalPrice?: number;
  totalItems?: number;
}

interface CartState {
  cart: Cart;
  loading: boolean;
  error: string | null;
}

interface CartActionParams {
  productId?: string;
  quantity?: number;
  guestId?: string;
  userId?: string;
}

// Helper functions with TypeScript
const loadCartFromStorage = (): Cart => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { products: [] };
  }
  return { products: [] };
};

const saveCartToStorage = (cart: Cart): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Async Thunks
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }: CartActionParams, { rejectWithValue }) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart`,
        {
          params: { userId, guestId },
        }
      );
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch cart"
      );
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { productId, quantity, guestId, userId }: Required<CartActionParams>,
    { rejectWithValue }
  ) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart`,
        {
          productId,
          quantity,
          guestId,
          userId,
        }
      );
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add to cart"
      );
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async (
    { productId, quantity, guestId, userId }: Required<CartActionParams>,
    { rejectWithValue }
  ) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart`,
        {
          productId,
          quantity,
          guestId,
          userId,
        }
      );
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update quantity"
      );
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (
    { productId, guestId, userId }: Omit<CartActionParams, "quantity">,
    { rejectWithValue }
  ) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart`,
        {
          data: { productId, guestId, userId },
        }
      );
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove item"
      );
    }
  }
);

export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async (
    { guestId, userId }: Omit<CartActionParams, "productId" | "quantity">,
    { rejectWithValue }
  ) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token =
        typeof window !== "undefined" ? localStorage.getItem("userToken") : "";
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/merge`,
        { guestId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to merge carts"
      );
    }
  }
);

// Initial state
const initialState: CartState = {
  cart: loadCartFromStorage(),
  loading: false,
  error: null,
};

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] };
      saveCartToStorage(state.cart);
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state: CartState) => {
      state.loading = true;
      state.error = null;
    };

    const handleFulfilled = (state: CartState, action: any) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
    };

    const handleRejected = (state: CartState, action: any) => {
      state.loading = false;
      state.error = (action.payload as string) || "An error occurred";
    };

    builder
      .addCase(fetchCart.pending, handlePending)
      .addCase(fetchCart.fulfilled, handleFulfilled)
      .addCase(fetchCart.rejected, handleRejected)

      .addCase(addToCart.pending, handlePending)
      .addCase(addToCart.fulfilled, handleFulfilled)
      .addCase(addToCart.rejected, handleRejected)

      .addCase(updateCartItemQuantity.pending, handlePending)
      .addCase(updateCartItemQuantity.fulfilled, handleFulfilled)
      .addCase(updateCartItemQuantity.rejected, handleRejected)

      .addCase(removeFromCart.pending, handlePending)
      .addCase(removeFromCart.fulfilled, handleFulfilled)
      .addCase(removeFromCart.rejected, handleRejected)

      .addCase(mergeCart.pending, handlePending)
      .addCase(mergeCart.fulfilled, handleFulfilled)
      .addCase(mergeCart.rejected, handleRejected);
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
