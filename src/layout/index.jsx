import { Fragment } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Layout = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <Navbar />
      <main className='layout'>{navigation.state === 'loading' ? <div className='loading'/> : <Outlet />}</main>
    </Fragment>
  );
};

export default Layout;
