import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main className='layout'>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
