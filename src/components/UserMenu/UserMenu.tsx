import { useAppDispatch } from 'src/hooks/useAppDispatch';

import { logout } from 'src/redux/auth/authOperations';
import { useAuth } from 'src/hooks/useAuth';

import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
