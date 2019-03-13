/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageTransformEventHandler<T = any> extends MSTransformEventHandler {
    perspectiveImage<R = unknown>(): R;
    layerPointForCorner<R = CGPoint, P0 = number>(_layerPointForCorner: P0): R;
    newLayerRect<R = CGRect>(): R;
    pointForCorner_rect<R = CGPoint, P0 = number, P1 = CGRect>(_pointForCorner: P0, _rect: P1): R;
    instructions<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImageTransformEventHandler<T = any> extends MSTransformEventHandler {
      alloc<R = MSImageTransformEventHandler>(): R;
      new: <R = MSImageTransformEventHandler>() => R;
    }
  }
}

declare const MSImageTransformEventHandler: cocoa.classes.MSImageTransformEventHandler;
