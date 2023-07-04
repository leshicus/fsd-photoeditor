import classes from './styles.module.css';

type ViewProps = {
  type: string,
  content: string;
};

const View = ({ type, content }: ViewProps) => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        {type}
      </div>
      <div className={classes.body}>
        {content}
      </div>
    </div>
  );
};

export default View;