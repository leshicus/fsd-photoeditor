import { Link } from 'react-router-dom';
import { paths } from '../_router';

export const View = () => {

  return (
    <>
      <h1>Main</h1>
      <Link to={paths.EDITOR}>Editor</Link>
    </>
  );
};

export default View;