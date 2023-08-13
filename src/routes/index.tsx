import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoutes';

import { Layout } from 'src/components';
import {
  HomePage,
  HomeTagPage,
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
        path: ROUTES.HOME_TAG,
        element: <HomeTagPage />,
      },
      {
        path: ROUTES.DETAILS,
        element: <DetailsPage />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <PrivateRoute redirectTo="/login" component={FavoritesPage} />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RestrictedRoute redirectTo="/favorites" component={RegisterPage} />,
      },
      {
        path: ROUTES.LOGIN,
        element: <RestrictedRoute redirectTo="/favorites" component={LoginPage} />,
      },
    ],
  },
]);
