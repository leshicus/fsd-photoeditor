import { paths } from 'pages/_router';
import { Link } from 'react-router-dom';
import classes from './styles.module.css';

const Header = () => {
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <Link to={paths.MAIN}>
          <b>Editor</b>
        </Link>
      </div>
    </div>
  );
};

export default Header;