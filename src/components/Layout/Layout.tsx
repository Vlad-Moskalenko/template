import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};
