import {AuthState} from './authSlice.ts'

export const selectUser = (state: AuthState) => state.user;
export const selectIsLoggedIn = (state: AuthState) => state.isLoggedIn;
export const selectIsRefreshing = (state: AuthState) => state.isRefreshing;
export const selectToken = (state: AuthState) => state.token;