
import classes from './styles.module.css';
import SidebarButtons from './SidebarButtons';
import SidebarPanel from './SidebarPanel';

const View = () => {
  return (
    <div className={classes.main}>
      <div className={classes.sidebarButtons}>
        <SidebarButtons />
      </div>
      <div className={classes.sidebarPanel}>
        <SidebarPanel />
      </div>
    </div>
  );
};

export default View;