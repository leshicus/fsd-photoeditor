import { paths } from './paths';
import { Main } from 'pages/main';
import { Editor } from 'pages/editor';

export const publicRoutes = [
  {
    path: paths.MAIN,
    element: <Main />,
  },
  {
    path: paths.EDITOR,
    element: <Editor />,
  },
];
