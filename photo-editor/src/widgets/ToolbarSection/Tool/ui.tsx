import classes from './styles.module.css';

type ViewProps = {
  tool: string;
};

const View = ({ tool }: ViewProps) => {
  return (
    <div className={classes.main}>{tool}</div>
  );
};

export default View;