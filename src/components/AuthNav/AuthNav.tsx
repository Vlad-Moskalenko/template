import { NavLink } from 'react-router-dom';

import { ROUTES } from 'src/routes/routes.const';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={s.link} to={ROUTES.REGISTER}>
        Register
      </NavLink>
      <NavLink className={s.link} to={ROUTES.LOGIN}>
        Log In
      </NavLink>
    </div>
  );
};
