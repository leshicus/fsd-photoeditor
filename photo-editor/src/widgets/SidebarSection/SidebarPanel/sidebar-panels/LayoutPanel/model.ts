import { Layout } from './Layout/types';
import { LAYOUT_NUMBER } from './configs';

export const layouts: Layout[] = new Array(LAYOUT_NUMBER).fill('').map((_, idx) => ({
  title: `Layout ${idx}`,
  size: `${idx}x${idx}`
}));