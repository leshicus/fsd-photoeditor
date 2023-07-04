import { Layer, LayerTypes } from './types';

export const layers: Layer[] = [
  {
    type: LayerTypes.Text,
    content: 'Some text'
  },
  {
    type: LayerTypes.Image,
    content: 'Some image'
  },
  {
    type: LayerTypes.Sticker,
    content: 'Some image'
  },
  {
    type: LayerTypes.Shape,
    content: 'Some image'
  },
  {
    type: LayerTypes.Collage,
    content: 'Some image'
  },
  {
    type: LayerTypes.Background,
    content: 'Some image'
  },
];