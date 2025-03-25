import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Types
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  stock: number;
  vendor?: string;
  status: "active" | "inactive" | "pending";
  createdAt?: string;
  updatedAt?: string;
}

interface ProductData {
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  stock: number;
  status?: "active" | "inactive" | "pending";
}

interface AdminProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  success: boolean;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
}

// Helper function to get auth token
const getAuthToken = (): string => {
  if (typeof window === "undefined") return "";
  const token = localStorage.getItem("userToken");
  return token ? `Bearer ${token}` : "";
};

// Fetch all admin products
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchAdminProducts",
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
        products: Product[];
        totalPages: number;
        currentPage: number;
        totalProducts: number;
      }>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/products`, {
        headers: { Authorization: token },
        params: { page, limit: 10 },
      });
      return response.data;
    } catch (error: any) {
      console.error("Fetch admin products error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch products"
      );
    }
  }
);

// Create new product
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData: ProductData, { rejectWithValue }) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error("User token not found");
      }

      const response = await axios.post<{ product: Product }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/products`,
        productData,
        { headers: { Authorization: token } }
      );
      return response.data;
    } catch (error: any) {
      console.error("Create product error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to create product"
      );
    }
  }
);

// Update existing product
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async (
    { id, productData }: { id: string; productData: Partial<ProductData> },
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

      const response = await axios.put<{ product: Product }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/products/${id}`,
        productData,
        { headers: { Authorization: token } }
      );
      return response.data;
    } catch (error: any) {
      console.error("Update product error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to update product"
      );
    }
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/products/${id}`,
        { headers: { Authorization: token } }
      );
      return id;
    } catch (error: any) {
      console.error("Delete product error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete product"
      );
    }
  }
);

// Initial state
const initialState: AdminProductsState = {
  products: [],
  loading: false,
  error: null,
  success: false,
  currentPage: 1,
  totalPages: 1,
  totalProducts: 0,
};

// Slice
const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {
    clearAdminProductError: (state) => {
      state.error = null;
    },
    resetAdminProducts: () => initialState,
  },
  extraReducers: (builder) => {
    const handlePending = (state: AdminProductsState) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    };

    const handleRejected = (state: AdminProductsState, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = false;
    };

    builder
      // Fetch products
      .addCase(fetchAdminProducts.pending, handlePending)
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchAdminProducts.rejected, handleRejected)

      // Create product
      .addCase(createProduct.pending, handlePending)
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.unshift(action.payload.product);
        state.totalProducts += 1;
        state.success = true;
      })
      .addCase(createProduct.rejected, handleRejected)

      // Update product
      .addCase(updateProduct.pending, handlePending)
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload.product;
        const index = state.products.findIndex(
          (p) => p._id === updatedProduct._id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
        state.success = true;
      })
      .addCase(updateProduct.rejected, handleRejected)

      // Delete product
      .addCase(deleteProduct.pending, handlePending)
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((p) => p._id !== action.payload);
        state.totalProducts -= 1;
        state.success = true;
      })
      .addCase(deleteProduct.rejected, handleRejected);
  },
});

export const { clearAdminProductError, resetAdminProducts } =
  adminProductSlice.actions;
export default adminProductSlice.reducer;
