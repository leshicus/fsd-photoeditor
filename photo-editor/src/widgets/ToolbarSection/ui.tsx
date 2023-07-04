import { LayerTypes } from 'widgets/LayersSection/types';
import classes from './styles.module.css';
import { tools } from './tools';
import Tool from './Tool';

export const View = () => {
  const toolList = Object.values(tools[LayerTypes.Text]);

  return (
    <div className={classes.main}>
      {toolList.map(item => <Tool key={item} tool={item} />)}
    </div>
  );
};

export default View;