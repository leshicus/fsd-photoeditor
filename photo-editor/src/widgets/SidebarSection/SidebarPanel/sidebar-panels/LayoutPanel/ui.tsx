import Layout from './Layout';
import { layouts } from './model';
import classes from './styles.module.css';

const View = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        LayoutPanel
      </div>
      <div className={classes.body}>
        {layouts.map(layout => <Layout key={layout.title} title={layout.title} size={layout.size} />)}
      </div>
    </div>
  );
};

export default View;