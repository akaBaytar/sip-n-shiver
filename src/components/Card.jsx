import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb }) => {
  return (
    <Wrapper>
      <div className='image-container'>
        <img src={strDrinkThumb} alt={strDrink} className='image' />
      </div>
      <div className='footer'>
        <h4>{strDrink}</h4>
        <h5>{strCategory}</h5>
        <small>{strAlcoholic}</small>
        <Link to={`/coctail/${idDrink}`} className='button'>
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);

  &:hover {
    box-shadow: var(--shadow-4);
  }

  img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }

  .footer {
    padding: 1rem;

    h4 {
      font-weight: 600;
      color: var(--grey-900);
    }

    h5 {
      color: var(--grey-700);
    }

    small {
      display: block;
      color: var(--grey-500);
    }

    h4,
    h5,
    small {
      margin-bottom: 0.5rem;
    }
  }
`;

export default Card;
