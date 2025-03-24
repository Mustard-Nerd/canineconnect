import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Types
interface Product {
  _id: string;
  name: string;
  price: number;
  collection?: string;
  description?: string;
  category?: string;
  brand?: string;
  // Add other product fields as needed
}

interface Filters {
  collection?: string;
  description?: string;
  category?: string;
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
  search?: string;
  limit?: string;
}

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  similarProducts: Product[];
  loading: boolean;
  error: string | null;
  filters: Filters;
}

// Async thunks fetch Products by collection and filters
export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchProductsByFilters",
  async (filters: Filters) => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error("API URL is missing in environment variables");
    }

    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) query.append(key, value);
    });

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?${query.toString()}`
    );
    return response.data.data || response.data; // Handle both response formats
  }
);

// Async thunks fetch Product by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId: string) => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error("API URL is missing in environment variables");
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${productId}`
    );
    return response.data.data || response.data;
  }
);

// Async thunks to update Product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({
    productId,
    productData,
  }: {
    productId: string;
    productData: Partial<Product>;
  }) => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error("API URL is missing in environment variables");
    }

    const token =
      typeof window !== "undefined" ? localStorage.getItem("userToken") : "";

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${productId}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data || response.data;
  }
);

// Async thunk to fetch similar products
export const fetchSimilarProducts = createAsyncThunk(
  "products/fetchSimilarProducts",
  async (productId: string) => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      throw new Error("API URL is missing in environment variables");
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/similar/${productId}`
    );
    return response.data.data || response.data;
  }
);

// Initial state
const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  similarProducts: [],
  loading: false,
  error: null,
  filters: {
    collection: "",
    description: "",
    category: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "",
    search: "",
    limit: "",
  },
};

// Slice for managing product related state
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters: (state, action: { payload: Partial<Filters> }) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        collection: "",
        description: "",
        category: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        limit: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products with filters
      .addCase(fetchProductsByFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.products = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })

      // Fetch single product
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product details";
      })

      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
        if (state.selectedProduct?._id === updatedProduct._id) {
          state.selectedProduct = updatedProduct;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update product";
      })

      // Fetch similar products
      .addCase(fetchSimilarProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.similarProducts = Array.isArray(action.payload)
          ? action.payload
          : [];
      })
      .addCase(fetchSimilarProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch similar products";
      });
  },
});

export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;
