import styled from 'styled-components';

import Card from './Card';

const List = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: 'center' }}>No matching cocktail found.</h4>;
  }

  return (
    <Wrapper>
      {drinks.map((drink) => (
        <Card key={drink.idDrink} {...drink} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default List;
