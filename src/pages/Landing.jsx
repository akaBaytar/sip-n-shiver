import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

import List from '../components/List';
import Search from '../components/Search';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';

  const res = await axios.get(`${API_URL}${searchTerm}`);

  return { drinks: res.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <Fragment>
      <Search searchTerm={searchTerm} />
      <List drinks={drinks} />
    </Fragment>
  );
};

export default Landing;
