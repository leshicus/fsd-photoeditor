export enum LayerTypes {
  Text = 'Text',
  Image = 'Image',
  Sticker = 'Sticker',
  Shape = 'Shape',
  Background = 'Background',
  Collage = 'Collage',
}

export interface BaseLayer {
  content: string;
}

export interface TextLayer extends BaseLayer {
  type: LayerTypes.Text,
}

export interface ImageLayer extends BaseLayer {
  type: LayerTypes.Image,
}

export interface StickerLayer extends BaseLayer {
  type: LayerTypes.Sticker,
}

export interface ShapeLayer extends BaseLayer {
  type: LayerTypes.Shape,
}

export interface BackgroundLayer extends BaseLayer {
  type: LayerTypes.Background,
}

export interface CollageLayer extends BaseLayer {
  type: LayerTypes.Collage,
}

export type Layer =
  TextLayer
  | ImageLayer
  | StickerLayer
  | ShapeLayer
  | CollageLayer
  | BackgroundLayer;