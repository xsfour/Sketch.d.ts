/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers17MSInterLayerSpace<T = any> extends cocoa.NSObject {
    cxx_destruct<R = cocoa.CDUnknownBlockType>(): R;
    initWithLayer_layer_axis<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithLayer: P0, _layer: P1, _axis: P2): R;
    heightAnchor<R = cocoa.MSLayoutDimension>(): R;
    setHeightAnchor<R = void, P0 = cocoa.MSLayoutDimension>(_v: P0): R;
    widthAnchor<R = cocoa.MSLayoutDimension>(): R;
    setWidthAnchor<R = void, P0 = cocoa.MSLayoutDimension>(_v: P0): R;
    axis<R = number>(): R;
    secondLayer<R = cocoa.MSLayer>(): R;
    firstLayer<R = cocoa.MSLayer>(): R;
    // + _TtC17SketchControllers17MSInterLayerSpace(SketchControllers):
    anchorForSnapping<R = cocoa.MSLayoutDimension>(): R;
    frame<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface _TtC17SketchControllers17MSInterLayerSpace<T = any> extends cocoa.classes.NSObject {
      alloc<R = _TtC17SketchControllers17MSInterLayerSpace>(): R;
      new: <R = _TtC17SketchControllers17MSInterLayerSpace>() => R;
      // + _TtC17SketchControllers17MSInterLayerSpace(SketchControllers):
      
    }
  }
}
