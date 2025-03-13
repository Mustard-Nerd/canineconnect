"use client";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Utility functions to safely access localStorage
const getLocalStorageItem = (key: string): any => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

const setLocalStorageItem = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const removeLocalStorageItem = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

const generateGuestId = (): string => {
  return `guest_${new Date().getTime()}`;
};

// Define types
interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  guestId: string;
  loading: boolean;
  error: string | null;
}

// Initial state
const userFromStorage = getLocalStorageItem("userInfo");
const initialGuestId = getLocalStorageItem("guestId") || generateGuestId();
setLocalStorageItem("guestId", initialGuestId);

const initialState: AuthState = {
  user: userFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null,
};

// Async thunks
export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
      userData
    );
    setLocalStorageItem("userInfo", response.data.user);
    setLocalStorageItem("userToken", response.data.token);
    return response.data.user;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "An error occurred during login."
    );
  }
});

export const registerUser = createAsyncThunk<
  User,
  { name: string; email: string; password: string },
  { rejectValue: string }
>("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`,
      userData
    );
    setLocalStorageItem("userInfo", response.data.user);
    setLocalStorageItem("userToken", response.data.token);
    return response.data.user;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "An error occurred during registration."
    );
  }
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.guestId = generateGuestId();
      removeLocalStorageItem("userInfo");
      removeLocalStorageItem("userToken");
      setLocalStorageItem("guestId", state.guestId);
    },
    generateNewGuestId: (state) => {
      state.guestId = generateGuestId();
      setLocalStorageItem("guestId", state.guestId);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      });
  },
});

export const { logout, generateNewGuestId, clearError } = authSlice.actions;
export default authSlice.reducer;
