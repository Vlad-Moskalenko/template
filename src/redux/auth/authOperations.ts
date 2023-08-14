import { createAsyncThunk } from "@reduxjs/toolkit"

import { authInstance } from 'src/services/axiosConfig';
import { User } from "src/entities/User";

interface RootState {
  auth: {
    token: string;
  };
}

const token = {
  set(token:string | null):void {
    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset():void{
    authInstance.defaults.headers.common.Authorization = '';
  }
}

const register = createAsyncThunk('auth/signUp', async (userData: User, thunkApi) => {
  try{
    const {data} = await authInstance.post('/users/signup', userData)
    token.set(data.token)
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

const login = createAsyncThunk('auth/login', async (userData: User, thunkApi) => {
  try{
    const {data} = await authInstance.post('/users/login', userData)
    token.set(data.token)
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try{
    await authInstance.post('/users/logout')
    token.unset()
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const {auth} = thunkApi.getState() as RootState
  const persistedToken = auth.token

  if(!persistedToken){
    return thunkApi.rejectWithValue('Unable to fetch user');
  }

  try{
    token.set(persistedToken)
    const {data} = await authInstance.get('/users/current')
    return data
  }
  catch(err){
    return thunkApi.rejectWithValue(err)
  }
})

export {login, logout, register, refresh}
