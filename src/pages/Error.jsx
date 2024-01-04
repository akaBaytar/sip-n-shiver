import { Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

import svg from '/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={svg} alt='Not Found' />
          <h3>Look like you're lost.</h3>
          <p>The page you are looking for not avaible!</p>
          <Link to='/'>Go to Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80vw;
    max-width: 30rem;
    display: block;
    margin-bottom: 2rem;
    margin-top: -4rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    text-transform: none;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.5;
    color: var(--grey-500);
  }

  a {
    display: block;
    width: max-content;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: var(--borderRadius);
    color: var(--white);
    background-color: var(--primary-500);
  }
`;

export default Error;
