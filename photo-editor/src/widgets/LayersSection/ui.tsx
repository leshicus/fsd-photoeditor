import Layer from './Layer';
import { layers } from './layers';
import classes from './styles.module.css';

export const View = () => {
  return (
    <div className={classes.main}>
      {layers.map(layer => <Layer type={layer.type} content={layer.content} />)}
    </div>
  );
};

export default View;