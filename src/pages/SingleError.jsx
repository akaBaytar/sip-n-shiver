import { useRouteError } from 'react-router-dom';

const SingleError = () => {
  const error = useRouteError();

  return <div>{error.message}</div>;
};

export default SingleError;
