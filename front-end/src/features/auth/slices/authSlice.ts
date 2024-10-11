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
    token: string;
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

export const refreshToken = createAsyncThunk<
  {
    token: string;
    tokenExpires: number;
  },
  { refreshToken: string },
  { rejectValue: string }
>('auth/refreshToken', async ({ refreshToken }, { rejectWithValue }) => {
  try {
    const response = await loginApi.postRefreshToken({ refreshToken });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Gia hạn token thất bại');
  }
});

export const loadAuthFromLocalStorage = createAsyncThunk(
  'auth/loadAuthFromLocalStorage',
  async (_, { dispatch }) => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      const { token, refreshToken, tokenExpires, user } = authData;

      if (tokenExpires && Date.now() > tokenExpires) {
        await dispatch(refreshToken({ refreshToken }));
      } else {
        return { token, refreshToken, tokenExpires, user };
      }
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      console.log('Logout reducer triggered');
      state.token = null;
      state.refreshToken = null;
      state.tokenExpires = null;
      state.user = null;
      localStorage.removeItem('auth');
      console.log('Auth removed from localStorage');
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
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.tokenExpires = action.payload.tokenExpires;
        state.user = action.payload.user;

        localStorage.setItem(
          'auth',
          JSON.stringify({
            token: action.payload.token,
            refreshToken: action.payload.refreshToken,
            tokenExpires: action.payload.tokenExpires,
            user: action.payload.user,
          }),
        );
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.tokenExpires = action.payload.tokenExpires;

        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
          const authData = JSON.parse(storedAuth);
          localStorage.setItem(
            'auth',
            JSON.stringify({
              ...authData,
              token: action.payload.token,
              tokenExpires: action.payload.tokenExpires,
            }),
          );
        }
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.error = action.payload as string;
        state.token = null;
        state.refreshToken = null;
        state.tokenExpires = null;
        state.user = null;
        localStorage.removeItem('auth');
      })

      .addCase(loadAuthFromLocalStorage.fulfilled, (state, action) => {
        if (action.payload) {
          state.token = action.payload.token;
          state.refreshToken = action.payload.refreshToken;
          state.tokenExpires = action.payload.tokenExpires;
          state.user = action.payload.user;
        }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
