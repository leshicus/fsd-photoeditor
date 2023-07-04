import LayoutPanel from '../SidebarPanel/sidebar-panels/LayoutPanel';
import NotImplementedPanel from '../SidebarPanel/sidebar-panels/NotImplementedPanel';
import { paths } from './paths';

export const publicRoutes = [
  {
    path: '*',
    element: <NotImplementedPanel />,
  },
  {
    path: paths.LAYOUT,
    element: <LayoutPanel />,
  },
];
