import { Link } from 'react-router-dom';
import { paths } from './../_router';

export const Main = () => {

  return (
    <>
      <h1>Main</h1>
      <Link to={paths.EDITOR}>Editor</Link>
    </>
  );
};