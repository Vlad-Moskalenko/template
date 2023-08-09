import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';

import { Layout } from 'src/components';
import {
  HomePage,
  ErrorPage,
  DetailsPage,
  FavoritesPage,
  LoginPage,
  RegisterPage,
} from 'src/pages';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.DETAILS,
        element: <DetailsPage />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);
