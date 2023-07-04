import { Layout } from './types';
import classes from './styles.module.css';

type ViewProps = {
  title: Layout['title'],
  size: Layout['size'];
};

const View = ({ title, size }: ViewProps) => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.size}>
        {size}
      </div>
    </div>
  );
};

export default View;