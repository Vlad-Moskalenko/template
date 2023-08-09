import { NavLink } from 'react-router-dom';

import { useAuth } from 'src/hooks/useAuth';
import { ROUTES } from 'src/routes/routes.const';

import s from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={s.link} to={ROUTES.HOME}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to={ROUTES.FAVORITES}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};
