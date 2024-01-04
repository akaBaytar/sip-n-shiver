import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './layout';
import { About, Coctail, Landing, Newsletter, Error, SingleError } from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as coctailLoader } from './pages/Coctail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleError />,
        loader: landingLoader,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/coctail/:id',
        element: <Coctail />,
        errorElement: <SingleError />,
        loader: coctailLoader,
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
  return <RouterProvider router={router} />;
};

export default App;
