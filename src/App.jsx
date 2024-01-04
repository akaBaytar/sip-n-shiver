import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './layout';
import { About, Coctail, Landing, Newsletter, Error, SingleError } from './pages';

import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SingleError />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/coctail/:id',
        element: <Coctail />,
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
