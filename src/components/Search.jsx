import { Form, useNavigation } from 'react-router-dom';

import styled from 'styled-components';

const Search = ({ searchTerm }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          placeholder='Search for your perfect sip...'
          defaultValue={searchTerm}
        />
        <button type='submit' className='button' disabled={isSubmitting}>
          {isSubmitting ? 'Searching...' : 'Search'}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

export default Search;
