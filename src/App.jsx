import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from './layout';
import { About, Coctail, Landing, Newsletter, Error, SingleError } from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as coctailLoader } from './pages/Coctail';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleError />,
        loader: landingLoader(queryClient),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/coctail/:id',
        element: <Coctail />,
        errorElement: <SingleError />,
        loader: coctailLoader(queryClient),
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
