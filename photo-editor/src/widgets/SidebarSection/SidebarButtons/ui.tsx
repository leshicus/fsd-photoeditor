import { sidebarItems } from '../_router/paths';
import SidebarButton from './SidebarButton';

export const View = () => {
  return (
    <div>
      {sidebarItems.map((item) => <SidebarButton key={item.name} path={item.path} name={item.name} />)}
    </div>
  );
};

export default View;