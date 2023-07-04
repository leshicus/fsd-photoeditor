import { Link } from 'react-router-dom';
import classes from './styles.module.css';

type ViewProps = {
  path: string,
  name: string;
};

const View = ({ path, name }: ViewProps) => {
  return (
    <div className={classes.main}>
      <Link to={path}>
        <div className={classes.title}>
          {name}
        </div>
      </Link>
    </div>
  );
};

export default View;