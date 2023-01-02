import { RouteObject } from 'react-router-dom';
import { ErrorPage, HomePage } from './pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
];
