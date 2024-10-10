import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginApi from '@/api/loginApi';
import { Account } from '@/types/interface/Account';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  tokenExpires: number | null;
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  tokenExpires: null,
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk<
  {
    accessToken: string;
    refreshToken: string;
    tokenExpires: number;
    user: any;
  },
  Account,
  { rejectValue: string }
>('auth/login', async (account: Account, { rejectWithValue }) => {
  try {
    const response = await loginApi.postLogin(account);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Đăng nhập thất bại');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.tokenExpires = null;
      state.user = null;
      localStorage.removeItem('auth');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.tokenExpires = action.payload.tokenExpires;
        state.user = action.payload.user;

        // Lưu vào localStorage
        localStorage.setItem(
          'auth',
          JSON.stringify({
            token: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
            tokenExpires: action.payload.tokenExpires,
            user: action.payload.user,
          }),
        );
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
