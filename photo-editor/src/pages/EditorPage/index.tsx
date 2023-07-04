
import ArtboardSection from 'widgets/ArtboardSection';
import Header from 'widgets/Header';
import SidebarSection from 'widgets/SidebarSection';
import LayersSection from 'widgets/LayersSection';
import ToolbarSection from 'widgets/ToolbarSection';
import classes from './styles.module.css';

export const View = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <div className={classes.sidebarSection}>
          <SidebarSection />
        </div>
        <div className={classes.artboardSection}>
          <div className={classes.toolbarSection}>
            <ToolbarSection />
          </div>
          <div className={classes.artboardSectionBody}>
            <ArtboardSection />
          </div>
        </div>
        <div className={classes.layersSection}>
          <LayersSection />
        </div>
      </div>
    </div>
  );
};

export default View;

