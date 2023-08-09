import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';

import { Layout } from '../components';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import DetailsPage from '../pages/DetailsPage';

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
    ],
  },
]);
