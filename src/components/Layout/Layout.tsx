import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Spinner } from '..';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <footer>footer</footer>
    </>
  );
};
