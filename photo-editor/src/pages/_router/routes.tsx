import { paths } from './paths';
import { paths as sidebarPaths } from 'widgets/SidebarSection/_router/paths';
import MainPage from 'pages/MainPage';
import EditorPage from 'pages/EditorPage';

export const publicRoutes = [
  {
    path: paths.MAIN,
    element: <MainPage />,
  },
  {
    path: paths.EDITOR,
    element: <EditorPage />,
    children: Object.values(sidebarPaths).map(path => ({
      path
    }))
  },
];
