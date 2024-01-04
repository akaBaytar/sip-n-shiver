import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';

  const res = await axios.get(`${URL}${searchTerm}`);

  return { drinks: res.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return <div>Landing</div>;
};

export default Landing;
