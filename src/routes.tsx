import { RouteObject } from 'react-router-dom';
import { ErrorPage, HomePage, LogInPage } from './pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login/',
    element: <LogInPage />,
    errorElement: <ErrorPage />,
  },
];
