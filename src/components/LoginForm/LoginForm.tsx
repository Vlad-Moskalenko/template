import React, { useState } from 'react';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { login } from 'src/redux/auth/authOperations';

import s from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [user, setUser] = useState(INITIAL_STATE);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setUser(prevState => ({ ...prevState, [input.name]: input.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login(user));
  };

  const { email, password } = user;

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Email
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <label className={s.label}>
        Password
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
