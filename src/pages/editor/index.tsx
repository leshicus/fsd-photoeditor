
import { Artboard } from 'widgets/artboard';
import { Header } from 'widgets/header';
import { LeftSidebar } from 'widgets/left-sidebar';
import { RightSidebar } from 'widgets/right-sidebar';
import { Toolbar } from 'widgets/toolbar';
import classes from './styles.module.css';

export const Editor = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <div className={classes.leftColumn}>
          <LeftSidebar />
        </div>
        <div className={classes.centerColumn}>
          <div className={classes.toolBar}>
            <Toolbar />
          </div>
          <div className={classes.centerColumnBody}>
            <Artboard />
          </div>
        </div>
        <div className={classes.rightColumn}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

