import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAuth } from 'src/hooks/useAuth';
import { refresh } from 'src/redux/auth/authOperations';
import { router } from 'src/routes';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  );
};
