/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageTransformEventHandler<T = any> extends cocoa.MSTransformEventHandler {
    perspectiveImage<R = unknown>(): R;
    layerPointForCorner<R = cocoa.CGPoint, P0 = number>(_layerPointForCorner: P0): R;
    newLayerRect<R = cocoa.CGRect>(): R;
    pointForCorner_rect<R = cocoa.CGPoint, P0 = number, P1 = cocoa.CGRect>(_pointForCorner: P0, _rect: P1): R;
    instructions<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImageTransformEventHandler<T = any> extends cocoa.classes.MSTransformEventHandler {
      alloc<R = MSImageTransformEventHandler>(): R;
      new: <R = MSImageTransformEventHandler>() => R;
    }
  }
}

declare const MSImageTransformEventHandler: cocoa.classes.MSImageTransformEventHandler;
