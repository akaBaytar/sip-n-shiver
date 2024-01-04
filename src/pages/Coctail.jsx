import { useLoaderData, Link, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const coctailQuery = (id) => {
  return {
    queryKey: ['coctail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${URL}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(coctailQuery(id));
    return { id };
  };

const Coctail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(coctailQuery(id));

  if (!data) <Navigate to='/' />;

  const drink = data.drinks[0];
  const { strDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass, strInstructions } = drink;

  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key] !== null)
    .map((key) => drink[key]);

  const measures = Object.keys(drink)
    .filter((key) => key.startsWith('strMeasure') && drink[key] !== null)
    .map((key) => drink[key]);

  const ingredientsWithMeasures = ingredients.map((arr, idx) => arr + ' - ' + measures[idx]);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='button'>
          Back Home
        </Link>
        <h3>{strDrink}</h3>
      </header>
      <div className='drink'>
        <img src={strDrinkThumb} alt={strDrink} className='image' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name: </span>
            {strDrink}
          </p>
          <p>
            <span className='drink-data'>Category: </span>
            {strCategory}
          </p>
          <p>
            <span className='drink-data'>Alcoholic: </span>
            {strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>Glass: </span>
            {strGlass}
          </p>
          <p>
            <span className='drink-data'>Instructions: </span>
            {strInstructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients: </span>
            {ingredientsWithMeasures.map((ingredient, idx) => {
              return (
                <span key={ingredient} className='ingredient'>
                  {ingredient}
                  {idx < ingredients.length - 1 ? ', ' : ''}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 1rem;

    .button {
      margin-bottom: 2rem;
    }

    h3 {
      font-weight: 600;
    }
  }

  .image {
    max-width: 30rem;
    display: block;
    margin: 0 auto;
    border-radius: var(--borderRadius);
  }

  .drink-info {
    padding-top: 2rem;
  }

  .drink p {
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }

  .drink-data {
    margin-right: 0.5rem;
    background-color: var(--grey-300);
    color: var(--grey-900);
    padding: 0.25rem;
    border-radius: var(--borderRadius);
  }

  .ingredient {
    display: inline-block;
    margin-right: 0.25rem;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Coctail;
