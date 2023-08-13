import { Navigation } from '../Navigation/Navigation';

import { useAuth } from 'src/hooks/useAuth';
import { UserMenu, AuthNav, SearchForm } from '..';

import s from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={s.header}>
      <Navigation />
      <SearchForm />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
