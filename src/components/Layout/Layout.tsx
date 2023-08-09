import { Outlet } from 'react-router-dom';
import { AppBar } from '..';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <footer>footer</footer>
    </>
  );
};
