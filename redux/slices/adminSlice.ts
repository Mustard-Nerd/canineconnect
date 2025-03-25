import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Types
interface User {
  _id: string;
  username: string;
  email: string;
  role: "user" | "admin" | "vendor";
  createdAt?: string;
  updatedAt?: string;
  // Add other user fields as needed
}

interface AdminState {
  users: User[];
  loading: boolean;
  error: string | null;
  success: boolean;
  currentPage: number;
  totalPages: number;
  totalUsers: number;
}

interface UserData {
  username: string;
  email: string;
  password?: string;
  role: string;
}

interface UpdateUserData {
  id: string;
  username?: string;
  email?: string;
  role?: string;
}

// Helper function to get auth token
const getAuthToken = (): string => {
  if (typeof window === "undefined") return "";
  const token = localStorage.getItem("userToken");
  return token ? `Bearer ${token}` : "";
};

// Fetch all users (admin only)
export const fetchUsers = createAsyncThunk(
  "admin/fetchUsers",
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
        users: User[];
        totalPages: number;
        currentPage: number;
        totalUsers: number;
      }>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/users`, {
        headers: { Authorization: token },
        params: { page, limit: 10 }, // Adjust limit as needed
      });
      return response.data;
    } catch (error: any) {
      console.error("Fetch users error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch users"
      );
    }
  }
);

// Add new user
export const addUser = createAsyncThunk(
  "admin/addUser",
  async (userData: UserData, { rejectWithValue }) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error("User token not found");
      }

      const response = await axios.post<{ user: User }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/users`,
        userData,
        { headers: { Authorization: token } }
      );
      return response.data;
    } catch (error: any) {
      console.error("Add user error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to add user"
      );
    }
  }
);

// Update user info
export const updateUser = createAsyncThunk(
  "admin/updateUser",
  async ({ id, ...userData }: UpdateUserData, { rejectWithValue }) => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("API URL is not configured");
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error("User token not found");
      }

      const response = await axios.put<{ user: User }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/users/${id}`,
        userData,
        { headers: { Authorization: token } }
      );
      return response.data;
    } catch (error: any) {
      console.error("Update user error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to update user"
      );
    }
  }
);

// Delete a user
export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/users/${id}`,
        { headers: { Authorization: token } }
      );
      return id;
    } catch (error: any) {
      console.error("Delete user error:", error);
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete user"
      );
    }
  }
);

// Initial state
const initialState: AdminState = {
  users: [],
  loading: false,
  error: null,
  success: false,
  currentPage: 1,
  totalPages: 1,
  totalUsers: 0,
};

// Slice
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    },
    resetAdminState: () => initialState,
  },
  extraReducers: (builder) => {
    const handlePending = (state: AdminState) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    };

    const handleRejected = (state: AdminState, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = false;
    };

    builder
      // Fetch users
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalUsers = action.payload.totalUsers;
      })
      .addCase(fetchUsers.rejected, handleRejected)

      // Add user
      .addCase(addUser.pending, handlePending)
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.unshift(action.payload.user); // Add new user to beginning
        state.totalUsers += 1;
        state.success = true;
      })
      .addCase(addUser.rejected, handleRejected)

      // Update user
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload.user;
        const index = state.users.findIndex(
          (user) => user._id === updatedUser._id
        );
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
        state.success = true;
      })
      .addCase(updateUser.rejected, handleRejected)

      // Delete user
      .addCase(deleteUser.pending, handlePending)
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user._id !== action.payload);
        state.totalUsers -= 1;
        state.success = true;
      })
      .addCase(deleteUser.rejected, handleRejected);
  },
});

export const { clearAdminError, resetAdminState } = adminSlice.actions;
export default adminSlice.reducer;
